const intercardinalPointsSelect = {
  options: ['NW', 'NE', 'SE', 'SW'],
  control: { type: 'select' },
};

const directionOptions = ['top', 'right', 'bottom', 'left']
  .map((k) => [k + '-start', k, k + '-end'])
  .flat();

const directionSelect = {
  options: directionOptions,
  control: { type: 'select' },
};

export {
  intercardinalPointsSelect,
  directionSelect,
};
