---
title: 'Better Reports: Replacing Pentaho and JSReport with a Rust-Powered Template Engine'
excerpt: 'Why I built a self-hosted document generation engine from scratch — and how Typst, Rust, and NAPI-RS delivered faster compilation than the established alternatives.'
date: '2026-07-18'
tags:
  - case-study
  - rust
  - typst
  - docker
  - nodejs
  - architecture
---

Document generation is one of those problems that every organisation solves differently, and almost no one solves well. At work, we had outgrown our Pentaho-based reporting pipeline. The templates were rigid, the stack was aging, and every modification required crossing layers of XML configuration before seeing a single pixel of output.

The brief was straightforward: migrate to something modern. The reality was anything but.

## The False Start: JSReport

JSReport was the natural first candidate. It is well-established, supports visual template editing, and integrates easily with Node.js. We adopted it quickly and migrated our first batch of templates.

The problems emerged gradually. As the template library grew and the test data scaled, compilation times became noticeable — then painful. A simple parameter change meant waiting several seconds for a PDF to render. The preview cycle — edit, save, open the consuming application, trigger a generation, inspect the output — killed momentum. Templates were authored in raw HTML with inlined CSS, and there was no way to preview them outside the full application context.

The tool was not slow in isolation. It was slow relative to the iteration speed that template development demands.

## Why Build Instead of Buy

Around the same period, I had been learning Rust for an unrelated project. The language's reputation for predictable performance and zero-cost abstractions made me wonder: could a native compilation pipeline outperform a general-purpose Node.js library for the specific task of document rendering?

The answer depended on finding the right document language. HTML and CSS are designed for browsers, not documents. LaTeX is powerful but ancient in ergonomics. What I needed was something between the two — expressive enough for complex layouts, simple enough to write without a reference manual.

Typst was the discovery. It is a modern typesetting system designed as an alternative to LaTeX, with a clean syntax that reads like Markdown but compiles to structured PDFs. Its architecture is Rust-native, which meant I could embed it directly without bridging into another runtime.

The plan crystallised: wrap Typst's compilation pipeline in a NAPI-RS native addon, expose it as a Node.js library, and build a UI that solves the preview problem once and for all.

## Architecture

### The Core: Rust + NAPI-RS

The compilation kernel is a Rust crate that takes Typst markup, resolves assets and fonts, and produces a PDF byte stream. NAPI-RS generates the Node.js bindings, making the native module requireable from any JavaScript runtime:

```rust
#[napi]
pub fn compile_typst(
    source: String,
    assets: Vec<Asset>,
    fonts: Vec<Font>,
) -> napi::Result<Vec<u8>> {
    let world = TypstWorld::new(source, assets, fonts);
    let document = typst::compile(&world)
        .map_err(|e| napi::Error::from_reason(format!("Compilation failed: {}", e)))?;
    let pdf = typst_pdf::pdf(&document, &world);
    Ok(pdf)
}
```

The native addon compiles Typst markup to PDF in milliseconds. No Chromium subprocess, no HTTP round-trip, no serialisation overhead — just a direct FFI call into the Rust layer.

### The UI: Live Preview

The user interface is a React application with Monaco Editor for template authoring. The defining feature is a split-pane layout: source code on the left, rendered PDF preview on the right. Compilation is triggered by a Preview button. The pipeline completes in under 200 milliseconds for most templates, delivering the rendered PDF to the split-pane preview panel on demand.

This was the feature that JSReport could not provide in our context. The feedback loop went from _edit → save → switch window → click → wait → inspect_ to _edit → see_. The difference in daily productivity was transformative.

Beyond the editor, the UI handles:

- **Template management** — create, version, organise templates
- **Asset library** — upload and reference images, logos, and static files
- **Package management** — Typst packages and custom fonts, bundled and resolved at compile time
- **Icon support** — Material Design icons available directly in Typst markup

### Deployment: Docker

The entire stack — Rust native addon, Node.js API server, React frontend — is packaged into a single Docker image. The container exposes an HTTP API for report generation and a web UI for template authoring.

Running on a VPS, a connected application sends template IDs and data payloads via HTTP POST. The engine compiles and returns the PDF synchronously. End-to-end latency averages under 500 milliseconds for most templates — a measurable improvement over both JSReport and the legacy Pentaho pipeline.

### Documentation: VitePress

The project includes a full documentation site built with VitePress, covering API reference, deployment guides, template syntax, and migration paths from Pentaho and JSReport.

## Results

The engine has been in production for several weeks. The measurable differences:

- **Compilation time reduced by approximately 85%** compared to JSReport for equivalent templates
- **Template authoring time reduced significantly** — the live preview eliminated the edit-compile-inspect loop
- **No external dependencies at runtime** — no Chromium, no headless browser, no Java runtime (Pentaho's requirement)
- **Resource usage is minimal** — the Docker container runs comfortably on a 2 GB VPS alongside other services

But the qualitative difference matters more. Template authors — including non-developers — can write Typst markup and see results immediately. The syntax is approachable enough that the documentation site serves primarily as a reference, not a tutorial.

## What This Case Reinforces

- **Embedded native code is a viable strategy for Node.js performance bottlenecks.** NAPI-RS makes the integration seamless — the Rust module feels like any other npm dependency.
- **Build when the workflow is the product.** The primary innovation of Better Reports is not the compilation engine — it is the preview loop. The technology exists to serve the workflow, not the other way around.
- **Typst is worth evaluating for document generation.** It is not a full replacement for LaTeX (yet), but for the 90% of business documents that need structured layouts, branded styling, and reliable PDF output, it is arguably a better default.

---

_Better Reports is available on [GitHub](https://github.com/dlampatricio/better-reports). The documentation is at [better-reports.vercel.app](https://better-reports.vercel.app)._
