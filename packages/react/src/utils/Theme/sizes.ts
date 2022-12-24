export const sizes = [
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
  '2.75rem',
  '3rem',
  '3.5rem',
  '4rem',
  '5rem',
  '6rem',
  '7rem',
  '8rem',
  '9rem',
  '10rem',
  '11rem',
  '12rem',
  '13rem',
  '14rem',
  '15rem',
  '16rem',
  '18rem',
  '20rem',
  '24rem',
];

export const spaceYBetween = sizes.map((s) => (
  `> :not(:first-child) {
      margin-top: ${s};
    }`));

export const spaceXBetween = sizes.map((s) => (
  `> :not(:last-child) {
      margin-right: calc(${s}/2);
    }`));


