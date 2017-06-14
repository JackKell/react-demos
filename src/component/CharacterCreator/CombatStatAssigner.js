import React from 'react';
import {Row, Col} from 'react-grid-system';
import UpDownCounter from '../UpDownCounter';
import PropTypes from 'prop-types';
import Utility from '../utility';
import decamelize from 'decamelize';
import toTitleCase from 'to-title-case';

const CombatStatAssigner = (props) => {
    const getUpDownCounters = () => {
        return Object.keys(props.character.stats).map((stat) => {
            const statText = toTitleCase(decamelize(stat, " "));
            return (
                <Col key={stat} sm={6}>
                    <UpDownCounter
                        handleDownClick={() => props.handleClick(stat, -1)}
                        handleUpClick={() => props.handleClick(stat, 1)}
                        name={statText}
                        value={props.character.stats[stat]}/>
                </Col>
            );
        });
    };

    return (
        <div>
            <Row>
                <Col sm={12}>
                    <h3>Assign Combat Stats</h3>
                </Col>
                <Col sm={12}>
                    <h3>Stat Points: {props.character.statPoints}</h3>
                </Col>
                {getUpDownCounters()}
                <Col sm={12}>
                    <hr/>
                    <h4>Speed Evasion: {Utility.getSpeedEvasion(props.character.stats.speed)}</h4>
                    <h4>Physical Evasion: {Utility.getPhysicalEvasion(props.character.stats.defense)}</h4>
                    <h4>Special Evasion: {Utility.getSpecialEvasion(props.character.stats.specialDefense)}</h4>
                    <hr/>
                    <h4>Level: {props.character.level}</h4>
                    <h4>Hit Points: {Utility.getHitPoints(props.character.level, props.character.stats.hp)}</h4>
                    <h4>Action Points: {Utility.getActionPoints(props.character.level)}</h4>
                    <hr/>
                    <h4>Overland: {Utility.getOverlandSpeed(props.character.skills.athletics, props.character.skills.acrobatics)}</h4>
                    <h4>Swim speed: {Utility.getSwimSpeed(props.character.skills.athletics, props.character.skills.acrobatics)}</h4>
                    <h4>High Jump: {Utility.getHighJump(props.character.skills.acrobatics, props.character.skills.combat)}</h4>
                    <h4>Long Jump: {Utility.getLongJump(props.character.skills.acrobatics)}</h4>
                    <hr/>
                    <h4>Size: {Utility.getSize(props.character.weight)}</h4>
                    <h4>Weight Class: {Utility.getWeightClass(props.character.weight)}</h4>
                    <h4>Power: {Utility.getPower(props.character.skills.athletics, props.character.skills.combat)}</h4>
                    <h4>Throw Range: {Utility.getThrowRange(props.character.skills.athletics)}</h4>
                    <hr/>
                </Col>
            </Row>
        </div>
    );
};

CombatStatAssigner.propTypes = {
    character: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default CombatStatAssigner;
