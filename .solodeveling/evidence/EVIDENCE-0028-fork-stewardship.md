---
solodeveling_schema: 1
---

# EVIDENCE-0028: Fork stewardship

## Repository identity

- `origin`: `https://github.com/devmonstr/gridgeist.git`
- `upstream`: `https://github.com/ohmiler/gridgeist.git`
- GitHub reports `devmonstr/gridgeist` as a fork of `ohmiler/gridgeist`.
- Local maintainer identity: `devmonstr`.
- The fork origin currently exposes no remote tags; the upstream repository remains
  the valid source for the existing `v1.2.0` marketplace reference.

## Attribution decisions

- `LICENSE` remains unchanged with `Copyright (c) 2026 Miler`.
- English and Thai READMEs identify devmonstr as fork maintainer and Miler / ohmiler
  as original author and upstream.
- Upstream website, examples, releases, case studies, and historical evidence remain
  labeled as upstream material.
- `NOTICE.md` records provenance, same-license modifications, and no implied upstream
  endorsement.

## GitHub About result

- Description: `Maintained fork of Gridgeist by devmonstr — product-native UI
  direction with proportional hierarchy, brand fidelity, and evidence-led
  verification.`
- Homepage URL: empty, replacing the previous unlabeled upstream Pages URL.
- GitHub still reports the repository's fork relationship and upstream parent.

## Checks

| Check | Result |
| --- | --- |
| `python -X utf8 .\scripts\validate_release.py` | Pass |
| English and Thai fork/provenance parity | Pass by source inspection |
| Local README targets: NOTICE, LICENSE, skill, English/Thai evals | Present |
| `git diff --check` | Pass |

## Limits

- README and NOTICE are not visible on GitHub until the user authorizes a commit and
  push.
- The fork does not yet have a versioned release tag or its own stable Codex
  marketplace entry; the README says this explicitly.
