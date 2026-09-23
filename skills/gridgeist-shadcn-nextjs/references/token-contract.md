# Token Contract

Use a layered token model so visual direction can change without rewriting every component.

## Layers

1. **Foundation tokens** — raw palette, type scale, spacing, radii, motion.
2. **Semantic tokens** — purpose: canvas, surface, text, muted, border, action, focus, destructive, success, warning.
3. **Component tokens/variants** — stable exceptions only when a shared component genuinely needs them.

Prefer semantic tokens in component code.

## Minimum semantic roles

Define only roles the product uses, but consider:

```css
:root {
  --background: ...;
  --foreground: ...;
  --surface: ...;
  --surface-raised: ...;
  --muted: ...;
  --muted-foreground: ...;
  --border: ...;
  --input: ...;
  --primary: ...;
  --primary-foreground: ...;
  --secondary: ...;
  --secondary-foreground: ...;
  --destructive: ...;
  --destructive-foreground: ...;
  --ring: ...;
  --success: ...;
  --warning: ...;
  --radius: ...;
}
```

Use the project's shadcn/Tailwind naming where already established instead of renaming everything.

## Token rules

- Keep foreground/background pairs explicit.
- Do not store one-off layout values as global tokens unless they repeat meaningfully.
- Consolidate near-duplicate colors, spacing, radii, and shadows.
- Do not force every shadcn token to equal a unique color; roles may intentionally share values.
- Verify rendered contrast and hierarchy; token names alone are not proof of quality.
- If dark mode exists, design dark mode semantically rather than mechanically inverting colors.
- If forced-colors or high-contrast support is relevant, preserve focus and state visibility.

## Typography roles

Define fluid ranges only when needed. Keep a small, intentional role set. Example mapping:

```text
Display       -> marketing/brand statement only when justified
Page title    -> route-level orientation
Section title -> major content group
Component     -> local group or entity title
Body          -> reading/task content
Label         -> controls and compact UI
Metadata      -> IDs, timestamps, supporting facts
Code          -> code/commands only
```

## Layout tokens

Prefer a coherent container/gutter and spacing rhythm over many magic values. When a page uses a visible or quiet grid, define tracks and gutters at the composition layer rather than forcing every primitive to know the page grid.
