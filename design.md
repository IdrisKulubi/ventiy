# Ventity — Official Design Specification

This document defines all visual rules, UI patterns, color system, layouts, and component standards that MUST be followed in all pages, components, and screens in the Ventity application.

Every generated UI must follow this specification exactly.

## 1. Brand Colors (STRICT)

All UI code MUST use only these colors unless otherwise stated.

### Primary Colors

**Primary Green (Main Brand):** #03352CF0

**Accent Orange (Primary CTA):** #EDAA02

**Sentiment Red (Warnings / Strong Emotions):** #FF6B6B

### Neutrals

- **White:** #FFFFFF
- **Light Grey:** #EAEAEA
- **Muted Grey (Text):** #9A9A9A
- **Dark Green (Headers / Deep Sections):** #022721

### Usage Rules

- **Primary backgrounds:** #03352CF0
- **All primary buttons:** #EDAA02
- **Error / Risk indicators:** #FF6B6B
- **Card backgrounds:** #FFFFFF
- **Borders / subtle lines:** #EAEAEA

## 2. Typography System (STRICT)

Use these exact text sizes and weights.

### Font Family

**Inter, sans-serif**

### Typography Scale

- **H1:** 48px / 700
- **H2:** 36px / 600
- **H3:** 28px / 600
- **H4:** 20px / 500
- **Body (default):** 16–18px / 400
- **Caption:** 14px / 400

### Text Color Rules

- **Headings:** #03352CF0 or White when on dark backgrounds
- **Body text:** Dark Green (#022721) or Black
- **Muted text (icons, meta info):** #9A9A9A

## 3. Layout System

### Page Width

- **Max width:** 1280px
- **Center all main content**

### Padding

- **Desktop:** padding-left/right: 48px
- **Mobile:** 24px

### Spacing Scale

4, 8, 16, 24, 32, 48, 64 px

All components MUST use these spacing units.

### Section Layout Rules

Each major section MUST include:

- A clear header
- A descriptive paragraph
- Media on left OR right (image, illustration)
- Consistent 2-column grid on desktop
- Stacked layout on mobile

## 4. Core Components (STRICT DEFINITIONS)

Every component your LLM generates must match these definitions.

### 4.1 Primary Button

- **Background:** #EDAA02
- **Text:** White
- **Radius:** 12px
- **Hover:** slightly darker orange
- **Padding:** 12px 24px
- **Font:** 16px / 600

### 4.2 Secondary Button

- **Border:** 2px solid #EDAA02
- **Text:** #EDAA02
- **Background:** transparent
- **Radius:** 12px

### 4.3 Card

- **Background:** White
- **Border radius:** 20px
- **Shadow:** soft medium
- **Padding:** 24px
- **Header text:** H3
- Spacing inside card follows scale above

### 4.4 Accordion

**Header:**

- **Font:** 20px / 600
- **Color:** Primary Green
- **Icon Color:** Orange (#EDAA02)

**Body:**

- 16px body text
- White background

### 4.5 Hero Section

**MANDATORY STYLING:**

- **Background:** Primary Green #03352CF0
- Large headline in white
- Subtext in muted white
- CTA button in orange
- Mobile mockups angled to the right

**Component parts:**

- Headline
- Subtext
- CTA button
- Mockup images

### 4.6 Image Style

- **Border radius:** 20px
- **Soft shadow**
- No harsh edges
- Should blend with calm brand feel

## 5. Page Templates (STRICT)

These templates MUST be followed for consistency.

### 5.1 Home Page Template

#### SECTION 1 — HERO

- Dark green background
- Large headline
- CTA button
- App mockups displayed at angle

#### SECTION 2 — ABOUT

- Two-column layout
- Left: Brain illustration
- Right: Text + accordion list
- Background: white

#### SECTION 3 — PILLARS

This section contains four pillar blocks, each with:

- Title (H2)
- Descriptive paragraph
- Supporting image or illustration
- Optional bullet list
- Clean white card backgrounds

**Pillars:**

- Anonymous Venting
- Therapy & Wellness
- AI Emotional World
- Color-Based Emotional Experience

#### SECTION 4 — FOOTER

- Dark background #022721
- Light text
- Three columns:
  - Branding
  - Quick Links
  - Contact

## 6. Emotional Color System

**Used for:**

- Mood tracking visuals
- User sentiment representation
- Vent emotion tags

**Mapping:**

- **Anger** → #FF6B6B
- **Joy** → Yellow/Orange
- **Calm** → Green
- **Sadness** → Purple
- **Fear** → Blue

## 7. Responsive Rules

### Desktop

- Two-column major layouts
- Images appear beside text
- Max-width 1280px

### Mobile

- Everything stacks vertically
- Text center-aligned in hero
- Mockup images centered or full-width

## 8. Tailwind Configuration Rules

  Assume the following Tailwind settings exist:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primaryGreen: '#03352CF0',
        accentOrange: '#EDAA02',
        sentimentRed: '#FF6B6B',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
};
```

## 9. Design Principles

### 1. Calm & Safe

No harsh colors except red for emotion cues.

### 2. Anonymous-first

No user profile photos in core screens.

### 3. Emotion-centric

Colors reflect mood.

### 4. Accessibility

Contrast ratio must be high for text.

### 5. Consistency

All sections follow a predictable spacing, layout, and component style.

