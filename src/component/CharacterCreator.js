import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {TextField, SelectField, MenuItem} from 'material-ui';
import {Stepper, Step, StepButton, StepLabel, StepContent} from 'material-ui';
import {RadioButtonGroup, RadioButton} from 'material-ui';
import {FlatButton, RaisedButton} from 'material-ui';
import {Paper} from 'material-ui';

const titlePaperStyle = {
    padding: "2px 20px 2px",
    margin: "1rem",
};

const stepperPaperStyle = {
    marginRight: "1rem",
    height: "600px",
};

const contentPaperStyle = {
    padding: "10px",
};

class CharacterCreator extends Component {
    constructor() {
        super();
        this.state = {
            stepIndex: 0,
            skills: [
                "Acrobatics",
                "Athletics",
                "Combat",
                "Intimidate",
                "Stealth",
                "Survival",
                "General Edu",
                "Occult Edu",
                "Pokemon Edu",
                "Technology Edu",
                "Guile",
                "Perception",
                "Charm",
                "Command",
                "Focus",
                "Intuition",
            ],
            character: {
                name: null,
                age: null,
                gender: null,
                height: null,
                weight: null,
                adeptSkill: null,
                noviceSkill: null,
                patheticSkill1: null,
                patheticSkill2: null,
                patheticSkill3: null,
                description: null,
            },
        };
    }


    skillsMenuItemList = () => {
        return this.state.skills.map((skill) => {
            if (skill !== this.state.character.adeptSkill &&
                skill !== this.state.character.noviceSkill &&
                skill !== this.state.character.patheticSkill1 &&
                skill !== this.state.character.patheticSkill2 &&
                skill !== this.state.character.patheticSkill3) {
                return (<MenuItem value={skill} primaryText={skill} />);
            } else {
                return (<MenuItem value={skill} primaryText={skill} disabled={true} />);
            }
        });
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        if (stepIndex < 4) {
            const newState = {
                ...this.state,
                stepIndex: this.state.stepIndex + 1
            };
            this.setState(newState);
        }
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    handleCharacterTraitChange = (trait, newValue) => {
        this.setState({
            ...this.state,
            character: {
                ...this.state.character,
                [trait]: newValue,
            }
        })
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
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
                            <SelectField
                                value={this.state.character.gender}
                                floatingLabelText={"Gender"}
                                onChange={(event, index, value) => {this.handleCharacterTraitChange("gender", value)}}>
                                <MenuItem value={"male"} primaryText="Male"/>
                                <MenuItem value={"female"} primaryText="Female"/>
                            </SelectField>
                        </Col>
                        <Col sm={6}>
                            <TextField
                                floatingLabelText="Height"
                                value={this.state.character.height}
                                onChange={(event, index, value) => {
                                    this.handleCharacterTraitChange("height", event.target.value)
                                }}
                            />
                        </Col>
                        <Col sm={6}>
                            <TextField
                                floatingLabelText="Weight"
                                value={this.state.character.weight}
                                onChange={(event, index, value) => {
                                    this.handleCharacterTraitChange("weight", event.target.value)
                                }}
                            />
                        </Col>
                        <Col sm={6}>
                            <TextField
                                floatingLabelText="Description"
                                value={this.state.character.description}
                                multiLine={true}
                                onChange={(event, index, value) => {
                                    this.handleCharacterTraitChange("description", event.target.value)
                                }}
                            />
                        </Col>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <h3>Choose Skills</h3>
                        <SelectField
                            value={this.state.character.adeptSkill}
                            floatingLabelText={"Adept Skill Upgrade"}
                            onChange={(event, index, value) => {this.handleCharacterTraitChange("adeptSkill", value)}}
                        >
                            {this.skillsMenuItemList()}
                        </SelectField>
                        <SelectField
                            value={this.state.character.noviceSkill}
                            floatingLabelText={"Novice Skill Upgrade"}
                            onChange={(event, index, value) => {this.handleCharacterTraitChange("noviceSkill", value)}}
                        >
                            {this.skillsMenuItemList()}
                        </SelectField>
                        <SelectField
                            value={this.state.character.patheticSkill1}
                            floatingLabelText={"Pathetic Skill 1 Downgrade"}
                            onChange={(event, index, value) => {this.handleCharacterTraitChange("patheticSkill1", value)}}
                        >
                            {this.skillsMenuItemList()}
                        </SelectField>
                        <SelectField
                            value={this.state.character.patheticSkill2}
                            floatingLabelText={"Pathetic Skill 2 Downgrade"}
                            onChange={(event, index, value) => {this.handleCharacterTraitChange("patheticSkill2", value)}}
                        >
                            {this.skillsMenuItemList()}
                        </SelectField>
                        <SelectField
                            value={this.state.character.patheticSkill3}
                            floatingLabelText={"Pathetic Skill 3 Downgrade"}
                            onChange={(event, index, value) => {this.handleCharacterTraitChange("patheticSkill3", value)}}
                        >
                            {this.skillsMenuItemList()}
                        </SelectField>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <h3>Choose Edges</h3>
                    </div>);
            case 3:
                return (
                    <div>
                        <h3>Stage 4</h3>
                    </div>);
            case 4:
                return (
                    <div>
                        <h3>Stage 5</h3>
                    </div>);
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
                                        Step 4
                                    </StepButton>
                                </Step>
                                <Step>
                                    <StepButton onClick={() => this.setState({stepIndex: 4})}>
                                        Step 5
                                    </StepButton>
                                </Step>
                            </Stepper>
                        </Paper>
                    </Col>
                    <Col sm={8}>
                        <Paper style={contentPaperStyle}>
                            <div style={{height: "600px"}}>
                                {this.getStepContent(stepIndex)}
                            </div>
                            <div>
                                <RaisedButton
                                    label={"Back"}
                                    disabled={stepIndex === 0}
                                    onTouchTap={this.handlePrev}/>
                                <RaisedButton
                                    label={"Next"}
                                    disabled={stepIndex === 4}
                                    onTouchTap={this.handleNext}/>
                            </div>
                        </Paper>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CharacterCreator;