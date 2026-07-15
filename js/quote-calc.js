// Evergreen Insurance — provided quote-calculation snippet.
// Capstone learners: WIRE THIS UP, don't rewrite it.
// You may adjust the values in `ratePerThousand` to match the project sponsor's
// rate decision, but do not change the function shape.

var ratePerThousand = {
  auto: 1.2,
  home: 0.9,
  renters: 0.4,
  condo: 0.7,
};

function calculatePremium(coverageType, coverageAmount) {
  var rate = ratePerThousand[coverageType] || 1.0;
  var thousands = coverageAmount / 1000;
  return Math.round(rate * thousands);
}