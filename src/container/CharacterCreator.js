import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Col } from 'react-grid-system';
import { RaisedButton, Step, StepButton, Stepper } from 'material-ui';
import { Paper } from 'material-ui';
import CombatStatAssigner from '../component/CombatStatAssigner';
import CharacterBackgroundMaker from '../component/CharacterBackgroundMaker';
import CharacterInfoInput from '../component/CharacterInfoInput';
import toTitleCase from 'to-title-case';
import camelize from 'camelcase';
import decamelize from 'decamelize';
import { connect } from "react-redux";
import {
    changeSkill, changeStat, changeStep, setBackgroundBuff,
    setSkill, setStat, setStep, setTrait
} from "../action/CharacterCreator.action";

const titlePaperStyle = {
    padding: "10px",
    margin: "2rem",
    display: "flex",
};

const stepperPaperStyle = {
    padding: "10px",
    display: "flex",
    marginRight: "1rem",
};

const contentPaperStyle = {
    padding: "20px",
};

class CharacterCreator extends Component {
    renderSteps = () => {
        return this.props.steps.map((step) => {
            const stepIndex = this.props.steps.indexOf(step);
            const stepKey = camelize(step);
            const stepText = toTitleCase(step);
            return (
                <Step key={stepKey}>
                    <StepButton onClick={() => this.props.handleSetStep(stepIndex)}>
                        {stepText}
                    </StepButton>
                </Step>
            );
        });
    };

    renderStepActions = () => {
        return (
            <div>
                <RaisedButton
                    label={"Back"}
                    disabled={this.props.stepIndex === 0}
                    onTouchTap={() => this.props.handleChangeStep(-1)}/>
                <RaisedButton
                    label={this.props.stepIndex < this.props.steps.length  - 1? "Next": "Finish"}
                    disabled={this.props.stepIndex === this.props.steps.length}
                    onTouchTap={() => this.props.handleChangeStep(1)}/>
            </div>
        );
    };

    renderStepContent = () => {
        switch(this.props.stepIndex) {
            case 0:
                return (
                    <CharacterInfoInput
                        character={this.props.character}
                        onChange={(trait, value) => this.props.handleSetTrait(trait, value)}/>
                );
            case 1:
                return (
                    <CharacterBackgroundMaker
                        handleChange={(buff, skill, value) => this.props.handleSetBackgroundBuff(buff, skill, value)}
                        character={this.props.character}/>
                );
            case 2:
                return (
                    <div>
                        <h3>Choose Edges</h3>
                        <p>Coming soon</p>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h3>Choose Features</h3>
                        <p>Coming soon</p>
                    </div>
                );
            case 4:
                return (
                    <CombatStatAssigner
                        character={this.props.character}
                        handleClick={(stat, delta) => this.props.handleChangeStat(stat, delta)}/>
                );
            case 5:
                return (
                    <div>
                        <h3>Create Basic Description</h3>
                        <p>coming soon</p>
                    </div>
                );
            case 6:
                return (
                    <div>
                        <h3>Choose A Starter</h3>
                        <p>coming soon</p>
                    </div>
                );
            case 7:
                return (
                    <div>
                        <h3>Choose Starting Items</h3>
                        <p>coming soon</p>
                    </div>
                );
            default:
                return (
                    <div>
                        <h3>Finished</h3>
                        <p>coming soon</p>
                    </div>
                );
        }
    };

    render() {
        return (
            <div className="charactercreator">
                <Paper style={titlePaperStyle}>
                    <h1>Character Creator</h1>
                </Paper>
                <Col sm={4}>
                    <Paper style={stepperPaperStyle}>
                        <Stepper linear={false} activeStep={this.props.stepIndex} orientation={"vertical"}>
                            {this.renderSteps()}
                        </Stepper>
                    </Paper>
                </Col>
                <Col sm={8}>
                    <Paper style={contentPaperStyle}>
                        <div style={{minHeight: "600px"}}>
                            {this.renderStepActions()}
                            {this.renderStepContent()}
                        </div>
                    </Paper>
                </Col>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        stepIndex: state.characterCreator.stepIndex,
        steps: state.characterCreator.steps,
        baseStats: state.characterCreator.baseStats,
        maxStateChange: state.characterCreator.maxStateChange,
        character: state.characterCreator.character,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSetTrait: (trait, value) => {
            dispatch(setTrait(trait, value));
        },
        handleSetStep: (step) => {
            dispatch(setStep(step));
        },
        handleChangeStep: (delta) => {
            dispatch(changeStep(delta));
        },
        handleSetBackgroundBuff: (buff, skill, value) => {
            dispatch(setBackgroundBuff(buff, skill, value));
        },
        // handleSetSkill: (skill, rank) => {
        //     dispatch(setSkill(skill, rank));
        // },
        // handleChangeSkill: (skill, delta) => {
        //     dispatch(changeSkill(skill, delta));
        // },
        // handleSetStat: (stat, value) => {
        //     dispatch(setStat(stat, value));
        // },
        handleChangeStat: (stat, delta) => {
            dispatch(changeStat(stat, delta));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreator);