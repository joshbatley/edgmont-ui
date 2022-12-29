export const spaces = [
  0,
  '0.25rem',
  '0.5rem',
  '0.75rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.75rem',
  '2rem',
  '2.25rem',
  '2.5rem',
];

export const spaceYBetween = spaces.map((s) => (
  `> :not(:first-child) {
      margin-top: ${s};
    }`));

export const spaceXBetween = spaces.map((s) => (
  `> :not(:last-child) {
      margin-right: calc(${s}/2);
    }`));
