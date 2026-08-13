---
solodeveling_schema: 1
---

# EVIDENCE-0027: Proportional typography

## Repository gates

| Check | Result |
| --- | --- |
| `python -X utf8 .\scripts\validate_release.py` | Pass: v1.2.0 skill, release metadata, docs, and evals aligned |
| JavaScript syntax for shared, Examples, and README showcase scripts | Pass |
| `python -X utf8 -m compileall -q scripts` | Pass |
| `git diff --check` | Pass |
| English/Thai evaluation numbering | Pass: 20 / 20, contiguous and paired |

## Rendered responsive evidence

- Local source served from `http://127.0.0.1:8765/` and inspected through the
  Browser plugin in Brave.
- Eleven public routes were checked at 360, 768, 1280, and 1600 CSS px: 44 route /
  viewport combinations total.
- Final matrix reported zero unintended horizontal overflow, zero heading elements
  occupying more than 55% of a viewport, and zero captured console errors or
  warnings.
- The first English homepage viewport at 1280 x 900 rendered an H1 height of 176 px
  (20% of viewport height) with its supporting copy and CTA still visible.
- The Thai homepage at 360 x 800 rendered an H1 height of 90 px (11% of viewport
  height), retained supporting content in the first viewport, and had zero overflow.
- Thai Docs at 360 px rendered its H1 at 49.6 px / 99 px total height with zero
  overflow.

## Interaction evidence

- Homepage Before / After control changed from `before=true, after=false,
  data-state=before` to `before=false, after=true, data-state=after`; the After panel
  became visible and the Before panel became hidden.
- Thai Docs mobile menu opened, exposed its navigation, and closed again.
- The observed interaction runs produced no console errors or warnings.

## Finding and repair

- The first 360 px matrix found 15 px of horizontal overflow on Tracefield. The
  source was the long `experiment.` word in the mobile CTA heading, whose scroll
  width exceeded its content box.
- A 360 px CTA-specific size and overflow-wrap rule removed the overflow; the final
  matrix passed all 44 combinations.

## Limits

- A browser zoom shortcut was attempted, but the connected environment did not
  change CSS viewport width or device scale. Real 200% browser zoom remains
  unverified and is not claimed as passed.
- Scenario 20 was added but has not yet been run in fresh independent agent sessions;
  model behavior remains nondeterministic.
- No production deployment or external-user validation was performed.
