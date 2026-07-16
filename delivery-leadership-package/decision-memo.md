# Decision Memo — Sprint Scope Decisions During Legal Hold

**Date:** July 14, 2026
**Author:** Shadd Schutte
**Decision area:** Day 2 scope tradeoffs — balancing legal compliance, Marketing's new request, and delivery timeline

---

## Decision 1 — Testimonials Section Handling During Legal Hold

### Context

Legal informed us that the three drafted customer testimonials cannot ship until signed release forms are obtained, an estimated two-week process. Our delivery objective — assembled, themed, responsive, wired, and merged — remains unchanged, so we need to decide how to handle the testimonials gap without derailing the rest of the sprint.

### Options considered

1. **Option A — Delete testimonials entirely and revisit later.** Pros: Cleanest code, no hidden content. Cons: Loses work already done; re-integration later requires re-assembly and testing, increasing future effort and risk of errors.

2. **Option B — Leave testimonials visible with a disclaimer banner.** Pros: Content stays on the page, looks complete. Cons: Violates Legal's directive — we cannot display unapproved testimonials regardless of disclaimers. Creates compliance risk.

3. **Option C — Comment out testimonials in code and display a "Coming Soon" placeholder.** Pros: Fully compliant with Legal; preserves the original work for quick re-activation; page still looks intentional to users; minimal effort to reverse. Cons: Page has slightly less content in the interim.

### Recommendation

Option C — Comment out the testimonials and replace with a "Coming Soon — Direct testimonies from our clients" placeholder. This is already implemented in today's build.

### Why

We stay compliant with Legal's hold while keeping the customer experience clean and professional. Visitors see a polished placeholder rather than a broken layout or missing section, which protects brand trust during the approval window. The work is preserved in code and requires only a single uncomment to restore — no rebuild, no re-assembly.

### What would change my mind

If Legal confirms signed release forms are obtained before our merge deadline, I would immediately uncomment the testimonials section and remove the placeholder — no rebuild required, just a quick code change and visual verification in Live Server.

---

## Decision 2 — "Compare Plans" Navigation Link Request from Marketing

### Context

While handling the testimonials legal hold, Marketing submitted a request for a "Compare Plans" navigation link by Thursday to support an A/B test. This arrived mid-sprint with no destination URL and no acceptance criteria provided. Our core Day 3 commitment is wiring the quote-calculator script to the form — the primary functional deliverable. We need to decide whether and how to accommodate the request without displacing that work.

### Options considered

1. **Option A — Accept the request and deliver the nav link by Thursday regardless of other work.** Pros: Satisfies Marketing's stated deadline. Cons: Without a destination URL the link cannot be executed; accepting open-ended scope with a missing dependency creates a register item that cannot be closed and risks consuming time that belongs to Day 3 script wiring.

2. **Option B — Reject the request entirely and defer to a future sprint.** Pros: Protects Day 3 fully; no scope creep. Cons: Abrupt refusal without a clear rationale or re-engagement path may damage the relationship with Marketing and leave them without a process for future mid-sprint requests.

3. **Option C — Accept conditionally with a hard time-box and a dependency gate.** Pros: Acknowledges the request professionally; keeps the door open if Marketing can supply what is needed; limits exposure to 30 minutes maximum; sets a clear decision point. Cons: Requires Marketing to respond quickly (URL by Wednesday EOD), which may not be possible.

### Recommendation

Option C — Accept the "Compare Plans" nav link request conditionally: the change will be made (a single `<li>` addition) only if Marketing provides a confirmed destination URL by end of day Wednesday. The time-box is 30 minutes maximum. If the URL is not supplied by that gate, the request is deferred and logged in the risk register as R2 for the next sprint. Day 3 script wiring proceeds on schedule regardless.

### Why

The change itself is trivial — under 30 minutes if the destination is known. The blocker is the missing URL, not the effort. A conditional acceptance with a clear dependency gate gives Marketing a fair path to get the link into this sprint while protecting the core deliverable. It also creates a documented precedent: scope requests entering mid-sprint require a named owner, a destination, and acceptance criteria before they enter the register.

### What would change my mind

If Marketing supplies a confirmed destination URL by Wednesday EOD, the nav link would be added within the 30-minute time-box and the request would close in this sprint. If the URL arrives after the gate but before the PR merge and the addition can still be verified without risking CI, I would reassess on a case-by-case basis with the sponsor notified.
