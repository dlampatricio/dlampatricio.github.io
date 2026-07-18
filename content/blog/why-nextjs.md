---
title: "Why I Chose Next.js for Every Project (and When I Wouldn't)"
excerpt: "A practical breakdown of framework decisions across 8 projects — from static sites to complex dashboards — and the tradeoffs that matter."
date: "2026-05-10"
tags:
  - nextjs
  - react
  - architecture
  - web-development
---

Over the past two years, I have used Next.js in eight distinct projects: e-commerce platforms, documentation sites, real-time dashboards, a movie charades game, and this portfolio. Each project had different requirements, and Next.js was the right choice for all of them. But the reasons *why* differed significantly.

## The Case for Next.js

### 1. The Routing Model

Next.js's file-based routing is not just convenient — it is architecturally clarifying. When every route is a file, the structure of your application mirrors its URL hierarchy. This sounds trivial, but it has real consequences:

- New developers can navigate the codebase by navigating the site
- Route groups and layouts map naturally to UI regions
- The distinction between public and private routes becomes visually obvious

### 2. Static + Dynamic, No Compromise

The `output: 'export'` mode — which this portfolio uses — generates a fully static site that can be deployed to any CDN. But the *same codebase* can be deployed as a dynamic server. This means you can start static and add server-side features incrementally, without rewriting.

### 3. The App Router's Mental Model

The App Router (introduced in Next.js 13) fundamentally changed how I think about React applications. The separation of server and client components is not an optimization — it is a better default. You opt into interactivity rather than opting into performance.

```typescript
// This component runs on the server by default
export default async function BlogPage() {
  const posts = await getPosts() // direct database access
  return <PostList posts={posts} />
}
```

No `useEffect`. No loading states. No API route. Just a function that returns UI. This is the programming model React always wanted.

## When I Wouldn't Choose Next.js

### Highly Interactive, Real-Time Applications

If your application is primarily a real-time collaboration tool (think Figma or Google Docs), the server/client model of Next.js adds overhead without benefit. These applications are better served by a thinner server layer and a client-side framework like vanilla React or a dedicated state management approach.

### Serverless Functions with Cold Start Sensitivity

Next.js API routes deployed on serverless platforms can suffer from cold starts. If your application demands sub-100ms response times for every request, a dedicated backend — FastAPI, Express, or a Rust service — will serve you better.

### When the Team Doesn't Know React

Next.js is React. If your team is stronger in Vue, Svelte, or another framework, forcing Next.js for its ecosystem benefits is a mistake. The best framework is the one your team can ship with — everything else is secondary.

## The Real Answer

The question is not "Should I use Next.js?" It is "What constraints does this project have, and which framework maps most cleanly to them?"

For 80% of web projects — content sites, dashboards, e-commerce, documentation — Next.js is the most natural fit. For the remaining 20%, it pays to be honest about the mismatch and choose accordingly.

---

*Framework decisions are never permanent. The best choice today may not be the best choice next year. Build in a way that preserves your ability to change your mind.*
