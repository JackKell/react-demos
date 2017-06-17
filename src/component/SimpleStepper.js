import React from 'react';
import PropTypes from 'prop-types';
import {Stepper, Step, StepButton} from 'material-ui';
import toTitleCase from 'to-title-case';
import camelize from 'camelcase';
import decamelize from 'decamelize';
import {Link} from 'react-router-dom'

const SimpleStepper = (props) => {
    const getSteps = () => {
        return props.steps.map((step) => {
            return (
                <Step key={step}>
                    <StepButton onClick={() => props.handleClick(props.steps.indexOf(step))}>
                        <Link to>{toTitleCase(step)}</Link>
                    </StepButton>
                </Step>
            );
        })
    };

    return(
        <Stepper linear={false} activeStep={props.stepIndex} orientation={props.orientation}>
            {getSteps()}
        </Stepper>
    );
};

SimpleStepper.proptypes = {
    steps: PropTypes.array.isRequired,
    stepIndex: PropTypes.number.isRequired,
    handleStepClick: PropTypes.func.isRequired,
    orientation: PropTypes.string,

};

SimpleStepper.defaultProps = {
    orientation: "vertical",
};

export default SimpleStepper;