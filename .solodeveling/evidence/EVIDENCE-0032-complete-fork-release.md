---
solodeveling_schema: 1
id: EVIDENCE-0032
work_id: WORK-0030
date: 2026-08-14
---

# Completed fork release evidence

## Tag and release

- Annotated tag: `v1.3.0-devmonstr.1`
- Local and remote tag target: `06bc642c66ff09ad5d7be80c3b9ab2b3f877a0e1`
- GitHub prerelease: `https://github.com/devmonstr/gridgeist/releases/tag/v1.3.0-devmonstr.1`
- The release notes identify devmonstr as the maintainer of the fork and credit
  Miler / ohmiler and upstream v1.2.0.

## Automated verification

- Tag validation and clean install/update smoke run `31693197545`: success.
- Production-closure validation and smoke run `31761978974`: success at
  `e23c529effc2f8a01dcbcc540c2d941bcef474f7`.
- GitHub Pages run `31761980283`: success at the same commit.
- Local `validate_release.py --release-version 1.3.0-devmonstr.1`: passed.
- All site JavaScript syntax checks and `git diff --check`: passed.

## Production verification

- `https://devmonstr.github.io/gridgeist/` and the Docs, Thai Docs, Updates,
  Northline showcase, OG image, robots, and sitemap endpoints returned HTTP 200.
- Homepage canonical points to the devmonstr site and displays `GG—1.3 RC`.
- English and Thai Docs display exact version `1.3.0-devmonstr.1` and verified
  distribution labels.
- Updates links to the published prerelease.
- Homepage Before/After interaction reached the `after` / `SYSTEMIC` state.
- The Northline `View the network` interaction reached `#network` and exposed
  the live topology region.
- No horizontal overflow was observed at 1440×900 or 360×800.
- No warning or error originated from the production application. One captured
  warning/error belonged to a browser extension and was outside application
  scope.
- Repository About homepage was set to the production site.

## Boundaries

- `v1.3.0-devmonstr.1` remains a prerelease by design, not a stable release.
- Scenario 20 has not been rerun in isolated fresh-agent sessions.
- Real 200% browser zoom remains unverified.

