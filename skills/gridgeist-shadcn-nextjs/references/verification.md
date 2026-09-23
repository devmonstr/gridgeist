# Verification Checklist

Use this before declaring a redesign or implementation complete.

## Visual hierarchy

- One clear primary task or focal region per context.
- Page title does not crowd out useful product content.
- Related items align and group consistently.
- Repeated sections do not all have identical visual weight without reason.

## Responsive behavior

Check representative widths appropriate to the product, including:

- narrow mobile;
- regular mobile;
- tablet/small laptop;
- desktop;
- wide or dense desktop when relevant.

Verify:

- no unintended horizontal overflow;
- long labels/titles do not break the layout;
- tables and dense data have an explicit mobile strategy;
- navigation remains reachable;
- touch targets remain usable;
- primary actions do not disappear below decorative content.

## Interaction states

Exercise applicable states:

- default;
- hover;
- focus-visible;
- active/pressed;
- selected;
- disabled;
- loading;
- empty;
- error;
- success;
- destructive confirmation.

## Accessibility

- Semantic landmarks and headings are sensible.
- Inputs have labels or accessible names.
- Keyboard focus order follows visual/task order.
- Focus indicators are visible.
- State is not communicated by color alone.
- Contrast is adequate in rendered context.
- Reduced motion preserves essential feedback.
- Dialogs, sheets, menus, and popovers retain accessible shadcn/Radix behavior.

## Product stress tests

- localization/Thai and English text where relevant;
- very long titles/names;
- zero data;
- large datasets;
- missing images;
- slow-loading data;
- permission or destructive errors;
- theme changes if supported.

## Reporting

Separate what was actually rendered/tested from what remains inferred. Never claim responsive, interaction, or accessibility verification that was not observed.
