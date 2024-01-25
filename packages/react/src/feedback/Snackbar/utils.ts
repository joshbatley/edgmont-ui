import { IntercardinalPoints } from '../../types';

export const createId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const getPosition = (position: IntercardinalPoints) => {
  switch (position) {
    case 'NE':
      return `
      top: 0;
      right: 0;
      flex-direction: column;
      `;
    case 'NW':
      return `
      top: 0;
      left: 0;
      flex-direction: column;
      `;
    case 'SE':
      return `
      right: 0;
      bottom: 0;
      flex-direction: column-reverse;
      `;
    case 'SW':
      return `
        left: 0;
        bottom: 0;
        flex-direction: column-reverse;
      `;
  }
};
