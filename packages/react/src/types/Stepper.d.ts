export type StepContext = {
  noOfItems: number;
  activeStep: number;
  direction: Direction;
  alternativeLabel?: boolean;
};

type Step = {
  idx: number;
};
