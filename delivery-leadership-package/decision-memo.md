# Decision Memo — Testimonials Section Handling During Legal Hold

**Date:** July 14, 2026
**Author:** Shadd Schutte
**Decision area:** Day 2 scope tradeoff — balancing legal compliance, Marketing's new request, and delivery timeline

## Context

Legal informed us that the three drafted customer testimonials cannot ship until signed release forms are obtained, an estimated two-week process. At the same time, Marketing requested a "Compare Plans" navigation link by Thursday to support an A/B test. Our delivery objective — assembled, themed, responsive, wired, and merged — remains unchanged, so we need to decide how to handle the testimonials gap without derailing the rest of the sprint.

## Options considered

1. **Option A — Delete testimonials entirely and revisit later.** Pros: Cleanest code, no hidden content. Cons: Loses work already done; re-integration later requires re-assembly and testing, increasing future effort and risk of errors.

2. **Option B — Leave testimonials visible with a disclaimer banner.** Pros: Content stays on the page, looks complete. Cons: Violates Legal's directive — we cannot display unapproved testimonials regardless of disclaimers. Creates compliance risk.

3. **Option C — Comment out testimonials in code and display a "Coming Soon" placeholder.** Pros: Fully compliant with Legal; preserves the original work for quick re-activation; page still looks intentional to users; minimal effort to reverse. Cons: Page has slightly less content in the interim.

## Recommendation

Option C — Comment out the testimonials and replace with a "Coming Soon — Direct testimonies from our clients" placeholder. This is already implemented in today's build. The "Compare Plans" nav link can be accommodated by Thursday with a simple `<li>` addition (under 30 minutes of work), requiring no deferral of Day 3 script wiring.

## Why

We stay compliant with Legal's hold while keeping the customer experience clean and professional. Visitors see a polished placeholder rather than a broken layout or missing section, which protects brand trust during the approval window.

## What would change my mind

If Legal confirms signed release forms are obtained before our merge deadline, I would immediately uncomment the testimonials section and remove the placeholder — no rebuild required, just a quick code change and visual verification in Live Server.
