import React, { Component } from 'react';
import { Col, Row, Container, Visible } from 'react-grid-system';
import { RaisedButton, Step, StepButton, Stepper } from 'material-ui';
import { Paper } from 'material-ui';
import CombatStatAssigner from '../component/CombatStatAssigner';
import CharacterBackgroundMaker from '../component/CharacterBackgroundMaker';
import CharacterInfoInput from '../component/CharacterInfoInput';
import toTitleCase from 'to-title-case';
import camelize from 'camelcase';
import { connect } from "react-redux";
import {
    changeStat, changeStep, setBackgroundBuff, setStep, setTrait
} from "../action/CharacterCreator.action";

const styles = {
    titlePaper: {
        marginBottom: "20px",
    },
    pageTitle: {
        padding: "0.5em",
    },
    contentPaper: {
        minHeight: "830px",
    },
    content: {
        padding: "20px",
    },
    actionButtonGroup: {
        width: "100%",
        textAlign: "center",
        paddingBottom: "20px",
    },
    actionButton: {
        margin: "5px",
    },
    wrapper: {
        padding: "10px",
    },
    outerWrapper: {
        bottom: 0,
        position: "absolute"
    }
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
                    <Col>
                        <h3>Choose Edges</h3>
                        <p>Coming soon</p>
                    </Col>
                );
            case 3:
                return (
                    <Col>
                        <h3>Choose Features</h3>
                        <p>Coming soon</p>
                    </Col>
                );
            case 4:
                return (
                    <CombatStatAssigner
                        character={this.props.character}
                        handleClick={(stat, delta) => this.props.handleChangeStat(stat, delta)}/>
                );
            case 5:
                return (
                    <Col>
                        <h3>Create Basic Description</h3>
                        <p>coming soon</p>
                    </Col>
                );
            case 6:
                return (
                    <Col>
                        <h3>Choose A Starter</h3>
                        <p>coming soon</p>
                    </Col>
                );
            case 7:
                return (
                    <Col>
                        <h3>Choose Starting Items</h3>
                        <p>coming soon</p>
                    </Col>
                );
            default:
                return (
                    <Col>
                        <h3>Finished</h3>
                        <p>coming soon</p>
                    </Col>
                );
        }
    };

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Paper style={styles.titlePaper}>
                            <h1 style={styles.pageTitle}>Character Creator</h1>
                        </Paper>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Visible lg xl>
                            <Paper>
                                <Stepper linear={false} activeStep={this.props.stepIndex} orientation={"vertical"}>
                                    {this.renderSteps()}
                                </Stepper>
                            </Paper>
                        </Visible>
                    </Col>
                    <Col lg={8}>
                        <Paper style={styles.contentPaper}>
                            <Row>
                                <div style={styles.content}>
                                    {this.renderStepContent()}
                                </div>
                            </Row>
                        </Paper>
                        <div style={styles.wrapper}>
                            <div style={styles.actionButtonGroup}>
                                <RaisedButton
                                    style={styles.actionButton}
                                    label={"Back"}
                                    disabled={this.props.stepIndex === 0}
                                    onTouchTap={() => this.props.handleChangeStep(-1)}/>
                                <RaisedButton
                                    style={styles.actionButton}
                                    label={this.props.stepIndex < this.props.steps.length  - 1? "Next": "Finish"}
                                    disabled={this.props.stepIndex === this.props.steps.length}
                                    onTouchTap={() => this.props.handleChangeStep(1)}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
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
        handleSetStep: (step) => {
            dispatch(setStep(step));
        },
        handleChangeStep: (delta) => {
            dispatch(changeStep(delta));
        },
        handleSetTrait: (trait, value) => {
            dispatch(setTrait(trait, value));
        },
        handleSetBackgroundBuff: (buff, skill, value) => {
            dispatch(setBackgroundBuff(buff, skill, value));
        },
        handleChangeStat: (stat, delta) => {
            dispatch(changeStat(stat, delta));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterCreator);