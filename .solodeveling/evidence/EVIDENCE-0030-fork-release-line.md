---
solodeveling_schema: 1
id: EVIDENCE-0030
work_id: WORK-0028
date: 2026-08-13
---

# Fork release-line evidence

## Version and provenance

- Fork candidate: `1.3.0-devmonstr.1`
- Upstream baseline: `1.2.0`
- Fork repository: `https://github.com/devmonstr/gridgeist`
- Original author and upstream remain credited in README, NOTICE, LICENSE,
  changelog history, and the inherited case-study section.

## Rendered verification

Browser path: connected Brave browser through the Browser plugin against the local
static server at `http://127.0.0.1:8765/`.

- Northline After at 1440×900: `scrollWidth=1440`, `innerWidth=1440`.
- Northline After at 360×800: `scrollWidth=345`, `innerWidth=360`.
- English Docs at 360×800: exact version and devmonstr install command visible;
  `scrollWidth=345`, `innerWidth=360`.
- Thai Docs at 360×800: exact version and devmonstr install command visible;
  `scrollWidth=345`, `innerWidth=360`.
- Clicking “View the network” changed the URL to `#network`.
- No relevant console warnings or errors were recorded.
- The README After image was regenerated at 1440×900 from the updated showcase.

## Boundaries

- The browser checks were local, not production checks.
- The matching fork tag has not been created or pushed.
- The live marketplace smoke test is intentionally deferred until the tag exists.
- Scenario 20 has not yet run in fresh isolated agent sessions.
