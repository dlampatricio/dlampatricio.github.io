---
title: "Floralé: From Social Media Chaos to a Centralized Commerce System"
excerpt: "How a WhatsApp-native e-commerce architecture helped an artisan reclaim time, consolidate five sales channels, and double down on what matters — the craft."
date: "2026-06-20"
tags:
  - case-study
  - e-commerce
  - nextjs
  - supabase
  - architecture
---

Every artisan reaches a threshold where the tools that once enabled growth become the bottleneck. For the founder of Floralé — a Uruguayan artisanal gift brand — that threshold arrived somewhere between the twentieth Instagram DM order and the third platform migration attempt.

The problem was not demand. It was *dispersion*.

## The Fragmentation Problem

Before Floralé existed as a web application, it was a presence scattered across five social platforms: Instagram, Facebook, X (formerly Twitter), and TikTok. Each platform generated orders through direct messages, comments, and stories. Each order required manual tracking — screenshots, spreadsheets, and a memory that grew less reliable as the business grew.

The founder was spending more time on operations than on the craft that defined the brand. Product listings had to be duplicated across every platform whenever inventory changed. Customer inquiries went unanswered during the hours spent reconciling orders. The business was growing, but the founder was burning out.

## The Centralization Strategy

The brief was deceptively simple: *Build a single source of truth for products and orders, and make it accessible from anywhere.* The constraints shaped every architectural decision:

1. **Zero training overhead** — The interface had to be intuitive enough that someone focused on craft, not technology, could use it immediately.
2. **WhatsApp-native ordering** — The client's customers were already on WhatsApp. Forcing them into a traditional checkout flow would create friction. Instead, the platform would generate pre-filled WhatsApp links from every product page.
3. **Analytics without complexity** — The founder needed to know what was selling, but had no interest in dashboards that required interpretation.

## Architecture

### Frontend: Next.js with Zustand

The application is a single Next.js project serving both the public storefront and the admin panel. Public routes are server-rendered for performance and SEO; admin routes are client-rendered for interactivity.

State management across the admin interface uses Zustand — lightweight enough to avoid boilerplate, structured enough to keep inventory, cart, and UI state predictable:

```typescript
interface StoreState {
  products: Product[];
  selectedProduct: Product | null;
  analytics: AnalyticsSummary | null;
  setProducts: (products: Product[]) => void;
  updateStock: (productId: string, quantity: number) => void;
}
```

The decision to use Zustand over heavier alternatives was deliberate. The admin interface is single-user; there is no need for the middleware-heavy architecture of Redux or the complexity of state machines. Zustand's minimal surface area meant fewer places for bugs to hide — a priority when building for a non-technical operator.

### Database: Supabase

Supabase provided the fastest path from prototype to production. The schema reflects the simplicity of the domain:

- **`products`** — name, description, price, stock, images, category
- **`orders`** — product reference, customer name, WhatsApp number, status, timestamp
- **`analytics_events`** — page views, product views, WhatsApp link clicks

PostgreSQL's row-level security meant the admin endpoints could be protected without a separate authentication layer for every query.

### The WhatsApp Integration

The most impactful design decision was not technological but behavioural. Rather than building a custom checkout flow, every product page renders a button that opens a pre-composed WhatsApp message:

```
https://wa.me/598XXXXXXXXX?text=Hi!%20I'd%20like%20to%20order%20%5Bproduct%5D
```

This decision eliminated:
- Payment gateway complexity (orders are confirmed via WhatsApp, payment is handled out-of-band)
- User account management (no registration required)
- Cart abandonment (the mental barrier of "checkout" is replaced by the familiarity of a chat message)

The tradeoff is manual order processing, but for a solo artisan processing dozens — not hundreds — of daily orders, this is a feature, not a limitation. Each WhatsApp inquiry arrives with the product context pre-filled, reducing the back-and-forth that previously consumed hours.

### Analytics: Visibility Without Complexity

The admin dashboard includes a page powered by Vercel Analytics, showing:
- Daily page views and unique visitors
- Product view rankings (what is being looked at vs. what is selling)
- WhatsApp link click-through rates
- Social referral sources

The founder checks it once a day, not because the data is complex, but because a single number — "six views on the new collection today" — provides immediate, actionable feedback.

## Results

The platform has been live since early 2026. The measurable outcomes:

- **Order processing time reduced by approximately 70%** — WhatsApp links carry product context, eliminating back-and-forth
- **Inventory management consolidated to a single interface** — no more cross-platform duplication
- **Social media engagement increased** — with a stable link to send customers to, content on Instagram and TikTok now drives traffic to a consistent destination rather than fragmented DM conversations

But the outcome that matters most is invisible in analytics: the founder spends more time making products and less time managing them.

## What This Case Reinforces

Floralé is not a technically complex system. It is a *focused* one. The entire architecture bends toward a single goal: reducing operational friction for a solo operator.

A few lessons that generalise beyond this project:

- **Meet users where they are.** WhatsApp was not a fallback — it was the primary interface. The web app served the business; WhatsApp served the customer. Choosing the right channel over the conventional one was the highest-leverage decision in the project.
- **Build for the minimum viable operator.** Design for the person who will use the system under stress, at odd hours, on a phone. If the interface survives that test, it will work everywhere.
- **Analytics must be glanceable.** A dashboard is useful only if it is looked at. Prioritise one-number metrics over sprawling reports.

---

*Floralé is live at [florale-uy.vercel.app](https://florale-uy.vercel.app). The source code is available on [GitHub](https://github.com/dlampatricio/florale).*
