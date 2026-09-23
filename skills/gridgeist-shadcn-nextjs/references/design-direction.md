# Design Direction Contract

## Thesis model

Choose one structural influence, one expressive influence, and one product-native motif.

**Thesis formula:** audience + primary task + structural logic + brand expression + product-native motif.

Examples:

- Operations dashboard: "An operational workspace for plant engineers built around aligned machine state, compressed hierarchy, and visible exception paths."
- Reading platform: "A discovery and reading experience paced by editorial hierarchy, cover art, chapter progress, and quiet navigation."
- Developer tool: "A precise technical workspace organized around code, state changes, and dense but legible relationships."

## Structural influence

Choose from patterns such as:

- rational grid;
- editorial sequence;
- task flow;
- spatial canvas;
- dense operational table;
- split-pane inspector;
- document/navigation layout.

The grid may be visible, quiet, or invisible. Do not expose grid lines merely to look technical.

## Expressive influence

Derive tone from the product and brand: precise, restrained, warm, playful, tactile, editorial, image-led, utilitarian, or another defensible direction.

Avoid applying technical/monospace styling to nontechnical products by default.

## Product-native motif

Use authentic material as the identity carrier, for example:

- live route state;
- machine/PLC status;
- chapters and reading progress;
- artwork and crop behavior;
- code and logs;
- inventory movement;
- project timeline;
- document metadata;
- workflow status.

Prefer these to decorative blobs, fake metrics, and generic illustration panels.

## Typography

- Define only needed roles: display, page title, section heading, component title, body, label, metadata, code.
- Keep body measure readable, commonly around 45–75 characters where long-form reading applies.
- Use type size proportionally to task, content length, language, viewport, and nearby controls.
- Use weight, family, contrast, tracking, position, spacing, and deliberate wrapping before increasing size.
- Reserve monumental type for short, brand-supported moments that do not hide the primary task.
- Use mono primarily for code, commands, IDs, timestamps, or technical labels.

## Composition

- Make one region dominant per context.
- Align related information; separate unrelated information.
- Use section variation within a shared structural logic.
- On small screens, reprioritize and recompose rather than stack every desktop column in the same order.
- Keep navigation and primary actions obvious.

## Surfaces and shape

- Use borders to communicate containment, adjacency, sequence, or interaction.
- Derive radius, shadow, texture, and elevation from the product direction.
- Avoid simultaneous heavy borders, strong shadows, large radii, and gradients unless there is a product reason.

## Motion

- Use motion for causality, feedback, and spatial change.
- Do not use ambient animation that competes with the task.
- Support `prefers-reduced-motion` and keep state changes understandable without animation.
