---
title: "La Mubi: A Movie Charades Game Born from Real Social Friction"
excerpt: "How a night out with friends — and the frustration of bad party apps — led to a local multiplayer game that solves role assignment, movie selection, and impostor detection in one sweep."
date: "2026-07-10"
tags:
  - case-study
  - game
  - nextjs
  - tmdb
  - zustand
---

Some of the best software comes from nights out that went slightly wrong. La Mubi started not as a product idea but as a recurring pain: a group of friends who wanted to play charades and Impostor — the social deduction game — but could not find a tool that facilitated either without getting in the way.

The games themselves were simple. The friction around them was not.

## The Two Problems

### Role Assignment for Impostor

Impostor requires a secret role assignment: one player is the impostor, the rest know the movie. Without an app, this means passing a phone around, hoping nobody peeks, and dealing with the odd number problem — someone always ends up as the permanent game master, excluded from playing.

Existing role-assignment apps were overbuilt for this use case. They demanded accounts, tracked statistics, filled the screen with gamification noise, and buried the core mechanic — *assign a role, reveal it privately* — behind layers of unnecessary UI. For a group that wanted to spend five seconds setting up and thirty minutes playing, every extra tap was a tax on fun.

### Movie Selection for Charades

Classic charades has its own bottleneck: picking a movie. In the traditional format, a player chooses a title and acts it out. But in practice, the selection phase was agony. Someone would propose a movie, only to discover another player had never heard of it. Back-and-forth consumed minutes. The group tried pulling from Letterboxd's popular lists, but those ran dry quickly — and the same titles kept resurfacing.

What we needed was a source of movies that was:
- **Boundless**: never run out of options
- **Context-rich**: poster, synopsis, genres — enough information for the guessers to work with
- **Fair**: randomised so no one could pre-game the selection

## The Convergence

Both problems pointed to the same solution: a local multiplayer app that used the TMDB API as its movie database, with two distinct game modes sharing a single lobby.

### Charades Mode

Teams take turns. One player sees a movie title, poster, synopsis, director, and genres — then acts it out without speaking. The TMDB API ensures every round draws from a fresh, randomised pool. With over a million movies in the database, repetition is not a concern.

### Impostor Mode

This mode solves the role-assignment problem at the architectural level. When a round starts, every player receives the same movie information on their device — except one. The impostor sees only "You are the Impostor." The social deduction that follows is entirely organic; the app's only job is to distribute information asymmetrically and step back.

The critical detail: all of this happens locally. There are no accounts, no persistent state, no backend beyond the TMDB API calls. The game is ephemeral by design — once the round ends, the data is gone.

## Architecture

### Frontend: Next.js with Zustand

The app is a single Next.js project. The lobby, the game board, and the result screen are distinct routes sharing a lightweight Zustand store:

```typescript
interface GameState {
  mode: 'classic' | 'impostor' | null;
  players: string[];
  currentMovie: Movie | null;
  phase: 'lobby' | 'reveal' | 'acting' | 'voting' | 'result';
  setMode: (mode: 'classic' | 'impostor') => void;
  addPlayer: (name: string) => void;
  setMovie: (movie: Movie) => void;
  nextPhase: () => void;
}
```

The store is intentionally minimal. Zustand was chosen over heavier alternatives because the state is simple, synchronous, and local. There is no need for persistence, middleware, or devtools — just a shared object that multiple components can read from and write to.

### Data: TMDB API

Every movie request hits the TMDB API's `/discover/movie` endpoint with randomised parameters — release year, genre, vote count — to ensure variety. The response includes the title, poster path, overview, genres, vote average, and director. The client caches the current movie in the Zustand store and discards it when the round ends.

The API key lives in a client-side environment variable. For a local multiplayer game with no backend, this is an acceptable tradeoff — the attack surface is negligible.

### The Handoff Screen

The most subtle piece of UX is the handoff screen. When one player finishes acting, they hand the device to the next player. But the next player should *not* see the movie title. The handoff screen shows a neutral animation — "Pass to the next player" — and only reveals the movie information when the recipient taps "Ready." This single screen prevents the most common mode of accidental cheating in party games.

## What the Existing Apps Got Wrong

La Mubi's differentiation is not features. It is *restraint*.

Most party game apps try to be platforms. They want you to create an account, build a profile, track your win-loss record, unlock achievements. These are features for the developer's retention metrics, not for the player's enjoyment. A party game that runs on someone's phone for ten minutes at a bar does not need a leaderboard. It needs to get out of the way.

La Mubi has:
- No accounts
- No backend
- No persistent state
- No animations longer than one second
- No onboarding

It has a lobby, a game, and a result screen. That is the entire surface area.

---

*La Mubi is live at [lamubi.vercel.app](https://lamubi.vercel.app). The source code is available on [GitHub](https://github.com/dlampatricio/lamubi).*
