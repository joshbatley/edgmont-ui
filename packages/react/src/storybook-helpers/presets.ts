type Option<T> = {
  options: T,
  control: any;
};

const colorSelectWithWhite: Option<ColorsAndWhite[]> = {
  options: ['primary', 'gray', 'green', 'lime', 'red', 'yellow', 'blue', 'purple', 'orange', 'pink', 'white'],
  control: { type: 'select' },
};

const colorSelect: Option<Colors[]> = {
  options: ['primary', 'gray', 'green', 'lime', 'red', 'yellow', 'blue', 'purple', 'orange', 'pink'],
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
