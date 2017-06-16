import React, {Component} from 'react';
import {Row, Col} from 'react-grid-system';
import {Stepper, Step, StepButton} from 'material-ui';
import {RaisedButton} from 'material-ui';
import {Paper} from 'material-ui';
import CombatStatAssigner from './CombatStatAssigner';
import CharacterBackgroundMaker from './CharacterBackgroundMaker';
import CharacterInfoInput from './CharacterInfoInput';
import SimpleStepper from './SimpleStepper';

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
    padding: "10px",
};

class CharacterCreator extends Component {
    constructor() {
        super();
        this.state = {
            stepIndex: 4,
            steps: [
                "Character Information",
                "Choose Skills",
                "Choose Edges",
                "Choose Features",
                "Assign Combat Stats",
                "Create Basic Descriptions",
                "Choose A Starter",
                "Choose Staring Items",
            ],
            baseStats: {
                hp: 10,
                attack: 5,
                defense: 5,
                specialAttack: 5,
                specialDefense: 5,
                speed: 5,
            },
            maxStateChange: 5,
            character: {
                level: 1,
                statPoints: 10,
                name: "",
                age: "",
                gender: "",
                height: "",
                weight: "",
                background: {
                    adeptSkill: "",
                    noviceSkill: "",
                    patheticSkill1: "",
                    patheticSkill2: "",
                    patheticSkill3: "",
                },
                description: "",
                skills: {
                    acrobatics: 2,
                    athletics: 2,
                    combat: 2,
                    intimidate: 2,
                    stealth: 2,
                    survival: 2,
                    generalEducation: 2,
                    occultEducation: 2,
                    pokemonEducation: 2,
                    technologyEducation: 2,
                    guile: 2,
                    perception: 2,
                    charm: 2,
                    command: 2,
                    focus: 2,
                    intuition: 2,
                },
                features: [],
                edges: [],
                stats: {
                    hp: 10,
                    attack: 5,
                    defense: 5,
                    specialAttack: 5,
                    specialDefense: 5,
                    speed: 5,
                }
            },
        };
    }

    handleSetStep = (value) => {
        this.setState({
            ...this.state,
            stepIndex: this.state.stepIndex + 1
        });
    };

    handleChangeStep = (delta) => {
        this.setState({
            ...this.state,
            stepIndex: this.state.stepIndex + 1
        });
    };

    handleNext = () => {
        this.setState({
            ...this.state,
            stepIndex: this.state.stepIndex + 1
        });
    };

    handlePrev = () => {
        this.setState({
            ...this.state,
            stepIndex: this.state.stepIndex - 1
        });
    };

    handleCharacterTraitChange = (trait, newValue) => {
        this.setState({
            ...this.state,
            character: {
                ...this.state.character,
                [trait]: newValue,
            }
        });
    };

    handleCharacterBackgroundChange = (buff, skill, newValue) => {
        let previouslyBuffedSkill = this.state.character.background[buff];
        previouslyBuffedSkill = previouslyBuffedSkill !== "" ? previouslyBuffedSkill : false;

        this.setState({
            ...this.state,
            character: {
                ...this.state.character,
                background: {
                    ...this.state.character.background,
                    [buff]: skill,
                },
                skills: {
                    ...this.state.character.skills,
                    [skill]: newValue,
                    [previouslyBuffedSkill]: 2,
                }
            }
        });
    };

    handleCharacterStatChange = (stat, delta) => {
        const baseStatValue = this.state.baseStats[stat];
        const currentStatValue = this.state.character.stats[stat];
        const newStatValue = currentStatValue + delta;
        if (newStatValue >= baseStatValue &&
            newStatValue <= baseStatValue + this.state.maxStateChange &&
            this.state.character.statPoints - delta >= 0) {
            this.setState({
                ...this.state,
                character: {
                    ...this.state.character,
                    stats: {
                        ...this.state.character.stats,
                        [stat]: newStatValue,
                    },
                    statPoints: this.state.character.statPoints - delta,
                }
            });
        }
    };

    // TODO: Make each step's content into a component
    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <CharacterInfoInput
                        character={this.state.character}
                        onChange={(trait, value) => this.handleCharacterTraitChange(trait, value)}/>
                );
            case 1:
                return (
                    <CharacterBackgroundMaker
                        handleChange={(buff, skill, newValue) => this.handleCharacterBackgroundChange(buff, skill, newValue)}
                        character={this.state.character}/>
                );
            case 2:
                return (
                    <div>
                        <Row>
                            <Col sm={12}>
                                <h3>Choose Edges</h3>
                            </Col>
                            <Col sm={12}>
                                <p>Coming soon</p>
                            </Col>
                        </Row>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <Row>
                            <Col sm={12}>
                                <h3>Choose Features</h3>
                            </Col>
                            <Col sm={12}>
                                <p>Coming soon</p>
                            </Col>
                        </Row>
                    </div>
                );
            case 4:
                return (
                    <CombatStatAssigner
                        character={this.state.character}
                        handleClick={(stat, delta) => this.handleCharacterStatChange(stat, delta)}/>
                );
            case 5:
                return (
                    <div>
                        <h3>Create Basic Description</h3>
                    </div>
                );
            case 6:
                return (
                    <div>
                        <h3>Choose A Starter</h3>
                    </div>
                );
            case 7:
                return (
                    <div>
                        <h3>Choose Starting Items</h3>
                    </div>
                );
            default:
                return (
                  <h1>I don't know how you reached this default case in the character creator but you need to fix this</h1>
                );
        }
    }

    render() {
        return (
            <div className="charactercreator">
                <Row>
                    <Paper style={titlePaperStyle}><h1>Character Creator</h1></Paper>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Paper style={stepperPaperStyle}>
                            <SimpleStepper
                                steps= {this.state.steps}
                                handleClick={(stepIndex) => this.setState({stepIndex: stepIndex})}
                                stepIndex={this.state.stepIndex}/>
                        </Paper>
                    </Col>
                    <Col sm={8}>
                        <Row>
                            <Paper style={contentPaperStyle}>
                                <div style={{height: "950px"}}>
                                    {this.getStepContent(this.state.stepIndex)}
                                </div>
                                <RaisedButton
                                    label={"Back"}
                                    disabled={this.state.stepIndex === 0}
                                    onTouchTap={this.handlePrev}/>
                                <RaisedButton
                                    label={"Next"}
                                    disabled={this.state.stepIndex === this.state.steps.length - 1}
                                    onTouchTap={this.handleNext}/>
                            </Paper>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CharacterCreator;