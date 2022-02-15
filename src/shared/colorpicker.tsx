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

export const applyColor = (color: ColorsAndShades, weight: ColorWeights = 'medium', prefix: ColorPrefix = 'text') => {
  if (color === 'white') {
    return `${prefix}-white`;
  }
  if (color === 'black') {
    return `${prefix}-gray-900`;
  }
  return `${prefix}-${color}-${getWeight(weight)}`;
};
