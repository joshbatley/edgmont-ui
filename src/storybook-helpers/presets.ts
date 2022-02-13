const colorSelectWithWhite = {
  options: ['gray', 'green', 'red', 'yellow', 'blue', 'purple', 'teal', 'pink'],
  control: { type: 'select' },
};

const colorSelect = {
  options: ['primary', 'gray', 'green', 'red', 'yellow', 'blue', 'purple', 'teal', 'pink'],
  control: { type: 'select' },
};

const intercardinalPointsSelect = {
  options: ['NW', 'NE', 'SE', 'SW'],
  control: { type: 'select' },
};

const sizeSelect = {
  options: ['small', 'medium', 'large'],
  control: { type: 'select' },
};

const severitySelect = {
  options: ['error', 'warning', 'info', 'success'],
  control: { type: 'select' },
};


const directionOptions = ['top', 'right', 'bottom', 'left'].map(k => [k + '-start', k, k + '-end']).flat();

const directionSelect = {
  options: directionOptions,
  control: { type: 'select' },
};

export {
  colorSelectWithWhite,
  colorSelect,
  intercardinalPointsSelect,
  sizeSelect,
  severitySelect,
  directionSelect,
};
