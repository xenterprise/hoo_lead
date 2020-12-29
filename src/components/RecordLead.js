import React from 'react';
// import { useStyles } from '../styles/Classes'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import UserInfoA from './UserInfoA';
import Grid from '@material-ui/core/Grid';
import PackageInfoA from './PackageInfoA';
import ServicesInfoA from './ServicesInfoA';
import DevicesInfoA from './DevicesInfoA';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

function getSteps() {
    return ['User details', 'Property Info', 'Services', 'Devices'];
}

function getStepContent(step) {

    switch (step) {
        case 0:
            return <UserInfoA />;
        case 1:
            return <PackageInfoA/>;
        case 2:
            return <ServicesInfoA/>;
        case 3:
            return <DevicesInfoA/>;
        default:
            return 'Unknown step';
    }
}

function RecordLead(props) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const totalSteps = () => {
        return getSteps().length;
    };

    const isStepOptional = (step) => {
        return step === 1;
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <br />
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                ) : (
                        <div>

                            <div>
                                <Grid container justify="flex-end" item xs={12}>


                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Grid>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <Grid container justify="flex-end" item xs={12}>


                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Grid>
                            </div>
                        </div>
                    )}
            </div>

        </div>
    );
}

export default RecordLead;