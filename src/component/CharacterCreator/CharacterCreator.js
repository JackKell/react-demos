import React, {Component} from 'react';
import {Row, Col} from 'react-grid-system';
import {TextField, SelectField, MenuItem} from 'material-ui';
import {Stepper, Step, StepButton} from 'material-ui';
import {RaisedButton} from 'material-ui';
import {Paper} from 'material-ui';
import CombatStatAssigner from './CombatStatAssigner';
import BackgroundMaker from './BackgroundMaker';

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
                    <div>
                        <Row>
                            <Col sm={12}>
                                <h3>Character Information</h3>
                            </Col>
                            <Col sm={6}>
                                <TextField
                                    floatingLabelText="Name"
                                    value={this.state.character.name}
                                    onChange={(event) => {
                                        this.handleCharacterTraitChange("name", event.target.value)
                                    }}
                                />
                            </Col>
                            <Col sm={6}>
                                <TextField
                                    floatingLabelText="Age"
                                    value={this.state.character.age}
                                    onChange={(event) => {
                                        this.handleCharacterTraitChange("age", event.target.value)
                                    }}
                                />
                            </Col>

                            <Col sm={6}>
                                <TextField
                                    floatingLabelText="Height"
                                    value={this.state.character.height}
                                    onChange={(event) => {
                                        this.handleCharacterTraitChange("height", event.target.value)
                                    }}
                                />
                            </Col>
                            <Col sm={6}>
                                <TextField
                                    floatingLabelText="Weight"
                                    value={this.state.character.weight}
                                    onChange={(event) => {
                                        this.handleCharacterTraitChange("weight", event.target.value)
                                    }}
                                />
                            </Col>
                            <Col sm={6}>
                                <TextField
                                    floatingLabelText="Description"
                                    value={this.state.character.description}
                                    multiLine={true}
                                    onChange={(event) => {
                                        this.handleCharacterTraitChange("description", event.target.value)
                                    }}
                                />
                            </Col>
                            <Col sm={6}>
                                <SelectField
                                    value={this.state.character.gender}
                                    floatingLabelText={"Gender"}
                                    onChange={(event, index, value) => {this.handleCharacterTraitChange("gender", value)}}>
                                    <MenuItem value={"male"} primaryText="Male"/>
                                    <MenuItem value={"female"} primaryText="Female"/>
                                </SelectField>
                            </Col>
                        </Row>
                    </div>
                );
            case 1:
                return (
                    <BackgroundMaker
                        handleSelect={(buff, skill, newValue) => this.handleCharacterBackgroundChange(buff, skill, newValue)}
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
        const {stepIndex} = this.state;

        return (
            <div className="charactercreator">
                <Row>
                    <Paper style={titlePaperStyle}><h1>Character Creator</h1></Paper>
                </Row>
                <Row>
                    <Col sm={4}>
                        <Paper style={stepperPaperStyle}>
                            <Stepper linear={false} activeStep={stepIndex} orientation={"vertical"}>
                                <Step>
                                    <StepButton onClick={() => this.setState({stepIndex: 0})}>
                                        Character Information
                                    </StepButton>
                                </Step>
                                <Step>
                                    <StepButton onClick={() => this.setState({stepIndex: 1})}>
                                        Choose Skills
                                    </StepButton>
                                </Step>
                                <Step>
                                    <StepButton onClick={() => this.setState({stepIndex: 2})}>
                                        Choose Edges
                                    </StepButton>
                                </Step>
                                <Step>
                                    <StepButton onClick={() => this.setState({stepIndex: 3})}>
                                        Choose Features
                                    </StepButton>
                                </Step>
                                <Step>
                                    <StepButton onClick={() => this.setState({stepIndex: 4})}>
                                        Assign Combat Stats
                                    </StepButton>
                                </Step>
                                <Step>
                                    <StepButton onClick={() => this.setState({stepIndex: 5})}>
                                        Create Basic Descriptions
                                    </StepButton>
                                </Step>
                                <Step>
                                    <StepButton onClick={() => this.setState({stepIndex: 6})}>
                                        Choose A Starter
                                    </StepButton>
                                </Step>
                                <Step>
                                    <StepButton onClick={() => this.setState({stepIndex: 7})}>
                                        Choose Staring Items
                                    </StepButton>
                                </Step>
                            </Stepper>
                        </Paper>
                    </Col>
                    <Col sm={8}>
                        <Row>
                            <Paper style={contentPaperStyle}>
                                <div style={{height: "600px"}}>
                                    {this.getStepContent(stepIndex)}
                                </div>
                                <RaisedButton
                                    label={"Back"}
                                    disabled={stepIndex === 0}
                                    onTouchTap={this.handlePrev}/>
                                <RaisedButton
                                    label={"Next"}
                                    disabled={stepIndex === 7}
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