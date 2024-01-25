export type StepContext = {
  noOfItems: number;
  activeStep: number;
  color: ColorsLegacy;
  direction: Direction;
  alternativeLabel?: boolean;
};

type Step = {
  idx: number;
};
