---
name: gridgeist-shadcn-nextjs
description: Design, redesign, review, or implement Next.js interfaces that combine a Gridgeist-style product-native visual direction with shadcn/ui primitives. Use when the user asks for Next.js UI/UX, page or dashboard design, design-system work, component architecture, shadcn customization, Tailwind styling, or frontend implementation where the interface should avoid generic SaaS aesthetics. Treat Gridgeist as the direction owner, shadcn/ui as editable implementation primitives, and semantic design tokens as the bridge between them.
---

# Gridgeist + shadcn/ui + Next.js

Build product-native Next.js interfaces with one coherent visual thesis. Use Gridgeist principles for direction and hierarchy; use shadcn/ui for accessible, editable primitives; use semantic tokens to connect the two.

## Core ownership rule

- Let **Gridgeist-style direction own the visual thesis**: structure, hierarchy, grid visibility, typography, density, color roles, shape, imagery, motion, responsive composition, and product-specific motif.
- Let **shadcn/ui own reusable primitive behavior**: dialog, sheet, select, dropdown, tabs, tooltip, command, form controls, table primitives, and other interaction building blocks.
- Let **project components own product meaning**: entities, workflows, domain-specific cards, readers, metrics, toolbars, inspectors, lists, status surfaces, etc.
- Never let shadcn's default appearance become the product's design direction.
- Never introduce a second broad visual style that competes with the chosen thesis.

If a separate Gridgeist skill is available, use it as the source of visual-direction decisions and use this skill as the integration/implementation contract. If it is unavailable, apply the bundled direction rules in `references/design-direction.md`.

## Workflow

1. **Inspect before styling**
   - Identify audience, primary task, content, product evidence, brand constraints, routes, existing components, tokens, Tailwind conventions, and shadcn setup.
   - Inspect rendered desktop/mobile UI when available.
   - Determine whether the request is **Create**, **Redesign**, **Review**, or **Implement**.
   - Preserve working behavior, accessibility, data/state logic, and brand signals unless the user explicitly authorizes change.

2. **Set one interface thesis**
   - Write one sentence: **audience + primary task + structural logic + brand expression + product-native motif**.
   - Prefer product evidence over decorative UI.
   - Decide whether the grid should be **visible**, **quiet**, or **invisible**.
   - Read `references/design-direction.md` when establishing or changing the thesis.

3. **Define the design contract**
   - Map the thesis into semantic tokens for canvas, surface, text, muted text, border, action, focus, destructive, success/warning/error when applicable.
   - Define typography roles, layout tracks/gutters, spacing rhythm, density, shape/radius rules, surfaces/depth, motion, and responsive behavior only as needed.
   - Reuse existing project tokens when coherent; consolidate accidental near-duplicates instead of creating arbitrary values.
   - Read `references/token-contract.md` when system-level styling changes are required.

4. **Map shadcn primitives to product components**
   - Keep `components/ui/*` generic and reusable.
   - Compose product/domain components in `components/product/*`, feature folders, or the project's existing architecture.
   - Prefer adapting shadcn through tokens, variants, composition, and local wrapper components before forking behavior.
   - Do not wrap every section in `Card` or every label in `Badge`.
   - Read `references/shadcn-integration.md` before major component work.

5. **Implement hierarchy before polish**
   - Use position, grouping, contrast, density, rhythm, alignment, and whitespace before escalating title size.
   - Let real product UI, data, content, imagery, workflow state, or tools carry visual weight.
   - Build semantic HTML and preserve keyboard, touch, focus, form labels, and screen-reader behavior.
   - Recompose mobile layouts by priority; do not merely shrink desktop.

6. **Cover states**
   - For each relevant interactive component or flow, handle default, hover, focus-visible, active/pressed, selected, disabled, loading, empty, error, success, and destructive states as applicable.
   - Never rely on color alone for important state.
   - Support reduced motion when motion is used.

7. **Verify the result**
   - Check representative mobile, tablet, desktop, and dense-desktop widths as appropriate.
   - Exercise primary flows, long content, localization stress, empty/error states, focus order, overflow, touch targets, reduced motion, and dark/light themes if the product supports them.
   - Fix hierarchy and usability issues before decorative polish.
   - Read `references/verification.md` for release checks.

## Architecture default

Prefer this separation unless the repository already has a coherent equivalent:

```text
src/
  app/
    globals.css
    ...
  components/
    ui/                 # shadcn primitives
    layout/             # reusable composition primitives
    product/            # domain/product components
  lib/
  styles/               # optional token/typography files
```

Do not reorganize an existing project solely to match this tree.

## Implementation rules

- Inspect the installed Next.js, React, Tailwind, and shadcn versions before changing configuration.
- Follow the project's existing package manager, aliases, linting, formatting, server/client component conventions, and route architecture.
- Prefer semantic CSS variables and Tailwind theme mappings over repeated literal colors and spacing values.
- Keep primitive variants task-based: `primary`, `secondary`, `quiet`, `destructive`, `outline`, etc. Avoid variant names based on one-off visual treatments.
- Keep shadcn primitive behavior recognizable and accessible; modify appearance more aggressively than interaction semantics.
- Use client components only where interactivity requires them.
- Prefer composition over inheritance-heavy or over-abstracted component systems.
- Avoid adding a dependency for effects that are practical in CSS or existing project utilities.

## Anti-generic UI rules

Treat these as warning signs, not absolute bans:

- repeated rounded cards with identical padding everywhere;
- centered hero + gradient blob + three feature cards by default;
- excessive pills/badges;
- arbitrary icon boxes;
- equal-weight sections with no hierarchy;
- decorative dashboards with fake metrics;
- giant headings that displace the actual product task;
- copy-pasted shadcn examples that ignore the product's content and brand.

Replace weak patterns with product-specific structure, not novelty for its own sake.

## Output contract

For **Create/Redesign**, return or implement:

1. **Direction** — thesis, preserved constraints, grid visibility, and primary visual lead.
2. **System** — key semantic tokens, typography/layout rules, and component grammar.
3. **Component mapping** — which parts are shadcn primitives vs product components.
4. **Implementation** — production-ready Next.js/Tailwind/shadcn code or a precise file-by-file plan, depending on user request and available repository access.
5. **Verification** — tested/expected responsive widths, states, accessibility checks, and any remaining unverified gaps.

For **Review**, do not redesign silently. Provide prioritized findings tied to hierarchy, usability, responsiveness, accessibility, brand fit, or component-system drift, followed by one coherent correction direction.

For **Implementation-only** requests, preserve the existing thesis and apply the smallest coherent change needed.

## References

- Read `references/design-direction.md` when creating or changing the interface thesis.
- Read `references/token-contract.md` when defining or changing tokens, typography, spacing, color, shape, or theme behavior.
- Read `references/shadcn-integration.md` when installing, adapting, or composing shadcn/ui components.
- Read `references/verification.md` before finalizing a multi-surface redesign or production implementation.
