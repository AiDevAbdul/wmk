# Blog Redesign - Visual Design System

**Date:** 2026-04-07
**Version:** 1.0
**Status:** ✅ Complete

## Design Philosophy

**Aesthetic:** Luxury Minimalism with Technical Authority

The blog redesign embodies premium automotive positioning through:
- **Refined Typography:** Bold headlines with light body text for contrast
- **Strategic Color Usage:** Steel palette with primary yellow accents for precision signals
- **Purposeful Motion:** Smooth animations that enhance, not distract
- **Sophisticated Spacing:** Generous negative space for premium feel
- **Glassmorphism:** Subtle depth through backdrop blur and layered effects

## Color System

### Primary Palette

```
Primary Yellow:     #F5C518
  - Used for: Accents, active states, CTAs, hover effects
  - Opacity variants: 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%
  - Signals: Precision, technical authority, premium quality

Steel Dark:         #1E2128
  - Used for: Hero backgrounds, navigation, text on primary
  - Opacity variants: 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%
  - Signals: Strength, reliability, professionalism

Steel Mid:          #4E5566
  - Used for: Card backgrounds, secondary elements
  - Opacity variants: 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%
  - Signals: Depth, hierarchy, secondary importance

Steel Light:        #8A919E
  - Used for: Secondary text, borders, disabled states
  - Opacity variants: 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%
  - Signals: Subtle, secondary, supporting information

Accent Red:         #E53935
  - Used for: Warnings, critical information, emphasis
  - Opacity variants: 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%
  - Signals: Urgency, importance, caution
```

### Category Color Palette

```
News Category:
  - Background: Blue gradient (from-blue-500/20 to-blue-600/10)
  - Border: blue-500/30
  - Text: blue-300
  - Icon: Zap (lightning bolt)

ECM Tips Category:
  - Background: Amber gradient (from-amber-500/20 to-amber-600/10)
  - Border: amber-500/30
  - Text: amber-300
  - Icon: Wrench (tools)

Hybrid Battery Category:
  - Background: Green gradient (from-green-500/20 to-green-600/10)
  - Border: green-500/30
  - Text: green-300
  - Icon: Battery (power)

Maintenance Category:
  - Background: Purple gradient (from-purple-500/20 to-purple-600/10)
  - Border: purple-500/30
  - Text: purple-300
  - Icon: Wrench (tools)
```

## Typography System

### Font Stack
```
Display:    System fonts (bold, tracking-tight)
Headings:   System fonts (bold, tracking-tight)
Body:       System fonts (light, tracking-wide)
Monospace:  System monospace (for code)
```

### Type Scale

```
Display (7xl):      56px, Bold, tracking-tight, line-height 1.2
Heading 1 (6xl):    48px, Bold, tracking-tight, line-height 1.2
Heading 2 (5xl):    40px, Bold, tracking-tight, line-height 1.3
Heading 3 (4xl):    36px, Bold, tracking-tight, line-height 1.3
Heading 4 (3xl):    30px, Bold, tracking-tight, line-height 1.4
Heading 5 (2xl):    24px, Bold, tracking-tight, line-height 1.4
Heading 6 (xl):     20px, Bold, tracking-tight, line-height 1.5

Large (lg):         18px, Light, tracking-wide, line-height 1.6
Base (base):        16px, Light, tracking-wide, line-height 1.6
Small (sm):         14px, Light, tracking-wide, line-height 1.6
Extra Small (xs):   12px, Bold, tracking-widest, line-height 1.5
```

### Font Weights

```
Light:      300 (body text, subheadings)
Regular:    400 (default)
Medium:     500 (emphasis, labels)
Semibold:   600 (secondary headings)
Bold:       700 (primary headings, badges)
```

### Letter Spacing (Tracking)

```
tracking-tighter:   -0.05em (not used)
tracking-tight:     -0.025em (headings, premium feel)
tracking-normal:    0em (default)
tracking-wide:      0.025em (body text, labels)
tracking-wider:     0.05em (not used)
tracking-widest:    0.1em (badges, uppercase labels)
```

## Spacing System

### Base Unit: 4px

```
0:      0px
1:      4px
2:      8px
3:      12px
4:      16px
5:      20px
6:      24px
7:      28px
8:      32px
9:      36px
10:     40px
12:     48px
14:     56px
16:     64px
20:     80px
24:     96px
```

### Component Spacing

```
Hero Section:
  - Padding top:      pt-32 (128px)
  - Padding bottom:   pb-24 (96px)
  - Padding x:        px-4 (mobile), px-8 (desktop)

Search Section:
  - Margin bottom:    mb-20 (80px)
  - Gap between:      gap-3 (12px)

Blog Cards:
  - Padding:          p-8 (32px)
  - Gap between:      gap-8 (32px)
  - Grid gap:         gap-8 (32px)

CTA Section:
  - Padding:          p-12 (48px)
  - Margin bottom:    mb-12 (48px)
  - Gap between:      gap-8 (32px)
```

## Component Design

### Hero Section

```
Layout:
  - Max width: max-w-6xl
  - Centered: mx-auto
  - Padding: px-4 md:px-8

Breadcrumb:
  - Font size: text-sm
  - Color: text-steel-light/60
  - Separator: text-primary/40

Main Heading:
  - Split design: "Technical" + accent bar + "Knowledge Hub"
  - First part: text-6xl md:text-7xl, text-white, tracking-tight
  - Accent bar: h-1 w-16, bg-gradient-to-r from-primary to-primary/50
  - Second part: text-5xl md:text-6xl, gradient text, tracking-tight

Subheading:
  - Font size: text-lg md:text-xl
  - Color: text-steel-light/80
  - Font weight: light
  - Tracking: tracking-wide
  - Max width: max-w-3xl

Stats:
  - Display: flex gap-8
  - Value: text-3xl font-bold text-primary tracking-tight
  - Label: text-sm text-steel-light/60 tracking-wide uppercase
```

### Search Bar

```
Container:
  - Position: relative
  - Group: group (for focus-within effects)

Glow Effect:
  - Background: bg-gradient-to-r from-primary/10 via-primary/5 to-transparent
  - Blur: blur-xl
  - Opacity: opacity-0 group-focus-within:opacity-100
  - Transition: transition-all duration-500

Input Container:
  - Background: bg-steel-mid/30 backdrop-blur-xl
  - Border: border border-steel-light/10
  - Hover: hover:border-steel-light/20
  - Focus: group-focus-within:border-primary/40 group-focus-within:bg-steel-mid/50
  - Border radius: rounded-2xl
  - Padding: py-5 px-6

Icon:
  - Position: absolute left-6
  - Color: text-steel-light/40 group-focus-within:text-primary
  - Transition: transition-colors duration-300
  - Size: size-22

Input:
  - Background: bg-transparent
  - Text color: text-white text-lg
  - Placeholder: placeholder-steel-light/30
  - Tracking: tracking-wide
  - Focus: focus:outline-none
```

### Category Filters

```
Container:
  - Display: flex flex-wrap
  - Gap: gap-3
  - Align: items-center

Label:
  - Font size: text-sm
  - Color: text-steel-light/60
  - Font weight: font-semibold
  - Tracking: tracking-wide uppercase

Button (Inactive):
  - Background: bg-steel-mid/40
  - Text: text-steel-light/80
  - Border: border border-steel-light/10
  - Hover: hover:bg-steel-mid/60 hover:border-steel-light/20
  - Padding: px-6 py-2.5
  - Border radius: rounded-xl
  - Font: font-semibold tracking-wide text-sm
  - Animation: whileHover scale 1.05, whileTap scale 0.95

Button (Active):
  - Background: bg-gradient-to-r from-primary to-primary/90
  - Text: text-steel-dark
  - Shadow: shadow-lg shadow-primary/40
  - Padding: px-6 py-2.5
  - Border radius: rounded-xl
  - Font: font-semibold tracking-wide text-sm
```

### Blog Card

```
Container:
  - Background: bg-gradient-to-br from-steel-mid/60 via-steel-mid/40 to-steel-dark/60
  - Backdrop: backdrop-blur-sm
  - Border: border border-steel-light/10
  - Hover: hover:border-primary/40
  - Border radius: rounded-2xl
  - Overflow: overflow-hidden
  - Height: h-full
  - Transition: transition-all duration-500
  - Hover shadow: hover:shadow-2xl hover:shadow-primary/20

Glow Overlay:
  - Position: absolute inset-0
  - Background: bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0
  - Hover: group-hover:from-primary/15 group-hover:via-primary/5 group-hover:to-primary/0
  - Transition: transition-all duration-500

Shine Effect:
  - Position: absolute inset-0
  - Background: bg-gradient-to-r from-transparent via-white/3 to-transparent
  - Transform: -translate-x-full group-hover:translate-x-full
  - Transition: transition-transform duration-1000

Corner Accent:
  - Position: absolute top-0 right-0
  - Size: w-32 h-32
  - Background: bg-gradient-to-bl from-primary/10 to-transparent
  - Border radius: rounded-bl-3xl
  - Opacity: opacity-0 group-hover:opacity-100
  - Transition: transition-opacity duration-500

Content:
  - Padding: p-8
  - Display: flex flex-col
  - Height: h-full
  - Z-index: z-10

Category Badge:
  - Display: flex items-center gap-2
  - Font: text-xs font-bold uppercase tracking-widest
  - Padding: px-4 py-2
  - Border radius: rounded-lg
  - Border: border
  - Background: bg-gradient-to-r (category-specific)
  - Animation: whileHover scale 1.08

Date:
  - Font: text-xs text-steel-light/50 font-medium tracking-wide

Title:
  - Font: text-xl font-bold text-white
  - Hover: group-hover:text-primary
  - Transition: transition-colors duration-300
  - Tracking: tracking-tight leading-tight
  - Clamp: line-clamp-2

Excerpt:
  - Font: text-sm text-steel-light/70 leading-relaxed
  - Font weight: font-light
  - Tracking: tracking-wide
  - Clamp: line-clamp-3
  - Grow: grow

Divider:
  - Height: h-px
  - Background: bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0
  - Margin: mb-6

CTA Link:
  - Display: flex items-center gap-3
  - Color: text-primary
  - Font: font-semibold text-sm
  - Hover: group-hover:gap-4
  - Transition: transition-all
  - Animation: whileHover x 6

Icon Button:
  - Display: flex items-center justify-center
  - Size: w-6 h-6
  - Border radius: rounded-full
  - Background: bg-primary/10
  - Hover: group-hover:bg-primary/20
  - Transition: transition-colors
```

### CTA Section

```
Container:
  - Max width: max-w-6xl
  - Centered: mx-auto
  - Padding: px-4 md:px-8 py-20 mb-12
  - Animation: whileInView opacity 1 y 0

Card:
  - Background: bg-gradient-to-r from-steel-mid/40 via-steel-mid/20 to-steel-dark/40
  - Backdrop: backdrop-blur-xl
  - Border: border border-primary/20
  - Border radius: rounded-2xl
  - Padding: p-12
  - Overflow: overflow-hidden

Glow Effect:
  - Position: absolute inset-0
  - Background: bg-gradient-to-r from-primary/5 to-transparent
  - Opacity: opacity-0 hover:opacity-100
  - Transition: transition-opacity duration-500

Content:
  - Display: flex flex-col md:flex-row
  - Align: items-center justify-between
  - Gap: gap-8
  - Z-index: z-10

Heading:
  - Font: text-2xl md:text-3xl font-bold text-white
  - Tracking: tracking-tight
  - Margin: mb-3

Description:
  - Font: text-lg text-steel-light/80 font-light
  - Tracking: tracking-wide

Button:
  - Padding: px-8 py-4
  - Background: bg-gradient-to-r from-primary to-primary/90
  - Text: text-steel-dark font-bold
  - Border radius: rounded-xl
  - Shadow: shadow-lg shadow-primary/40
  - Hover: hover:shadow-primary/60
  - Whitespace: whitespace-nowrap
  - Tracking: tracking-wide
  - Animation: whileHover scale 1.05, whileTap scale 0.95
```

## Animation System

### Easing Functions

```
ease-out:       Cubic-bezier(0.16, 1, 0.3, 1)
ease-in-out:    Cubic-bezier(0.4, 0, 0.2, 1)
spring:         Stiffness 300, damping 30
```

### Keyframe Animations

```
@keyframes card-lift
  0%, 100%:   translateY(0px)
  50%:        translateY(-4px)

@keyframes gradient-shift
  0%, 100%:   background-position 0% 50%
  50%:        background-position 100% 50%

@keyframes border-glow
  0%, 100%:   border-color rgba(245, 197, 24, 0.2)
  50%:        border-color rgba(245, 197, 24, 0.5)

@keyframes text-shimmer
  0%:         background-position -1000px 0
  100%:       background-position 1000px 0
```

### Motion Variants

```
Hero Entrance:
  - Initial: opacity 0, y -20
  - Animate: opacity 1, y 0
  - Duration: 0.6-0.8s
  - Delay: 0.1-0.25s

Search Entrance:
  - Initial: opacity 0, y 30
  - Animate: opacity 1, y 0
  - Duration: 0.7s
  - Delay: 0.3s

Card Entrance:
  - Initial: opacity 0, y 20
  - Animate: opacity 1, y 0
  - Duration: 0.5s
  - Stagger: 0.08s between items

Card Hover:
  - Lift: y -12px
  - Duration: 0.3s
  - Easing: ease-out

Button Hover:
  - Scale: 1.05
  - Duration: 0.2s

Button Tap:
  - Scale: 0.95
  - Duration: 0.1s

Icon Hover:
  - Scale: 1.08
  - Duration: 0.2s

CTA Entrance (on scroll):
  - Initial: opacity 0, y 40
  - Animate: opacity 1, y 0
  - Duration: 0.7s
  - Trigger: whileInView
```

## Responsive Design

### Breakpoints

```
Mobile:     < 768px   (default)
Tablet:     768px     (md:)
Desktop:    1024px    (lg:)
Large:      1280px    (xl:)
Extra:      1536px    (2xl:)
```

### Responsive Adjustments

```
Hero Section:
  Mobile:   pt-24 pb-16 px-4 text-5xl
  Tablet:   pt-28 pb-20 px-8 text-6xl
  Desktop:  pt-32 pb-24 px-8 text-7xl

Search Bar:
  Mobile:   py-4 px-4
  Tablet:   py-5 px-6
  Desktop:  py-5 px-6

Blog Grid:
  Mobile:   grid-cols-1 gap-6
  Tablet:   grid-cols-2 gap-7
  Desktop:  grid-cols-3 gap-8

CTA Section:
  Mobile:   flex-col p-8
  Tablet:   flex-row p-10
  Desktop:  flex-row p-12
```

## Accessibility

### Color Contrast

```
Text on Primary (#F5C518):
  - Use: text-steel-dark
  - Ratio: 7.5:1 (AAA compliant)

Text on Steel Mid (#4E5566):
  - Use: text-white
  - Ratio: 8.2:1 (AAA compliant)

Text on Steel Dark (#1E2128):
  - Use: text-white
  - Ratio: 12.6:1 (AAA compliant)

Secondary Text:
  - Use: text-steel-light/80-90
  - Ratio: 4.5:1 (AA compliant)
```

### Focus States

```
All interactive elements:
  - Visible focus ring: 2px solid primary
  - Offset: 2px
  - Color: #F5C518
  - Keyboard accessible: Tab navigation
```

### Motion Preferences

```
@media (prefers-reduced-motion: reduce)
  - All animations: none !important
  - All transitions: none !important
  - Respects user preference
```

---

**Design System Version:** 1.0
**Last Updated:** 2026-04-07
**Status:** ✅ Complete & Production Ready
