# KodNest Premium Build System

A premium, calm, and intentional design system for B2C SaaS products. This system emphasizes coherence, confidence, and clarity over flashy effects.

## Design Philosophy

- **Calm**: No visual noise, no unnecessary animations
- **Intentional**: Every element serves a purpose
- **Coherent**: Consistent spacing, colors, and interactions throughout
- **Confident**: Clear hierarchy, generous spacing, professional typography

## Core Principles

- No gradients, glassmorphism, neon colors, or animation noise
- Maximum 4 chromatic colors across the entire system
- Strict spacing scale: 8px, 16px, 24px, 40px, 64px
- Serif headings, clean sans-serif body text
- Consistent 150-200ms transitions with ease-in-out

## Color System

- **Background**: `#F7F6F3` (off-white)
- **Primary Text**: `#111111` (near-black)
- **Accent**: `#8B0000` (deep red)
- **Success**: `#2F6B3C` (muted green)
- **Warning**: `#B67A1D` (muted amber)
- **Error**: `#7E1C1C` (deep red variant)

## Typography

- **Headings**: Serif font (Georgia), large, confident, generous spacing
- **Body**: Clean sans-serif (Inter), 16-18px, line-height 1.6-1.8
- **Max text width**: 720px for optimal readability

## Layout Structure

Every page follows this structure:

1. **Top Bar**: Project name, progress indicator, status badge
2. **Context Header**: Large serif headline + 1-line subtext
3. **Primary Workspace (70%)**: Main product interaction area
4. **Secondary Panel (30%)**: Step explanation, copyable prompts, actions
5. **Proof Footer**: Checklist with proof inputs

## File Structure

```
design-system/
  ├── tokens.css      # Design tokens (colors, spacing, typography)
  ├── components.css  # Reusable component styles
  └── layout.css      # Layout structure and grid system

index.html            # Example implementation
README.md            # This file
```

## Usage

1. Include the CSS files in your HTML:
```html
<link rel="stylesheet" href="design-system/tokens.css">
<link rel="stylesheet" href="design-system/components.css">
<link rel="stylesheet" href="design-system/layout.css">
```

2. Use the provided CSS classes following the design system guidelines.

## Components

- **Buttons**: Primary (solid deep red), Secondary (outlined)
- **Inputs**: Clean borders, clear focus states
- **Cards**: Subtle borders, balanced padding, no shadows
- **Status Badges**: Not Started, In Progress, Shipped
- **Checkboxes**: With proof input fields

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with CSS custom properties support.

## License

This design system is proprietary and intended for KodNest Premium Build System use.
