const getWeight = (weight: ColorWeights) => {
  switch (weight) {
    case 'dark':
      return '700';
    case 'medium':
      return '600';
    case 'light':
      return '300';
    default:
      return weight;
  }
};

export const applyColor = (color: ColorsAndWhite, weight: ColorWeights = 'medium', prefix: ColorPrefix = 'text') => {
  if (color === 'white') {
    return `${prefix}-white`;
  }
  return `${prefix}-${color}-${getWeight(weight)}`;
};
