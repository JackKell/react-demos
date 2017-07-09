import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import UpDownCounter from '../component/UpDownCounter';
import toTitleCase from 'to-title-case';
import {connect} from "react-redux";
import {changeSkill} from '../action/PointSpender.action';

class PointSpender extends Component {
    validateSkillChange = (skill, delta) => {
        const pointsAvailable = this.props.points - delta >= 0;
        if (pointsAvailable) {
            const newSkillValue = this.props.skills[skill] + delta;
            if (newSkillValue >= this.props.minStat && newSkillValue <= this.props.maxStat) {
                this.props.handleClick(skill, delta)
            }
        }
    };

    getUpDownCounters = () => {
        return Object.keys(this.props.skills).map((skill) => {
            return (
                <div key={skill}>
                    <Col sm={6}>
                        <UpDownCounter
                            name={toTitleCase(skill)}
                            value={this.props.skills[skill]}
                            handleUpClick={() => this.validateSkillChange(skill, 1)}
                            handleDownClick={() => this.validateSkillChange(skill, -1)}/>
                    </Col>
                </div>
            );
        })
    };

    render() {
        return (
            <div className="pointspender">
                <Row>
                    <h1>Points To Spend: {this.props.points}</h1>
                </Row>
                <Row>
                    {this.getUpDownCounters()}
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        points: state.pointSpender.points,
        skills: state.pointSpender.skills,
        minStat: state.pointSpender.minStat,
        maxStat: state.pointSpender.maxStat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (skill, delta) => {
            dispatch(changeSkill(skill, delta))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PointSpender);
