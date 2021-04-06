export const bounds = {
  underweight: {
    min: null,
    max: 18.49,
  },
  normal: {
    min: 18.5,
    max: 24.99,
  },
  overweight: {
    min: 25,
    max: null,
  },
};

/**
 *
 * @param {Number} height (centimeters)
 * @param {Number} weight (kilograms)
 * @returns {Number}
 */
export const calculateOverweight = (height, weight) => {
  if (!Number(height) || !Number(weight)) return 0;

  const upperWeight = calculateWeight(height, bounds.normal.max);

  return weight > upperWeight ? weight - upperWeight : 0;
};

/**
 *
 * @param {Number} height (centimeres)
 * @param {Number} bmi
 * @returns {Number}
 */
export const calculateWeight = (height, bmi) => bmi * Math.pow(height / 100, 2);
