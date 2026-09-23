# shadcn/ui Integration Rules

## Role of shadcn/ui

Treat shadcn/ui as editable primitives and implementation scaffolding, not as the visual identity of the product.

Good uses:

- dialog / alert-dialog;
- sheet / drawer;
- select / combobox / command;
- dropdown / context menu;
- tabs;
- tooltip / popover;
- form controls;
- table primitives;
- pagination;
- toast/sonner where already used;
- button/input primitives and shared variants.

## Do not over-primitive the page

Avoid turning every content group into a `Card`. Use plain semantic structure when containment is unnecessary:

```tsx
<section className="border-t border-border">
  ...
</section>
```

A shadcn component should solve an interaction or reuse problem, not create decoration for its own sake.

## Component boundaries

Recommended separation:

```text
components/ui/       -> generic primitives
components/layout/   -> reusable layout/composition
components/product/  -> domain meaning
```

Examples of product components:

- `NovelCard`, `ChapterRow`, `ReaderToolbar`;
- `MachineStatusRow`, `AlarmPanel`, `ProductionTimeline`;
- `OrderSummary`, `InventoryMovement`, `RouteException`.

## Variants

Prefer task-based variants:

```text
primary
secondary
quiet
destructive
outline
```

Avoid names like `blueGlow`, `roundedBig`, or `glassCard` unless they represent a durable branded concept rather than a styling accident.

## Styling priority

When adapting shadcn to the direction, prefer this order:

1. semantic tokens;
2. component variants;
3. composition/wrappers;
4. local class changes;
5. deeper primitive modification only when necessary.

Preserve accessible interaction semantics even when appearance changes substantially.

## Next.js considerations

- Keep Server Components by default where possible.
- Add `"use client"` only for interactive components that need client state/effects/browser APIs.
- Avoid moving whole routes to client components because one child needs interaction.
- Keep data fetching and mutation patterns consistent with the existing project.
- Follow the repository's current App Router/Page Router conventions; do not migrate architecture unless requested.

## Tailwind considerations

- Inspect whether the project uses Tailwind v3, v4, CSS-first config, JS/TS config, or custom layers before editing.
- Follow existing token-to-utility mappings.
- Do not introduce arbitrary literal values repeatedly when a semantic token or local composition class is clearer.
- Use responsive utilities to recompose content order, density, visibility, and controls; do not only scale font sizes.
