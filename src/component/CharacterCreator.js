import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Row, Col} from 'react-grid-system';
import {RaisedButton, Step, StepButton, Stepper} from 'material-ui';
import {Paper} from 'material-ui';
import CombatStatAssigner from './CombatStatAssigner';
import CharacterBackgroundMaker from './CharacterBackgroundMaker';
import CharacterInfoInput from './CharacterInfoInput';
import toTitleCase from 'to-title-case';
import camelize from 'camelcase';
import decamelize from 'decamelize';
import PointSpender from "./PointSpender";

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
    constructor(props) {
        super(props);
        this.state = {
            stepIndex: 0,
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
            stepIndex: this.state.stepIndex + delta
        });
        this.props.history.push(this.props.match.url + "/" + decamelize(camelize(this.state.steps[(this.state.stepIndex)]), "-"));
    };

    handleNext = () => {
        this.setState({
            ...this.state,
            stepIndex: this.state.stepIndex + 1
        });
        this.props.history.push(this.props.match.url + "/" + decamelize(camelize(this.state.steps[(this.state.stepIndex)]), "-"));
    };

    handlePrev = () => {
        this.setState({
            ...this.state,
            stepIndex: this.state.stepIndex - 1
        });
        this.props.history.push(this.props.match.url + "/" + decamelize(camelize(this.state.steps[(this.state.stepIndex)]), "-"));
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

    handleStepClick = (step, location) => {
        this.setState({
            ...this.state,
            stepIndex: this.state.steps.indexOf(step),
        });
        this.props.history.push(location);
    };

    getSteps = () => {
        return this.state.steps.map((step) => {
            const stepKey = camelize(step);
            const stepLink = decamelize(camelize(step), "-");
            const stepText = toTitleCase(step);
            return (
                <Step key={stepKey}>
                    <StepButton onClick={() => this.handleStepClick(step, this.props.match.url + "/" + stepLink)}>
                        {stepText}
                    </StepButton>
                </Step>
            );
        });
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
                            <Stepper linear={false} activeStep={this.state.stepIndex} orientation={"vertical"}>
                                {this.getSteps()}
                            </Stepper>
                        </Paper>
                    </Col>
                    <Col sm={8}>
                        <Row>
                            <Paper style={contentPaperStyle}>
                                <div style={{height: "550px"}}>
                                    <Switch>
                                        <Route exact path={this.props.match.url + "/"} component={() => {return (
                                            <CharacterInfoInput
                                                character={this.state.character}
                                                onChange={(trait, value) => this.handleCharacterTraitChange(trait, value)}
                                            />);}}/>
                                        <Route path={this.props.match.url + "/character-information"} component={() => {return (
                                            <CharacterInfoInput
                                                character={this.state.character}
                                                onChange={(trait, value) => this.handleCharacterTraitChange(trait, value)}
                                            />);}}/>
                                        <Route path={this.props.match.url + "/choose-skills"} component={() => {return (
                                            <CharacterBackgroundMaker
                                                handleChange={(buff, skill, newValue) => this.handleCharacterBackgroundChange(buff, skill, newValue)}
                                                character={this.state.character}/>);}}/>
                                        <Route path={this.props.match.url + "/choose-edges"} component={() => {return (
                                            <div>
                                                <Row>
                                                    <Col sm={12}>
                                                        <h3>Choose Edges</h3>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <p>Coming soon</p>
                                                    </Col>
                                                </Row>
                                            </div>);}}/>
                                        <Route path={this.props.match.url + "/choose-features"} component={() => {return (
                                            <div>
                                                <Row>
                                                    <Col sm={12}>
                                                        <h3>Choose Features</h3>
                                                    </Col>
                                                    <Col sm={12}>
                                                        <p>Coming soon</p>
                                                    </Col>
                                                </Row>
                                            </div>);}}/>
                                        <Route path={this.props.match.url + "/assign-combat-stats"} component={() => {return (
                                            <CombatStatAssigner
                                                character={this.state.character}
                                                handleClick={(stat, delta) => this.handleCharacterStatChange(stat, delta)}/>);}}/>
                                        <Route path={this.props.match.url + "/create-basic-descriptions"} component={() => {return (
                                            <div>
                                                <h3>Create Basic Description</h3>
                                                coming soon
                                            </div>);}}/>
                                        <Route path={this.props.match.url + "/choose-a-starter"} component={() => {return (
                                            <div>
                                                <h3>Choose A Starter</h3>
                                                coming soon
                                            </div>);}}/>
                                        <Route path={this.props.match.url + "/choose-staring-items"} component={() => {return (
                                            <div>
                                                <h3>Choose Starting Items</h3>
                                                coming soon
                                            </div>);}}/>
                                        <Redirect to={this.props.match.url}/>
                                    </Switch>
                                </div>
                                <h4>Warning these buttons are broken currently (T_T)</h4>
                                <RaisedButton
                                    label={"Back"}
                                    disabled={this.state.stepIndex === 0}/>
                                <RaisedButton
                                    label={"Next"}
                                    disabled={this.state.stepIndex === this.state.steps.length - 1}/>
                            </Paper>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CharacterCreator;