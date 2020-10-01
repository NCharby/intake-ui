import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Step,
    StepLabel,
    Button
} from '../components/index.js'



import Typography from '@material-ui/core/Typography';


function getSteps() {
  return ['Contact Info', 'Add Badge Details', 'Edit Badge Photo', 'Select Meal Options'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    case 3:
      return 'Case 3';
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper(props) {
    const {step, setStep} = props
    const steps = getSteps();


    const handleNext = () => {
        setStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div>
            <Stepper activeStep={step}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <div>
                {step === steps.length ? (
                <div>
                    <Typography>
                    All steps completed - you&apos;re finished
                    </Typography>
                </div>
                ) : (
                <div>
                    <Typography>{getStepContent(step)}</Typography>
                    <div>
                    <Button disabled={step === 0} onClick={handleBack}>
                        Back
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                    >
                        {step === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                    </div>
                </div>
                )}
            </div>
        </div>
  );
}