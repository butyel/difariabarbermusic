---
name: DiFaria Barber Music
description: Barbearia premium em Presidente Epitácio com identidade musical
colors:
  primary: "#071710"
  primary-hover: "#0c2117"
  primary-mid: "#143423"
  primary-light: "#1f4a33"
  neutral-bg: "#f0eadc"
  neutral-mid: "#e4dfd2"
  text-body: "#071710"
  text-muted: "#4e5b53"
  text-on-dark: "#d8dfda"
  accent: "#72816a"
  white: "#ffffff"
  black: "#060807"
  line-glass: "rgba(255,255,255,0.13)"
  line-shadow: "rgba(7,23,16,0.15)"
typography:
  display:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(3rem, 6.2vw, 5.8rem)"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-0.06em"
  heading:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "clamp(2.2rem, 4.5vw, 4.8rem)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.05em"
  subheading:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Montserrat, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
    textTransform: uppercase
rounded:
  none: "0px"
  sm: "4px"
  full: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  section: "120px"
  section-mobile: "64px"
components:
  button-primary:
    backgroundColor: "{neutral-bg}"
    textColor: "{primary}"
    rounded: "{none}"
    padding: "18px 28px"
    fontWeight: 800
    textTransform: uppercase
    letterSpacing: "0.08em"
  button-primary-hover:
    transform: "translateY(-3px)"
    boxShadow: "0 12px 28px -8px rgba(0,0,0,0.3)"
  button-ghost:
    backgroundColor: transparent
    textColor: "{white}"
    borderColor: "rgba(255,255,255,0.35)"
    rounded: "{none}"
    padding: "18px 28px"
  button-light:
    backgroundColor: "{white}"
    textColor: "{primary}"
    rounded: "{none}"
    padding: "18px 28px"
  whatsapp-float:
    backgroundColor: "{primary-light}"
    textColor: "{white}"
    rounded: "{full}"
    size: "60px"
  service-card:
    backgroundColor: "{primary}"
    textColor: "{white}"
    padding: "44px 36px"
    minHeight: "280px"
  service-card-hover:
    backgroundColor: "{primary-hover}"
---

# Design System: DiFaria Barber Music

## 1. Overview

**Creative North Star: "The Midnight Studio"**

DiFaria Barber Music lives at the intersection of barber craftsmanship and musical identity. The design is confident, warm-dark, and editorial — like stepping into a vinyl-lit studio where every detail signals that this is not a barbershop, it is an experience. The deep green palette evokes forest calm and premium restraint; the cream ground keeps it approachable and tactile. Music is not a theme layered on top — it is the atmosphere the design breathes.

**Key Characteristics:**
- Dark green as the dominant personality color, cream as the breathing room
- Sans-serif throughout (Montserrat), heavy on contrast via weight and size, not color
- Generous whitespace and rhythm — nothing feels crowded
- Motion is deliberate, not decorative: scroll-reveal entrances, hover micro-interactions
- The WhatsApp button is the most important element on every screen; it earns the strongest visual weight
- Authentic proof (5.0 / 92 reviews) is treated as a design element, not a footnote

### Named Rules

**The One Instrument Rule.** Montserrat carries everything. No second font, no decorative typeface. Variation comes from weight (300–800) and scale, not from introducing another voice.

**The WhatsApp Center of Gravity Rule.** Every section's visual flow terminates at a WhatsApp CTA. The floating button is the persistent anchor. Nothing competes with the booking path.

## 2. Colors

A restrained two-anchor palette: deep forest green anchors the dark side, warm cream anchors the light. The moss accent is used sparingly — a whisper, not a statement.

### Primary
- **Deep Forest** (#071710) — The brand's dark anchor. Used for body text on light surfaces, dark section backgrounds, and service cards. Carries 50–70% of the surface area on any dark section.

### Neutral
- **Warm Cream** (#f0eadc) — The canvas. Page background, button fills on dark, primary interactive backgrounds. Off-white with a subtle warmth that keeps the brand from feeling cold.
- **Sand** (#e4dfd2) — Mid-tone variant for FAQ and alternating sections. One step darker than cream, one step warmer.
- **Pure Black** (#060807) — Footer background only. Nearly black with a green micro-tint.

### Accent
- **Moss** (#72816a) — Interior muted tone on dark surfaces. Used for secondary text, icons at rest, and decorative dividers. Never used as a CTA.

### Surface
- **Green Surface** (#143423) — Contact card background, highlight surface.
- **Green 700** (#1f4a33) — Focus outlines, feature icons, FAQ markers, WhatsApp button.
- **Deep Green Hover** (#0c2117) — Service card hover state, one step up from Deep Forest.

### Named Rules

**The Skinny Line Rule.** Every structural divider is exactly 1px. The line color shifts by surface: `rgba(255,255,255,0.13)` on dark, `rgba(7,23,16,0.15)` on light. No thick borders, no decorative strokes.

## 3. Typography

**Display & Body Font:** Montserrat (with Arial fallback)

**Character:** Confident, contemporary, unsentimental. Monotype family throughout — the range of weights (300 light to 800 extra-bold) and aggressive sizing (7rem display down to 0.7rem label) provides all the contrast the design needs.

### Hierarchy
- **Display** (500 weight, `clamp(3rem, 6.2vw, 5.8rem)`, 0.96 line-height, -0.055em letter-spacing): Hero headline only. Tight letter-spacing and controlled scale preserve impact without hiding the photography. `text-wrap: balance` applied. Max 920px width.
- **Heading** (500 weight, `clamp(2.2rem, 4.5vw, 4.8rem)`, 1 line-height, -0.05em letter-spacing): Section titles. Nearly as aggressive as display but with breathing room. Max 840px width.
- **Subheading** (500 weight, 1.25rem, 1.3 line-height, -0.03em letter-spacing): Card titles, feature labels.
- **Body** (400 weight, 1rem, 1.75 line-height): Paragraph text. Capped at 65–75ch on prose sections. Color is Slate Green (#4e5b53) on cream, Muted (#b6beb8) on dark.
- **Label** (800 weight, 0.75rem, 0.08em letter-spacing, uppercase): Button text. Heavy weight + tracking for tactile feel.
- **Eyebrow** (700 weight, 0.7rem, 0.22em letter-spacing, uppercase): Section kickers. Near-invisible weight; they frame without competing.
- **Nav** (600 weight, 0.73rem, 0.1em letter-spacing, uppercase): Header navigation. Compact and precise.

### Named Rules

**The Negative Letter-Spacing Rule.** All display and heading text uses negative tracking (-0.06em to -0.03em). Below -0.06em letters touch and readability breaks. Above -0.03em the setting feels loose for the scale. Display is the tightest, headings loosen as size drops.

**The Uppercase Cadence Rule.** Buttons, navigation, and eyebrow labels are always uppercase with tracking. Body copy, headings, and card text are never uppercase. No mixed case in the same role.

## 4. Elevation

Depth is conveyed primarily through **tonal layering** (dark surface on cream, cream card on dark) rather than shadows. Shadows are reserved for interactive feedback and modal isolation:

- **Ambient** (`0 25px 50px -12px rgba(0,0,0,0.4)`, the `--shadow` variable): Structural separation for the WhatsApp float and lightbox container. One shadow to rule them all.
- **Interactive lift** (`0 12px 28px -8px rgba(0,0,0,0.3)`): Button hover state. The button rises 3px and gains this shadow — tactile feedback that says "press me."
- **Lightbox depth** (`0 20px 60px rgba(0,0,0,0.5)`): The fullscreen modal image. Deepest shadow in the system, matching the darkest overlay (`rgba(3,10,6,0.95)`).

### Named Rules

**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows only appear as a response to state (hover, active, modal open). The hero image, service cards, and contact card never cast shadows.

## 5. Components

### Buttons
- **Shape:** No border-radius. The hard edge signals confidence and intentionality. (0px)
- **Primary:** Cream background (#f0eadc), Deep Forest text (#071710), 800 weight uppercase, 18px 28px padding. Animated fill: on hover, a white overlay scales up from bottom (scaleY transition), and the button lifts 3px with an ambient shadow.
- **Ghost:** Transparent background, white border at 35% opacity, white text. Hover: white overlay at 10% opacity. Used on hero for the "Como chegar" CTA — secondary but visible.
- **Light:** White background, Deep Forest text. Used on the contact card (dark surface CTA). Same hover lift.
- **Small variant:** 12px 20px padding, 0.7rem font. Used in the header nav for the "Agendar" button.

### Header
- **Style:** Fixed, full-width, 76px high, transparent dark base (`rgba(5,12,8,0.6)`) with 20px backdrop-blur. Bottom 1px border at 8% white opacity. On scroll past 60px, the header becomes 68px high and opacity increases to 0.92.
- **Logo:** 112px wide, left-aligned.
- **Navigation:** Uppercase 0.73rem, 600 weight, 0.1em tracking. Underline animation on hover (1px cream line, left-to-right fill).
- **Mobile:** Hamburger menu at 900px. Full-screen overlay (`rgba(5,12,8,0.98)`) with centered stacked links. No underline animation — tap targets are large enough without it.

### Service Cards
- **Style:** Grid-based (3 columns, collapsing to 2 at 900px, 1 at 600px) with 1px `rgba(255,255,255,0.13)` gap lines acting as the grid skeleton.
- **Background:** Deep Forest (#071710) at rest, Deep Green Hover (#0c2117) on hover. No shadow — depth via tonal shift only.
- **Internal padding:** 44px 36px (32px 24px mobile). Min-height 280px (auto on mobile).
- **Numbering:** Cardinal tag (01–06) in muted sage (#8aa08f), 0.75rem, 0.2em tracking. Numbering is sequential by design — these are a menu.

### FAQ
- **Style:** Bottom-bordered (1px `rgba(7,23,16,0.15)`) `<details>` elements. Two-column layout: left column has the section header, right column has the list.
- **Summary:** 700 weight, 1.05rem, -0.01em letter-spacing. `+`/`−` symbol in Green 700 (#1f4a33) on the right.
- **Transition:** 0.5s exponential ease on open/close.
- **Answer body:** Slate Green (#4e5b53), 0.95rem, capped at 520px width.

### Gallery
- **Style:** Two-column grid (1.2fr 0.8fr, 2 rows of 380px). First image spans both rows. 16px gap.
- **Hover:** Image scales to 1.06x with brightness boost (1.08). A "⊕" overlay fades in at 25% dark green.
- **Lightbox:** Fullscreen overlay at 95% opacity Deep Forest (#030a06) with 16px backdrop-blur. Image centered with `max-width: 90vw` / `max-height: 80vh`, 4px radius, deep shadow. Arrow navigation and counter below.

### WhatsApp Float
- **Style:** Fixed bottom-right (24px from edges), 60px circle, Green 700 (#1f4a33) background, white icon (26px). Shadow: `0 14px 35px rgba(0,0,0,0.3)`.
- **Hover:** Scale to 1.1x, background shifts to the lighter Green 700 (#1f4a33 replaced by var(--green-700)), shadow deepens.
- **Mobile:** Full-width booking bar at the bottom, with icon and the label “Agendar horário”. This makes the primary conversion action explicit and easier to tap.
- **Z-index:** 200 — above everything except the lightbox (300).

### Social Icons (Footer)
- **Style:** 46px squares, 1px border at 18% white opacity, muted text. Uniform grid.
- **Hover:** Border and text shift to cream (#f0eadc), lifts 2px. No fill, no background color change.

## 6. Do's and Don'ts

### Do:
- **Do** use Deep Forest (#071710) as the dominant dark surface color on any dark section.
- **Do** keep body line length between 65–75ch on prose sections.
- **Do** use `text-wrap: balance` on all headings (h1–h3).
- **Do** use the exponential ease curve `cubic-bezier(0.16, 1, 0.3, 1)` for all transitions.
- **Do** put WhatsApp CTAs in every section — the booking path is the primary conversion goal.
- **Do** use the hard 0px border-radius on buttons — the sharp edge is part of the brand's confident language.
- **Do** respect `prefers-reduced-motion`: all animations degrade gracefully to instant transitions.
- **Do** keep body text contrast at minimum 4.5:1 against its background.

### Don't:
- **Don't** use a second font family. Montserrat across all roles — variation comes from weight and scale.
- **Don't** add shadows to surfaces at rest. Flat is the default state.
- **Don't** put gray text on colored backgrounds. Use a shade of the background's own hue instead.
- **Don't** use bounce or elastic easing. The brand moves with confident exponential curves.
- **Don't** nest cards inside cards. If a card needs sub-sections, use tonal borders or internal dividers.
- **Don't** use gradient text (`background-clip: text`). Emphasis via weight or size only.
- **Don't** use border-left or border-right greater than 1px as decorative accents.
- **Don't** use Inter, Arial (beyond fallback), or system-ui fonts — Montserrat is the voice.
- **Don't** use numbered section markers (01, 02, 03) outside the services grid where they genuinely represent a sequential menu.
- **Don't** use glassmorphism or backdrop-blur decoratively. The header blur is functional (readability over scroll); the lightbox blur is contextual.
