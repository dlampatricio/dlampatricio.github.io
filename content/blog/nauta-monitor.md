---
title: 'Nauta Monitor: Building Visibility for a Prepaid Network With No API'
excerpt: 'How a retired laptop and a pay-per-hour Nauta Hogar connection became a self-hosted CLI that tracks balance, forecasts depletion, and measures real bandwidth — without paid infrastructure.'
date: '2026-10-28'
tags:
  - case-study
  - python
  - homelab
  - docker
  - observability
  - cli
---

Every homelab starts with a constraint. Mine was a retired laptop and a prepaid internet connection.

I wanted a server I could keep running without a monthly bill. Vercel, Supabase, and similar platforms offer generous free tiers, but they are designed for prototypes and demos, not for an always-on process that needs persistence, a scheduler, and a place to live that will not expire. The old laptop was already paid for. It had a CPU, a disk, and a power supply. What it lacked was a reason to stay on.

The first service I deployed was not a blog, a dashboard, or a media server. It was a monitor for the connection the laptop was using. That felt appropriate. Before the machine could do anything useful, it needed to know how much internet it had left.

## The Two Questions

Nauta Hogar is ETECSA's prepaid home internet service in Cuba. You buy credit in CUP, and the connection consumes it by the hour at the rate of your plan. That model turns every day into a small budgeting exercise, and two questions follow you around:

_How much time do I have left?_ and _is the connection I am paying for actually delivering?_

The official portal answers the first one, one login at a time. It shows a balance, an expiration date, and recent sessions. It does not show a trend, a forecast, or a measurement of real throughput. It also has no API, which in 2026 feels almost rude.

For a while I did the arithmetic manually: divide the balance by the hourly rate, guess how much I had used that week, and hope the estimate was close. The guesswork was not expensive in minutes. It was expensive in attention. Every time the connection felt slow, I had no way to tell whether the problem was the network, the plan, or the machine in front of me.

The monitor started as a way to end that argument with myself.

## What the Constraints Ruled Out

The constraints did most of the design work.

Zero recurring cost came first. The server was an old laptop, so the stack had to run without a managed database, a paid API, or a cloud dependency. Headless came second. There was no desktop environment, which meant everything had to work over SSH, inside Docker, and without a browser.

The connection itself imposed the third constraint. Every speedtest spends the same credit it is measuring, so the tool had to be short, capped, and easy to disable. The fourth was the network: the ETECSA portal only answers from inside Nauta, and its TLS configuration belongs to another decade. And the fifth was the environment. Docker Hub is blocked here. Any deployment that assumed a clean pull from the public registry was a deployment that would never start.

A web dashboard, a hosted database, and a browser-based speedtest all looked reasonable in a diagram and wrong on this machine. What survived was a terminal application, a text file, and a container.

## Pretending to Be a Browser

The least glamorous part of the project is the part that makes everything else possible.

The ETECSA portal has no public API, so the client does what a browser would do. It fetches the login form, pulls out the hidden `CSRFHW` and `wlanuserip` fields, and posts them along with the credentials to the query servlet. The response is HTML. The parser turns that HTML into an account state: status, credit, expiration, access areas, and recent sessions.

Two details matter in practice. The portal's TLS stack is old, so the client lowers the security level only for that connection instead of disabling verification everywhere. And the whole flow only works from inside the Nauta network, which is why the monitor lives on the laptop rather than on a public VPS.

This is also the most fragile part of the system. If ETECSA changes the form, the parser breaks. I know that. It is the price of building against an interface that was never designed to be one.

## Turning Credit Into Time

Once the balance is available, the rest is arithmetic:

```text
hours_left = credit / cup_per_hour
daily_rate = sum(last_seven_days) / 7
days_left = hours_left / daily_rate
```

Three lines. The hard part is not the math. It is trusting the inputs.

The monitor records samples in an append-only history and derives consumption from the difference between consecutive balances. Gaps longer than two hours are ignored, so a reboot or a paused container does not look like a sudden spending spree. History lives in a JSONL file: one line per sample, no database, no migrations, no schema. The file is small enough to inspect with `jq`, and the reader simply skips a malformed final line after an interrupted write.

That history feeds three views: the average hours consumed per day, the estimated depletion date, and a seven-day bar chart. The forecast is deliberately simple. It assumes the recent rate continues, which is exactly the kind of assumption a human can evaluate. I am not trying to predict the future with precision. I am trying to make the current trajectory visible.

## Testing the Internet I Actually Use

The obvious speedtest target is a server inside the provider's own network. It is also the wrong one. A local test measures the local path, not the experience of loading a page, pulling a container image, or joining a video call.

So Nauta Monitor measures against fast.com instead. The client talks to the OCA endpoint, warms up the connection, discards the first request so it does not inflate latency, and then runs parallel downloads and an upload. The result includes latency, download, upload, and the server city.

The endpoint used by fast.com's web client was not reachable from this network, so the implementation talks to `api.fast.com/oca/speedtest` directly. No browser, no Chromium, no extra runtime.

The test is intentionally short: ten seconds per direction and a 50 MB cap by default. A measurement that costs more than the uncertainty it removes is just an expensive way to feel informed. The interval is configurable, and the whole feature can be turned off.

## A Dashboard That Lives in a Terminal

The primary interface is a live terminal panel: balance, remaining hours, consumption rate, estimated end date, current speed, and the weekly chart. When stdout is not a terminal — inside a container, under systemd, or redirected to a file — the same loop emits one plain log line per update. `status --json` exposes the same data to scripts.

Alerts are intentionally open-ended. A threshold defines when the balance is low; an optional command defines what happens next. The monitor does not assume whether the right response is a desktop notification, a Telegram message, or a line in a log.

The laptop itself boots into a tmux session with three panes: a status view that reads the history file, the container logs, and `htop`. The screen is a view, not a control plane. Everything can be reached over SSH, and the dashboard does not depend on a browser.

## The Registry Was Blocked, So I Moved the Build

The runtime is a single Docker container. Configuration is mounted read-only. History is persisted on a volume. A healthcheck queries the portal every five minutes, and logs rotate automatically.

The deployment has one workaround worth mentioning. Docker Hub is blocked on this connection, so the image is built by GitHub Actions and published to GHCR. The laptop only pulls the result. The same pipeline tags images by commit SHA and release version, which makes rollbacks boring — the highest compliment an ops pipeline can receive.

The laptop never needs to know that Docker Hub exists.

## Every Shortcut Has a Bill

Every decision here has a cost, and most of them were deliberate.

The scraping is the obvious compromise. There is no API, and the alternative is not a cleaner integration; it is no integration at all. The parser is covered by tests and isolated behind a client, so a change in the portal is a contained problem rather than a rewrite.

The speedtest spends the credit it measures. The defaults are conservative, the interval is configurable, and the feature can be switched off. The monitor is still useful without it; the balance and the forecast do not depend on a single download.

The CLI is a choice, not a limitation. A web UI would have added a server, a frontend, authentication, and a browser dependency to a machine that exists to be quiet. The terminal is the native interface of a headless server, and it works over the same SSH connection I use to administer it.

And the JSONL file is not a compromise at all. At one sample per hour, a text file is the right size. It is easy to inspect, easy to back up, and hard to corrupt in interesting ways. If the project ever needs queries that a database would make easier, the history can be imported. Until then, `jq` is enough.

## What Actually Changed

The project is small, but it changed the daily experience of using the connection.

The balance is no longer a number I have to interpret. It is a number with context: hours left, average consumption, and a date when the credit runs out. The weekly chart makes patterns visible that were previously invisible — a heavy day, a quiet week, a speedtest that ran more often than I thought. The speed history separates "the internet is slow" from "the plan is slow," which is a distinction that matters when every megabyte is prepaid.

It also changed the server. The laptop now boots into a dashboard instead of a login prompt. The first service on the machine is the one that reports on the machine's connection. That is a small thing, but it makes the homelab feel operated rather than assembled.

And it added no infrastructure cost.

## What the Laptop Taught Me

The old laptop, the prepaid connection, and the blocked registry did not just limit the design. They chose it. A CLI, a JSONL file, and a short speedtest are the shape of those constraints, and I would not have found them by starting from a blank architecture diagram.

The project also reminded me to measure the thing the user actually feels. A LAN speedtest is easier to run and less useful. The international path is the one that determines whether a page loads.

It taught me to respect boring storage. An append-only text file is easy to inspect, easy to back up, and hard to corrupt in interesting ways. And it taught me to build for the network I actually have. Legacy TLS, blocked registries, and an unreachable portal are not edge cases in this environment. They are the environment.

Most of all, it reminded me that a homelab is a curriculum. This project taught me HTTP sessions, HTML parsing, TLS exceptions, concurrent downloads, packaging, Docker, CI, terminal UI design, and technical writing. None of those topics arrived as a course. They arrived as obstacles.

The laptop is still on a shelf, still running. When I SSH in, the first thing I see is the dashboard. It is not much. But it is mine, and it knows how many hours I have left.

## If You Want to Build on It

Nauta Monitor was built for one connection, but the problems it solves are not unique to it. Legacy portals, blocked registries, and metered bandwidth show up in more places than the documentation suggests.

Collaboration is welcome. If ETECSA changes the login form, a parser fixture from your plan is valuable. If the forecast model can be improved, the history format makes it easy to experiment. Bug reports, documentation fixes, and pull requests are all useful — and if the project helps you, a star makes it easier for someone else to find.

The source is on [GitHub](https://github.com/dlampatricio/nauta_monitor), and the documentation lives at [dlampatricio.github.io/nauta_monitor](https://dlampatricio.github.io/nauta_monitor).
