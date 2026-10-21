---
name: 이흥규 / Heungkyu Lee
description: The founder's AX consulting site staged as one dark, black-and-white stage.
colors:
  bg: "#040404"
  surface: "#0e0e0e"
  surface-2: "#161616"
  ink: "#ededed"
  ink-soft: "#c9c9c9"
  muted: "#8f8f8f"
  faint: "#4a4a4a"
  accent: "#ffffff"
typography:
  display:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 1rem + 9vw, 12.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.06em"
  headline:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.1rem + 4.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.05em"
  title:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, system-ui, sans-serif"
    fontSize: "clamp(1.2rem, 1.05rem + 0.6vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Pretendard Variable, Pretendard, Apple SD Gothic Neo, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
rounded:
  preview: "16px"
  card: "24px"
  panel: "28px"
  pill: "999px"
spacing:
  margin: "clamp(1.25rem, 2.6vw, 2.5rem)"
  gutter: "clamp(0.75rem, 1.4vw, 1.5rem)"
  section: "clamp(6rem, 16vh, 11rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
  slide-track:
    rounded: "{rounded.pill}"
    height: "72px"
    width: "min(26rem, 88vw)"
  slide-knob:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    size: "72px"
  chip:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 1rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 3vw, 2.25rem)"
  card-open:
    backgroundColor: "{colors.surface-2}"
  step-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 2.4vw, 2.25rem)"
  step-panel-lit:
    backgroundColor: "{colors.surface-2}"
  step-panel-human:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  cursor-label:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    rounded: "{rounded.pill}"
    size: "92px"
  nav-link:
    textColor: "{colors.accent}"
    typography: "{typography.small}"
  list-preview:
    rounded: "{rounded.preview}"
    width: "clamp(16rem, 24vw, 24rem)"
---

# Design System: 이흥규 / Heungkyu Lee

## Overview

**Creative North Star: "One Dark Stage"**

The whole site is one dark stage. A near-black ground, one bold gothic, and white used the way a theatre uses light: it lands on the one thing to look at and nowhere else. The home is a WebGL scene. His face is rebuilt from light particles sampled from a studio cut-out, lit by the cursor, then dispersed by scroll into five AX scenes passing across a curved screen, ending under a stage-light clip with slide-to-request. The sub-pages are the same stage with the house lights lower: a huge title at the bottom-left, a sentence that lights word by word as you scroll, or a list of big names that dims everything except the row under the pointer.

Density is deliberately low: few words, very large type, long scroll distances. Motion carries the narrative. Titles rise through masks, blocks fade up once as they enter, photographs settle from a slight zoom, pages arrive under a lifting curtain, and the pointer performs (a labelled cursor, magnetic links, letter scramble, cursor-following previews). Every one of these has a reduced-motion path and a coarse-pointer path.

The world replaces the light "Cover Story" magazine world, which the user rejected on 2026-10-21, and it refuses the static editorial portfolio of sections, cards and stat rows. No hue appears anywhere.

**Key Characteristics:**
- One near-black stage (#040404) on every route; white is the light.
- Achromatic only: grey tokens, grayscale photographs, luma-only shaders.
- One typeface, Pretendard Variable, at 800 for display with tracking down to -0.06em.
- Huge words, few of them; titles enter at the bottom-left, rising from masks.
- The pointer performs: labelled cursor, magnetic links, letter scramble, cursor-lit particles, cursor-following previews.
- Flat: depth comes from tone steps, difference blending and clip-path wipes, never shadows.
- Every page ends in the 30-minute diagnosis with slide-to-request.

## Colors

A strictly achromatic eight-step ladder from near-black to pure white; no hue appears in the CSS, the photographs or the shaders.

### Primary
- **Stage Light** (#ffffff): the only accent, used as light rather than as colour. It is the pill button's hover fill, the slide-to-request fill and knob, the home scene titles and finale headline, the article pull quote and the Famo "after" figure. The fixed header is white in difference blend, so it inverts over whatever passes beneath it.

### Neutral
- **Stage Black** (#040404): the ground of every route, the preloader and the phone menu.
- **House Dark** (#0e0e0e): the first step up. The closing footer band, the page curtain, FAQ cards, argument pairs, process panels and flow steps not yet reached.
- **Wing Grey** (#161616): the second step. Chips, the report card, an opened FAQ, a hovered process panel, flow steps already reached.
- **Spot Ink** (#ededed): default text and headings, the pill button at rest, the cursor label disc, selection, the focus outline, the reading-progress bar, and the one inverted flow step where a person decides.
- **Dimmed Ink** (#c9c9c9): leads, article body, expanded list summaries, chip text.
- **Program Grey** (#8f8f8f): labels, metadata, dates, years and secondary role lines (6.3:1 on Stage Black).
- **Ghost Grey** (#4a4a4a): marks that are not read as text, such as list markers and the ghosted ordinals on process panels.

### Named Rules
**The Stage Light Rule.** White (#ffffff) is the only accent and it behaves like light: it lands on the one thing to look at (a scene title, the slider, the result figure) and nowhere else. Spot Ink is the everyday text colour; white is the step above it.

**The No Hue Rule.** The palette has zero chroma. DOM photographs pass through the grayscale filter, images and video on the home stage are reduced to luma in the shader, and no token carries a hue.

**The Ghost Grey Rule.** Ghost Grey sits at 2.2:1 on the ground. It marks; it never carries words someone must read. Readable text is Program Grey or lighter.

## Typography

**Display Font:** Pretendard Variable (with Pretendard, Apple SD Gothic Neo, system-ui)
**Body Font:** Pretendard Variable (same stack, loaded as the jsDelivr dynamic subset)

**Character:** One Korean gothic does everything. Hierarchy comes from weight (800 for display and headlines, 700 for statements, 600 for labels, 400 for reading) and from tracking that tightens as size grows, until display lines pack into a single block of light.

### Hierarchy
- **Display** (800, clamp(3.5rem, 1rem + 9vw, 12.5rem), 0.9): page titles on index pages and case studies, and next-project names. Home scene titles, the finale headline and the preloader count use the same weight and tracking at their own sizes.
- **Headline** (800, clamp(2.5rem, 1.1rem + 4.4vw, 6rem), 1): Big List names, article and long service titles, the closing diagnosis heading, phone menu links.
- **Title** (700, clamp(1.5rem, 1.1rem + 1.4vw, 2.4rem), 1.15): experience lines and flow step names. Scroll-lit sentences, service points, pull quotes and article subheads sit in the same 700 to 800 band with -0.03 to -0.035em tracking at larger sizes set per surface.
- **Lead** (400, clamp(1.2rem, 1.05rem + 0.6vw, 1.6rem), 1.45): the one sentence under a title, case-study solutions, the record table.
- **Body** (400, clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem), 1.65): reading text. Articles open the leading to 1.9 inside a 68ch measure.
- **Small** (400, 0.9375rem, 1.5): record-table cells on phones.
- **Label** (600, 0.9375rem, Program Grey): section headings, metadata, dates and years. No added letter-spacing.

Tabular numerals on every date, year, counter and timer.

### Named Rules
**The One Family Rule.** Pretendard Variable sets everything, including the full-width SVG wordmark; hierarchy is size, weight and tracking, never a second face.

**The Tighten As It Grows Rule.** Tracking follows size: -0.015em at lead, -0.03 to -0.035em for statements, -0.05em at headline, -0.055 to -0.06em at display.

**The Whole Word Rule.** Korean never breaks inside a word (keep-all); headings balance their lines and paragraphs wrap pretty.

## Layout

Every route sits inside the side margin and a 12-column grid with a fluid gutter; sections are separated by the section rhythm token. First screens fill most of the viewport and anchor the title at the bottom-left: 78svh for index and service pages, 72svh for articles, 100svh for case studies and the home. Inside sections a recurring split puts the label in columns 1 to 3 and the content in columns 4 to 12 (about, service detail). Articles narrow to a 68ch column (columns 3 to 10 at md, 4 to 9 at lg). Big Lists run the full width: meta in 2 columns, name in 9, arrow in 1.

Breakpoints are Tailwind's sm 640px, md 768px and lg 1024px. Below md the header collapses to MENU / CLOSE over a full-screen overlay, label columns stack above their content, list summaries stay open and the floating preview disappears. On the home below 768px the particle grid drops from 230 to 150, the face moves to the top centre, the statement drops to the bottom, and scene cards widen to 86vw at 1.25:1 with half the curve. Coarse pointers lose the custom cursor and magnetism, and the stage light drifts on its own.

### Named Rules
**The Bottom-Left Entrance Rule.** A page begins with most of a screen of dark and its title at the bottom-left margin; the content starts below the fold.

**The Label Column Rule.** On wide screens a section's label takes columns 1 to 3 and its content columns 4 to 12; the label is the section's heading, not decoration above it.

## Elevation & Depth

The system is flat: there is no box-shadow or drop-shadow anywhere. Depth comes from four sources. Tone steps (Stage Black, House Dark, Wing Grey, then a Spot Ink fill for the one step a person decides). The header's difference blend, which inverts over whatever scrolls beneath. Clip-path wipes (preloader, page curtain, phone menu) that reveal one plane behind another. And on the home, a fixed WebGL layer behind all HTML whose smoke and stage light are lit by the cursor, grained and vignetted. Stacking order: WebGL 0, stage text 10, list preview 20, phone menu 30, header 40, preloader and reading bar 50, cursor 60, page curtain 70.

### Named Rules
**The Light Not Shadow Rule.** Nothing casts a shadow; things are lit. An element that must come forward moves one tone step up or receives the cursor's light.

## Shapes

Two families. Full pills (999px) for everything you press or that answers the pointer: the button, chips, the slide track and knob, the cursor dot and label disc, the scene dots. Soft panels for containers: 24px for cards (FAQ, argument pairs, report card, the about portrait), 28px for the numbered step panels, 16px for the floating list preview. Photographs that span the page are full-bleed and square-cornered. The arrow is drawn, never typed: a 24-unit stroke arrow at 2px that rests at -45° and turns level on hover; the FAQ plus turns 45° into a cross when open. Display words rise through invisible overflow masks.

## Components

### Buttons
A single white pill, magnetic to the pointer.
- **Shape:** full pill (999px).
- **Primary:** Spot Ink fill, Stage Black text, 700 at body size, 3.5rem tall with 1.75rem side padding.
- **Hover / Focus:** the fill brightens to Stage Light over 200ms; pressing scales it to 0.96; focus is the global 2px Spot Ink outline at a 5px offset.
- **Slide to Request:** the closing call to action. A 72px pill track, min(26rem, 88vw) wide, with a white knob carrying the drawn arrow. A white fill grows behind the knob while dragging and the track label fades; past 90% the request email opens, otherwise the knob springs back on the spring ease. A keyboard press on the knob opens the email directly.

### Text Links
- **Style:** the underline is present but transparent at rest, 0.07em thick at a 0.28em offset. On hover or focus it fades in over 160ms and the text turns white.
- **Under variant:** the underline shows at 40% at rest, for contact lines and links inside the record table.

### Chips
- **Style:** Wing Grey pill, Dimmed Ink text at 15px, 0.5rem by 1rem padding.
- **State:** static tool tags; no hover or selection.

### Cards / Containers
- **Corner Style:** 24px for cards, 28px for step panels.
- **Background:** House Dark at rest; Wing Grey when opened, hovered or reached.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none.
- **Internal Padding:** fluid, from about 1.25 to 1.5rem up to 2 to 2.25rem.
- **FAQ:** native disclosure. The question at 600, a plus that turns 45° when open, and the card steps up to Wing Grey.
- **Step panels:** a two-digit ordinal at 800 and -0.06em at the top, the step name at the bottom, at least 22rem tall.

### Navigation
- **Header:** fixed across the top at the side margin, 15px, white in difference blend. The name (semibold) on the left; uppercase route words, the ko / en toggle (the inactive one at 45% opacity), a Seoul clock from lg up, and CONTACT on the right. Every link is magnetic and scrambles its letters on hover (14 frames of 28ms). The current route keeps its underline.
- **Phone:** MENU / CLOSE toggles a Stage Black overlay that wipes by clip-path over 700ms, with HOME and the routes at headline size and the email and language toggle at the foot. Escape closes it; smooth scrolling pauses while it is open.

### Cursor
A 12px white dot in difference blend that follows at 0.22 lerp. Over a target that names an action it grows into a 92px Spot Ink disc carrying one short word (보기, 읽기, 다음, or the scene word on the home) at 14px 700. The native cursor is hidden on fine pointers; the custom one is absent on coarse pointers.

### Big List (signature)
Big names at headline size, each a full-width row with meta in Program Grey and a drawn arrow. Hovering the list dims every other row to 30%; the hovered name slides 0.75rem right, the arrow turns level, and a one-paragraph summary opens beneath (rows 0fr to 1fr over 700ms). Keyboard focus opens the same summary. When the row has a photograph, a 4:3 grayscale preview with the 16px radius follows the pointer at 0.12 lerp and tilts with its lag. Rows enter staggered by 70ms.

### Page Intro
A bottom-left title at display size (headline for long service titles), each word rising from its mask with a 70ms stagger after 250ms, and one lead sentence in Dimmed Ink fading up at 700ms. A short line sits above the title: on case studies and articles it carries facts (owner, year and category; the date).

### Scroll-lit Sentence
A statement at 700 whose words light from 14% to full opacity as the paragraph crosses the viewport. Used at most once per page (the case-study problem, the about statement).

### Photographs
Every DOM photograph passes through grayscale(1) contrast(1.1) brightness(0.9). Inside reveal blocks a photograph starts at 1.12 scale and settles over 1800ms. Captions sit under the image in label size at normal weight. The direction asked for grain on all photographs; in the build, grain exists only in the WebGL layer and DOM photographs are clean.

### Particle Stage (signature, home)
- **Renderer:** OGL at no more than 1.5 device pixel ratio, without antialiasing.
- **Background:** the luma of a smoke clip lit by a soft cursor spot, with grain and a vignette; at the finale it cross-fades to a stage-light clip.
- **Face:** the studio cut-out sampled on a 230 grid (150 on small screens) into points whose size and brightness follow the photo's luma. They assemble from scatter over about 2.6s after the preloader, swell and brighten under the cursor light, and disperse upward as scrolling begins.
- **Scenes:** five cards on a screen curved in depth, 62vw wide at 1.7:1, bending with scroll velocity. Textures are reduced to luma with a darkened central band so the white scene title reads; inactive cards dim to 20%. The Famo card is a live 20:00 countdown drawn to canvas.
- **Preloader:** a Stage Black sheet with the name and a 0 to 100 count at 800; it lifts by clip-path over 1100ms.
- **Stock footage:** the smoke, cubes and stage-light clips are atmosphere only and never stand for work or people.
- **Reduced motion:** the particles appear assembled, the light holds still, the cards do not bend; scrolling still steps through the scenes.

### Case Study Flow (signature)
Famo's six steps on a pinned horizontal rail that vertical scrolling moves. The current step is full size and the others sit at 0.96; reached steps lift to Wing Grey, and the human-approval step inverts to a Spot Ink panel with dark text. A 20:00 countdown ghosts behind the opening title. In the result, a Spot Ink bar strikes the before figure left to right, then the white after figure rises right-aligned at up to 19rem.

### Closing Diagnosis (footer)
On every sub-page: a House Dark band with the centred headline "30분 업무 자동화 진단", a lead line and Slide to Request, then contact and company columns and photo credits, then the name as a full-width SVG wordmark (800, -0.04em, stretched across the width). The home ends in its own stage-light finale instead.

### Page Curtain
Each navigation lifts a House Dark sheet off the new page by clip-path over 900ms on the in-out ease.

## Do's and Don'ts

### Do:
- **Do** start every route on Stage Black (#040404) and climb the tone steps (#0e0e0e, #161616) for anything that must come forward.
- **Do** keep white (#ffffff) for the one lit thing in a view: a scene title, the slider, the result figure.
- **Do** run every photograph through the grayscale filter and every WebGL texture through luma.
- **Do** set titles in Pretendard Variable 800 with tracking between -0.05em and -0.06em, entering at the bottom-left from word masks.
- **Do** use the drawn stroke arrow for direction, resting at -45° and levelling on hover.
- **Do** give every pointer and scroll effect a reduced-motion and coarse-pointer path, as the built ones do.
- **Do** end every sub-page in the Closing Diagnosis with Slide to Request and keep its keyboard path to the email.

### Don't:
- **Don't** introduce any hue, tinted grey or coloured accent.
- **Don't** use box-shadows or drop-shadows; come forward by tone step or by light.
- **Don't** add a second typeface.
- **Don't** set readable text in Ghost Grey (#4a4a4a).
- **Don't** use the smoke, cubes or stage-light clips as work or as a person.
- **Don't** type arrows or other glyphs as icons; draw them.
- **Don't** rebuild the static editorial portfolio of sections, cards and stat rows that this world replaced.

## Known Drift

Defects the shipped build carries (b30144e). They are recorded here so they are not copied; none of them is a rule.

- **Off-token greys.** The home uses #a8a8a8 (scene line), #c4c4c4 (finale lead) and #a0a0a0 (finale email) where Dimmed Ink or Program Grey would serve; the slide track is #141414 and its label #8a8a8a; the case-study ghost timer is #141414; the human-step note is #555; scene dots #3a3a3a; scroll hint #2a2a2a; scrollbar #333. The canvas fills inside the Famo timer texture (#0a0a0a, #3a3a3a, #8a8a8a) are texture content.
- **Eyebrow labels.** Page Intro prints a bare section name (WORK, WRITING, SERVICES, ABOUT, SERVICE) above index and service titles, repeating the navigation. The direction contract asks for "label, then a title"; the craft floor reads a bare section name as an eyebrow. Lines that carry facts (case-study owner, year and category; the article date) are metadata and not part of this defect.
- **Unused tokens.** --color-accent is declared but the code writes white and #fff directly; --font-display repeats the sans stack and is never referenced.
- **Untokenized statement sizes.** Scroll-lit sentences, service points, pull quotes and article subheads each set their own clamp; panel padding varies between 2.4vw, 2.5vw and 3vw.
- **Grain divergence.** The direction asked for grain on all photographs and footage; DOM photographs carry none.
- **No WebGL fallback found.** home-stage.tsx has no explicit path for a browser without WebGL; behaviour in that case is unverified.
