import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function DotsMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const { onChange } = props;

  function handleNext() {
    setActiveStep(prevActiveStep => {
      let step = prevActiveStep + 1;
      onChange(null, step);
      return step;
    });
  }

  function handleBack() {
    setActiveStep(prevActiveStep => {
      let step = prevActiveStep - 1;
      onChange(null, step);
      return step;
    });
  }

  useEffect(() => {
    setActiveStep(props.stepValue);
  }, [props.stepValue]);

  return (
    <MobileStepper
      variant="text"
      steps={6}
      position="static"
      activeStep={activeStep}
      className={classes.root}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
