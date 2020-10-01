import React from 'react';
import {
    Paper,
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography
} from '../components/index.js'

import {
    ContactContainer,
    BadgeContainer,
    PhotoContainer
} from '../steps/index.js'


function getSteps() {
  return ['Contact Info', 'Add Badge Details', 'Edit Badge Photo'];
}

function getStepContent(step, data) {
  switch (step) {
    case 0:
      return <ContactContainer data={data}/>;
    case 1:
      return <BadgeContainer data={data}/>;
    case 2:
      return <PhotoContainer data={data}/>;
    default:
      return 'Unknown step';
  }
}

export default function HorizontalLinearStepper(props) {
    const {step, setStep, data} = props
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
                    <Paper square style={{margin: "20px 0", padding: "20px 10px 30px"}}>
                        {getStepContent(step, data)}
                    </Paper>
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