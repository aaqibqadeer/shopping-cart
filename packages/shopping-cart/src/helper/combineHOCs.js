export const combineHOCs = (...rest) =>
  rest.reduce((accumulator, currentValue) => (...args) => accumulator(currentValue(...args)));