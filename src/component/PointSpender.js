import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import UpDownCounter from './UpDownCounter';
import toTitleCase from 'to-title-case';

class PointSpender extends Component {
    constructor() {
        super();
        this.state = {
            points: 20,
            skills: {
                strength: 0,
                dexterity: 0,
                intelligence: 0,
                health: 0,
            },
            minStat: -5,
        };
    }

    handleClick = (valueToChange, delta) => {
        if (this.state.points - delta >= 0) {
            if (this.state.skills[valueToChange] + delta >= this.state.minStat) {
                this.setState({
                    ...this.state,
                    points: this.state.points - delta,
                    skills: {
                        ...this.state.skills,
                        [valueToChange]: this.state.skills[valueToChange] + delta,
                    },
                });
            }
        }
    };

    getUpDownCounterList = () => {
        return Object.keys(this.state.skills).map((skill) => {
            return (
                <div key={skill}>
                    <Col sm={6}>
                        <UpDownCounter
                            name={toTitleCase(skill)}
                            value={this.state.skills[skill]}
                            handleUpClick={() => this.handleClick(skill, 1)}
                            handleDownClick={() => this.handleClick(skill, -1)}/>
                    </Col>
                </div>
            );
        })
    };

    render() {
        return (
            <div className="pointspender">
                <Row>
                    <h1>Points To Spend: {this.state.points}</h1>
                </Row>
                <Row>
                    {this.getUpDownCounterList()}
                </Row>
            </div>
        );
    }
}

export default PointSpender;
