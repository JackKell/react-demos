import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Col} from 'react-grid-system';
import {RaisedButton, Step, StepButton, Stepper} from 'material-ui';
import {Paper} from 'material-ui';
import CombatStatAssigner from '../component/CombatStatAssigner';
import CharacterBackgroundMaker from '../component/CharacterBackgroundMaker';
import CharacterInfoInput from '../component/CharacterInfoInput';
import toTitleCase from 'to-title-case';
import camelize from 'camelcase';
import decamelize from 'decamelize';
import {connect} from "react-redux";
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
    getSteps = () => {
        return this.props.steps.map((step) => {
            const stepIndex = this.props.steps.indexOf(step);
            const stepKey = camelize(step);
            const stepText = toTitleCase(step);
            return (
                <Step key={stepKey}>
                    <StepButton onClick={() => this.handleSetStep(stepIndex)}>
                        {stepText}
                    </StepButton>
                </Step>
            );
        });
    };

    handleSetStep = (step) => {
        this.props.handleSetStep(step);
        this.updateRoute(step);
    };

    handleChangeStep = (delta) => {
        this.props.handleChangeStep(delta);
        this.updateRoute(this.props.stepIndex + delta);
    };

    updateRoute = (step) => {
        const currentStep = this.props.steps[step];
        const stepLink = decamelize(camelize(currentStep), "-");
        this.props.history.push(this.props.match.url + "/" + stepLink);
    };

    render() {
        return (
            <div className="charactercreator">
                <Paper style={titlePaperStyle}><h1>Character Creator</h1></Paper>
                <Col sm={4}>
                    <Paper style={stepperPaperStyle}>
                        <Stepper linear={false} activeStep={this.props.stepIndex} orientation={"vertical"}>
                            {this.getSteps()}
                        </Stepper>
                    </Paper>
                </Col>
                <Col sm={8}>
                    <Paper style={contentPaperStyle}>
                        <div style={{minHeight: "600px"}}>
                            <RaisedButton
                                label={"Back"}
                                disabled={this.props.stepIndex === 0}
                                onTouchTap={() => this.handleChangeStep(-1)}/>
                            <RaisedButton
                                label={"Next"}
                                disabled={this.props.stepIndex === this.props.steps.length - 1}
                                onTouchTap={() => this.handleChangeStep(1)}/>

                            <Switch>
                                <Route exact path={this.props.match.url + "/"} render={() => {return (
                                    <CharacterInfoInput
                                        character={this.props.character}
                                        onChange={(trait, value) => this.props.handleSetTrait(trait, value)}
                                    />);}}
                                />
                                <Route path={this.props.match.url + "/character-information"} render={() => {return (
                                    <CharacterInfoInput
                                        character={this.props.character}
                                        onChange={(trait, value) => this.props.handleSetTrait(trait, value)}
                                    />);}}/>
                                <Route path={this.props.match.url + "/choose-skills"} render={() => {return (
                                    <CharacterBackgroundMaker
                                        handleChange={(buff, skill, value) => this.props.handleSetBackgroundBuff(buff, skill, value)}
                                        character={this.props.character}/>);}}/>
                                <Route path={this.props.match.url + "/choose-edges"} render={() => {return (
                                    <div>
                                        <h3>Choose Edges</h3>
                                        <p>Coming soon</p>
                                    </div>);}}/>
                                <Route path={this.props.match.url + "/choose-features"} render={() => {return (
                                    <div>
                                        <h3>Choose Features</h3>
                                        <p>Coming soon</p>
                                    </div>);}}/>
                                <Route path={this.props.match.url + "/assign-combat-stats"} render={() => {return (
                                    <CombatStatAssigner
                                        character={this.props.character}
                                        handleClick={(stat, delta) => this.props.handleChangeStat(stat, delta)}/>);}}/>
                                <Route path={this.props.match.url + "/create-basic-descriptions"} render={() => {return (
                                    <div>
                                        <h3>Create Basic Description</h3>
                                        <p>coming soon</p>
                                    </div>);}}/>
                                <Route path={this.props.match.url + "/choose-a-starter"} render={() => {return (
                                    <div>
                                        <h3>Choose A Starter</h3>
                                        <p>coming soon</p>
                                    </div>);}}/>
                                <Route path={this.props.match.url + "/choose-staring-items"} render={() => {return (
                                    <div>
                                        <h3>Choose Starting Items</h3>
                                        <p>coming soon</p>
                                    </div>);}}/>
                            </Switch>
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
        handleSetSkill: (skill, rank) => {
            dispatch(setSkill(skill, rank));
        },
        handleChangeSkill: (skill, delta) => {
            dispatch(changeSkill(skill, delta));
        },
        handleSetStat: (stat, value) => {
            dispatch(setStat(stat, value));
        },
        handleChangeStat: (stat, delta) => {
            dispatch(changeStat(stat, delta));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreator);