type StepContext = {
  noOfItems: number;
  activeStep: number;
  color: Colors;
  direction: Direction;
  alternativeLabel?: boolean;
};

type Step = {
  idx: number;
};
