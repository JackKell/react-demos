import React, {Component} from "react";
import { Row, Col } from 'react-bootstrap';
import UpDownCounter from "./UpDownCounter"

class PointSpender extends Component {
    constructor() {
        super();
        this.state = {
            points: 20,
            strength: 0,
            dexterity: 0,
            intelligence: 0,
            health: 0,
            minStat: -5,
        };
    }

    handleClick = (valueToChange, delta) => {
        if (this.state.points - delta >= 0) {
            let newState = this.state;
            if (newState[valueToChange] + delta >= this.state.minStat) {
                newState[valueToChange] = newState[valueToChange] + delta;
                newState["points"] = this.state.points - delta;
                this.setState(newState);
            }
        }
    };

    render() {
        return (
            <Row>
                <Col sm={12}>
                    <h1>Points To Spend: {this.state.points}</h1>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        name="Strength"
                        value={this.state.strength}
                        handleUpClick={() => this.handleClick("strength", 1)}
                        handleDownClick={() => this.handleClick("strength", -1)}/>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        name="Dexterity"
                        value={this.state.dexterity}
                        handleUpClick={() => this.handleClick("dexterity", 1)}
                        handleDownClick={() => this.handleClick("dexterity", -1)}/>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        name="Intelligence"
                        value={this.state.intelligence}
                        handleUpClick={() => this.handleClick("intelligence", 1)}
                        handleDownClick={() => this.handleClick("intelligence", -1)}/>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        name="Health"
                        value={this.state.health}
                        handleUpClick={() => this.handleClick("health", 1)}
                        handleDownClick={() => this.handleClick("health", -1)}/>
                </Col>
            </Row>
        );
    }
}

export default PointSpender;
