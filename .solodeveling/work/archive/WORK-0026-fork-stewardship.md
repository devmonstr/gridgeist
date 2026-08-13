---
solodeveling_schema: 1
---

# WORK-0026: Clarify maintained-fork stewardship

- **Status:** Completed
- **Class:** Small
- **Opened:** 2026-08-13
- **Operator:** Codex, acting on the repository owner's instruction
- **Authority:** The user requested that the GitHub About and README present the
  project as their maintained fork while retaining professional and visible upstream
  attribution. Local documentation and the GitHub About fields for
  `devmonstr/gridgeist` are in scope. Commit, push, release tagging, marketplace
  publication, and deployment are not authorized.

## Goal

Make devmonstr's stewardship of the fork unmistakable without removing Miler's
original authorship, rewriting upstream release history, or presenting upstream
evidence as fork-created work.

## Completed

1. Added matching English and Thai maintained-fork sections with maintainer,
   original author, upstream, fork, and license references.
2. Added direct fork installation and clone commands while preserving the stable
   upstream Codex marketplace path until the fork has its own remote release tag.
3. Added `NOTICE.md` as a concise provenance and non-endorsement record.
4. Updated contribution and license wording without changing the upstream MIT
   license or copyright notice.
5. Updated the live GitHub About description to identify the repository as a
   maintained fork by devmonstr and removed the unlabeled upstream homepage URL.

## Evidence

- `.solodeveling/evidence/EVIDENCE-0028-fork-stewardship.md`

## Completion

- **Completed:** 2026-08-13
- GitHub About is live. README and NOTICE changes remain local and uncommitted.
