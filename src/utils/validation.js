const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  value === "";

const isPercent = (value) => {
  if (isEmpty(value)) return false;

  const num = Number(value);

  return !isNaN(num) && num >= 0 && num <= 100;
};

const isPositive = (value) => {
  if (isEmpty(value)) return false;

  return Number(value) > 0;
};

export function validateStep(step, data) {

  const errors = {};

  //---------------------------------------
  // Step 1
  //---------------------------------------

  if (step === 0) {

    const p = data.personal;

    if (!p.gender)
      errors.gender = "Please select gender.";

    if (!p.date_of_birth)
      errors.date_of_birth = "Date of birth is required.";

    if (!p.district)
      errors.district = "Please select district.";

    if (!p.category)
      errors.category = "Please select category.";

  }

  //---------------------------------------
  // Step 2
  //---------------------------------------

  if (step === 1) {

    const a = data.academic;

    if (!a.board)
      errors.board = "Please select board.";

    if (!isPositive(a.pcm_total))
      errors.pcm_total = "Enter valid PCM total.";

    if (!isPercent(a.pcm_percentage))
      errors.pcm_percentage =
        "PCM percentage must be between 0 and 100.";

    if (
      a.jee_percentile &&
      !isPercent(a.jee_percentile)
    ) {
      errors.jee_percentile =
        "Invalid percentile.";
    }

    if (
      a.jee_rank &&
      !isPositive(a.jee_rank)
    ) {
      errors.jee_rank =
        "Invalid rank.";
    }

  }

  //---------------------------------------
  // Step 3
  //---------------------------------------

  if (step === 2) {

    const c = data.mhtcet;

    if (!isPercent(c.physics_percentile))
      errors.physics_percentile =
        "Invalid percentile.";

    if (!isPercent(c.chemistry_percentile))
      errors.chemistry_percentile =
        "Invalid percentile.";

    if (!isPercent(c.mathematics_percentile))
      errors.mathematics_percentile =
        "Invalid percentile.";

    if (!isPercent(c.overall_percentile))
      errors.overall_percentile =
        "Invalid percentile.";

    if (!isPositive(c.general_rank))
      errors.general_rank =
        "Enter valid rank.";

    if (
      c.category_rank &&
      !isPositive(c.category_rank)
    ) {
      errors.category_rank =
        "Invalid category rank.";
    }

  }

  //---------------------------------------
  // Step 4
  //---------------------------------------

  if (step === 3) {

    const p = data.preferences;

    if (
      !p.preferred_branches ||
      p.preferred_branches.length === 0
    ) {
      errors.preferred_branches =
        "Select at least one branch.";
    }

    if (
      !p.preferred_districts ||
      p.preferred_districts.length === 0
    ) {
      errors.preferred_districts =
        "Select at least one district.";
    }

  }

  return errors;

}