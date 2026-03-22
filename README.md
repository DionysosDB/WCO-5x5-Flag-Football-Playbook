# WCO-5x5-Flag-Football-Playbook
FLAG-FOOTBALL WCO PLAYBOOK  — West Coast Offense — 5v5 Flag Football
# 🏈 WCO 5v5 Flag Football Playbook

**v19 — Mar 21 2026**

An interactive, single-file HTML playbook built for 5v5 flag football teams running the **Bill Walsh West Coast Offense**. No install, no dependencies — open in any browser.

## 🚀 Live Demo

> Host on GitHub Pages: `Settings → Pages → Deploy from branch → main → / (root)`
> Then visit: `https://DionysosDB.github.io/WCO-5x5-Flag-Football-Playbook-v19.html`

---

## 📋 Features

### Offense
- **10 Passing Plays** — Dragon, Drive, Mesh, Flood, Smash, Stick, Spider, Texas, Banana, Lion
- **6 Running Plays** — Jet Sweep, HB Dive, Counter, HB Power, Slip Screen, Wildcat *(rule-compliant lateral sequence)*
- **4 Trick Plays** — Flea Flicker, Hook & Lateral, QB Keeper, Wildcat variants
- Animated play simulations with adjustable speed
- Color-coded by play type (🟡 Pass, 🟢 Run, 🟠 Trick)

### Defense
- **5 Formations** — Cover 0 (Man), Cover 1 (Man + FS), Cover 2, Cover 3, Cover 4
- All formations rebuilt to **official 5v5 flag football rules** (NFL Flag)
- Live formation simulations with zone overlays and player reactions
- Situational selector: Down, Field Position, Distance, Offensive Tendency → auto-generates best defensive call

### Play Caller Tool
- Situational offense selector: Down & Distance, Field Zone, Tendency
- Auto-recommends best play with formation, keys, and audibles

### 📋 Full Play Call Sheet
- All plays with Best Situation, Coverage matchup, and Audible options
- Situations use standard down/distance language: `1st & Mid/Long`, `Any & Goal/Short`, etc.

### 🛤️ Route Tree
- Interactive 9-route tree (Flat → Fade) with animated simulations
- Tap any route → hit Play — no scrolling needed

### 🎓 Coach's Corner
- Situational game guide: 1st Down, 2nd Down, Red Zone, NRZ, 2-minute drill, and more

---

## 🏟️ 5v5 Rules Referenced

| Rule | Detail |
|---|---|
| **No-Run Zone (NRZ)** | 5 yards before midfield & goal line — pass only |
| **Rush Line** | Defender must be 7 yards from LOS to rush QB |
| **Wildcat snap** | Direct snap receiver cannot run across LOS — must lateral first |
| **PAT** | 1-pt from 5-yd line, 2-pt from 10-yd line — both in NRZ |

---

## 📂 File Structure

├── WCO-5x5-Flag-Football-Playbook-v19.html ← entire app (single file)
└── README.md

No frameworks. No build step. No internet required after download.

---

## 🖥️ Usage

1. Download or clone this repo
2. Open `WCO-5x5-Flag-Football-Playbook-v19.html` in any modern browser
3. Use the tabs to navigate between Passing, Running, Trick, Defense, Routes, and Coach's Corner
4. Hit **▶ Run Simulation** on any play card to animate the play

---

## 📱 Mobile Friendly

Fully responsive — works on phones and tablets for sideline use during games.

---

## ✏️ Customization

All plays are defined in plain JavaScript arrays near the top of the `<script>` block. Search for:
- `var pass = [` — passing plays
- `var runs = [` — running plays
- `var tricks = [` — trick plays
- `var defenses = [` — defensive formations

Each play object contains `title`, `info`, `notes`, `players`, and `routes` — all human-readable.

---

## 📜 License

MIT — free to use, share, and modify for your team.

---

*Built with ❤️ for flag football coaches and players.*
