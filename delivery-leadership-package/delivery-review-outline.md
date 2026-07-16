# Delivery Review — Evergreen Quote

> Copy to `delivery-leadership-package/delivery-review-outline.md`. Five slides OR one page. Target: 5 minutes spoken, then 3 minutes of questions.

---

## Slide 1 — Delivery goal & did we hit it?

- **Goal (one sentence):** By Thursday EOD, an assembled, themed, responsive Evergreen Quote app with the wired quote calculator is merged to main via reviewed PR with a green CI run.
- **Hit?** ☑ Yes  ☐ Partially  ☐ No
- **Why:** All five "Done" criteria were met on schedule — the page is themed and responsive, `calculatePremium()` returns real numbers for all four coverage types, the CI run on the merge commit is green, the PR was reviewed and merged with the branch deleted, and the full `delivery-leadership-package/` is committed to the repo.

---

## Slide 2 — What shipped

- **Screenshot:** https://github.com/Shadd1972/evergreen-quote-delivery
- **Merged PR:** https://github.com/Shadd1972/evergreen-quote-delivery/pull/8 
- **Green CI run:** _https://github.com/Shadd1972/evergreen-quote-delivery/actions/runs/29507401996/job/87651638795?pr=7

**What the final app includes:**
- `index.html` — 5 assembled sections: navbar, hero with brand promise, quote form with coverage type / coverage amount slider / Calculate Premium button / result box, testimonials placeholder (pending legal), and footer
- `css/theme.css` — Evergreen green brand palette layered on Bootstrap 5.3.2; tested responsive at 375px, 768px, and 1280px with no horizontal scroll
- `js/quote-calc.js` — `calculatePremium(coverageType, coverageAmount)` wired to the form; returns live monthly estimates for auto, home, renters, and condo
- `.github/workflows/ci.yml` — runs on every push: HTML validation, required-files smoke check, and JS syntax lint via `node --check`
- `delivery-leadership-package/` — delivery-goal, risk-register, decision-memo, status-update, and this review outline committed to the repo

---

## Slide 3 — Two key decisions

- **Decision 1:** Commented out the testimonials section and shipped a "Coming Soon" placeholder instead of live customer quotes.
  Why it mattered: Legal placed a hold on all three drafted testimonials pending signed customer release forms — an estimated two-week process. Shipping them as written would have created a compliance violation and risked pulling the entire release. Commenting them out took minutes, keeps the work intact for instant re-activation when approvals arrive, and leaves the page looking intentional rather than broken.

- **Decision 2:** Time-boxed the Marketing "Compare Plans" nav link request to 30 minutes maximum, contingent on receiving a destination URL by Wednesday EOD.
  Why it mattered: The request arrived mid-sprint with no destination URL and no acceptance criteria, and threatened to defer the Day 3 quote-calculator wiring — the core deliverable. By setting a firm time-box and a dependency gate (URL by Wednesday EOD), the scope boundary held, the quote calculator shipped on schedule, and the nav request was logged transparently in the risk register as R2 rather than silently absorbed or silently dropped.

---

## Slide 4 — Risks & injects

**Top risk we tracked:**
R3 — `theme.css` conflicts with Bootstrap 5 defaults causing layout or responsiveness issues on mobile viewports (Likelihood: M, Impact: H). Mitigated by testing at 375px, 768px, and 1280px in browser DevTools after every section assembly, and keeping the Bootstrap CDN pinned at 5.3.2. No layout breakage was observed on any breakpoint throughout the sprint. Risk closed.

**Inject #1 (Tue) — Legal hold on customer testimonials:**
Legal informed the team that signed release forms were required before any customer quotes could ship — a process estimated at two weeks. Re-prioritized immediately: selected Option C from the decision memo (comment out testimonials, insert "Coming Soon — Direct testimonies from our clients" placeholder), documented the decision rationale in `decision-memo.md`, and added the approval timeline as R1 in the risk register. No other Day 2 assembly work was disrupted.

**Inject #2 (Wed) — Marketing requests "Compare Plans" nav link by Thursday:**
Marketing requested a new navigation link to support an A/B test, with a Thursday deadline and no destination URL provided. Assessed the request against the delivery goal: Day 3 was committed to wiring the quote-calculator script, and accepting an open-ended nav task without a known destination would create an uncloseable scope item. Decision: time-boxed to 30 minutes maximum, contingent on Marketing supplying the destination URL by end of Wednesday. URL was not confirmed by that gate, so the link was deferred and logged as R2. Go/No-Go call: **GO** — CI was green on `delivery/lead`, all core deliverables were intact, and no blocking risks remained open above threshold.

---

## Slide 5 — What I'd do differently next round

1. **Ask about legal and brand approval gates at kick-off, not after assembly begins.** The testimonials hold was a predictable risk — any customer-facing quote content has a reasonable chance of requiring release forms. A single intake question on Day 1 ("Is any content on this page pending legal or brand approval?") would have moved this from a Tuesday inject into a known constraint planned around from the start.

2. **Require a destination URL and acceptance criteria before any nav or link request enters scope.** The "Compare Plans" request was accepted into the risk register without its primary dependency (the destination URL), which meant it could never be executed. A tighter intake rule — no scope item enters the register without a URL, acceptance criteria, and a named owner — would prevent partially-specified work from consuming planning time and register space.

3. **Run a premium output sanity-check before wiring the form, not after.** The capstone brief explicitly called out placeholder rate values as a known risk (R4). A 5-minute spot-check of `calculatePremium()` across all coverage types at min, mid, and max slider values on Day 3 before wiring the form would have closed R4 earlier in the session and caught any output values that look wrong before they were visible in the browser.

---

## Q&A prep — likely questions

**"Why didn't you ship the testimonials?"**
Legal placed a hold on all three customer quotes pending signed release forms — a two-week process. Shipping them would have been a compliance violation. The commented-out code and "Coming Soon" placeholder are already in the repo; once Legal confirms the releases are signed, it's a single code change and a new commit — no rebuild required. The decision is documented in `decision-memo.md`.

**"Why didn't you complete the 'Compare Plans' nav link Marketing asked for?"**
The request arrived without a destination URL, which meant it could not be executed. We set a dependency gate: URL confirmed by Wednesday EOD, 30-minute time-box. The URL was not supplied in time, so the link was deferred and logged in the risk register as R2. The core deliverable — the wired quote calculator — shipped on schedule. If Marketing provides the URL, the change is a single `<li>` addition and takes under 30 minutes.

**"If you ran this week again with three engineers, what's the first thing you'd ask them?"**
Who owns the legal and compliance relationship for any content on this page? That one question on Day 1 surfaces the testimonials constraint before it becomes an inject, and it gives the team a named escalation path if a similar hold appears mid-sprint.

**"How do you know the CI run is a meaningful gate and not just a formality?"**
The workflow runs three substantive checks: HTML validation via `html-validate`, a smoke check that confirms all three required files are present (`index.html`, `css/theme.css`, `js/quote-calc.js`), and a syntax check on the JavaScript via `node --check`. A red run on any of those would have blocked the merge. The CI result is evidence the page is structurally valid and all required assets are present — not a rubber stamp.
