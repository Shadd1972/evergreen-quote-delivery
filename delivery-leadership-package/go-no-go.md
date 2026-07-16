# Go / No-Go — Merge Decision

> Copy to `delivery-leadership-package/go-no-go.md`. Make this call **from** the CI result, not in spite of it.

**Date / time:** Wednesday, Day 3 — ~14:00 (post-Inject #2)
**Decision:** ☐ GO   ☒ NO-GO   ☐ GO WITH CONDITIONS

---

## CI evidence

- Latest run on `delivery/lead`: **red** · Run #47: "Hotfix: adjust renters rate" — failed after 17s
- Workflow file: `.github/workflows/ci.yml`
- What the workflow actually checked:
  - ✓ Check out the code
  - ✓ Set up Node
  - ✓ Validate HTML (html-validate)
  - ✗ **Smoke-check required files** — `assets/rates/renters.json` is missing
  - ✓ Lint JS syntax

---

## What "GO" would mean

- Merge `delivery/lead` → `main`, squash, delete branch.
- Tag the merge commit `week-1`.

## What "NO-GO" would mean

- Hold the merge until: `assets/rates/renters.json` is present, committed, and the required-files check passes green **and** the pricing anomaly (renters quote of $8,950/mo for $25K coverage) is confirmed root-caused and corrected.
- Owner of that condition: Engineering lead / developer responsible for the "Hotfix: adjust renters rate" commit.
- Re-evaluate at: First thing Thursday morning (Day 4) — if CI is green and the pricing issue is resolved, we proceed with the PR and merge.

---

## Context: Inject #2 Summary

Two issues surfaced simultaneously around 9:30 AM Tuesday and are likely connected:

1. **Pricing anomaly:** A customer received a quote of $8,950/month for $25,000 of renters coverage — an implausible rate that Customer Success can reproduce. This points to a corrupted or missing rate configuration driving the `calculatePremium()` function.

2. **CI failure on `main`:** Run #47 (titled "Hotfix: adjust renters rate") has been red for 32+ minutes. The required-files check reports `assets/rates/renters.json` is missing. The commit message itself names renters rates — strongly suggesting the hotfix either deleted, moved, or failed to include the rate file it was meant to fix.

**The two issues are almost certainly the same root cause:** the renters rate file is missing or broken, which simultaneously causes the bad customer quote and fails the CI file check.

**Additional context:** Legal has approved the Testimonials section, which has been unhidden and is now live. This is a clean GO on that front and requires no further hold.

---

## My call

**NO-GO.** The CI is red on `main` for a reason directly tied to an active customer-facing pricing defect — a missing rate file that is producing a quote an order of magnitude off. Merging in this state would push a broken pricing config into production and compound a problem we already know about. The testimonials approval is good news and does not change this call. The flip condition is straightforward: engineering confirms `assets/rates/renters.json` is restored with correct values, CI goes green end-to-end, and someone spot-checks the renters quote in the app before we merge.

**Stretch Commentary** The use of GitHub copilot to add the additional testimonials was very successful. My one concern is that essentially we asked AI to create a fake testimonial that could be taken as fact to current/future customers. The output was inline with the others in tone and context but I did not include them they they are in the index.html they ar ejust commented out.
