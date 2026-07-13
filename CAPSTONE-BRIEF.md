# Engineering Capstone Brief — Evergreen Insurance Quote

> This brief describes the Evergreen Insurance Quote product an engineering team
> would deliver. You start from a bare *starter* `index.html` and *expand* it
> into this product by assembling the provided pieces — you are **not** authoring
> the code, and the app is **not** pre-built. As Delivery Lead, read this first
> to understand the target, then lead and assemble toward it. Form opinions as
> you read: *what's the user value? what's risky? what would you cut?*

## The product

**Evergreen Insurance Quote** is a single-page web app that lets a prospective
customer get an indicative monthly insurance premium in under a minute, on their
phone, without creating an account.

A visitor picks a coverage type (auto / home / renters), chooses a coverage
amount, and presses **Calculate Premium**. The page shows an estimated monthly
number immediately. That's the whole job: get a believable number in front of a
first-time shopper before they bounce to a competitor.

## Who it's for

A first-time insurance shopper — often a new renter or new homeowner — who was
told they "need insurance" and wants a fast, no-commitment number on their phone.
They are not loyal to a carrier and will leave any site that asks for twelve
fields and an email before showing a price.

## What you'll assemble

The starter gives you a runnable but bare `index.html`. Over the week you expand
it into the product below by dropping in the provided pieces — you assemble them,
you don't author them. The product is intentionally small and built from standard
pieces:

1. **A responsive single page** (`index.html`) assembled from five sections:
   - a header / navigation bar,
   - a hero with the brand promise,
   - a quote form (coverage type, coverage amount, a **Calculate Premium**
     button, and a place to show the result),
   - a testimonials section,
   - a footer.
2. **A brand theme** (`css/theme.css`) layered on top of Bootstrap 5 — Evergreen
   green, clean type, mobile-first. No horizontal scroll at phone width.
3. **A quote calculation function** (`js/quote-calc.js`) — a single
   `calculatePremium(coverageType, coverageAmount)` function that returns a
   monthly number from a simple rate table. It is a **placeholder pricing
   model**, not a real rate engine.
4. **A CI workflow** (`.github/workflows/ci.yml`) — runs on every push: a basic
   HTML check, a required-files check, and a `node --check` syntax check on the
   JavaScript.

## What is explicitly out of scope

- No real rate engine or actuarial pricing — the calculator is a placeholder.
- No customer accounts, saved quotes, or email capture.
- No payment, checkout, or policy purchase.
- No back-end or database — this is a front-end-only page.

## What "good" looks like

- The page loads, themed, on phone and desktop, with no horizontal scroll at
  ~375px wide.
- Submitting the form returns a believable monthly number for auto, home, and
  renters.
- The page is recognizably "Evergreen" — green brand, clear promise.
- The work is on `main` via a reviewed pull request with a green CI run.

## Known risks to watch

- The placeholder rate values can produce numbers that look wrong if they aren't
  sanity-checked.
- The brand theme can fight Bootstrap's defaults on small screens.
- Testimonials need legal sign-off before real customer quotes can ship.

These are exactly the kinds of tradeoffs you will lead this week.
