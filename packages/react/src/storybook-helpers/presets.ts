type Option<T> = {
  options: T,
  control: any;
};

const colorSelect: Option<Colors[]> = {
  options: ['primary', 'success', 'info', 'error', 'warning', 'base'],
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
  colorSelect,
  intercardinalPointsSelect,
  sizeSelect,
  severitySelect,
  directionSelect,
};
