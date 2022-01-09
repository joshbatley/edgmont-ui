export type StepContext = {
  noOfItems: number;
  activeStep: number;
  color: Colors;
  direction: Direction;
  alternativeLabel?: boolean;
};

export type Step = {
  idx: number;
};
