export const createId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const getPosition = (pos: IntercardinalPoints) => {
  switch (pos) {
    case 'NW':
      return 'left-0 top-0 flex-col';
    case 'NE':
      return 'right-0 top-0 flex-col';
    case 'SW':
      return 'left-0 bottom-0 flex-col-reverse space-y-reverse';
    case 'SE':
      return 'right-0 bottom-0 flex-col-reverse space-y-reverse';
  }
};
