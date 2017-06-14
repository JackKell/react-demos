import React from 'react';
import {Row, Col} from 'react-grid-system';
import UpDownCounter from '../UpDownCounter';
import PropTypes from 'prop-types';
import Utility from '../utility';

const CombatStatAssigner = (props) => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <h3>Assign Combat Stats</h3>
                </Col>
                <Col sm={12}>
                    <h3>Level: {props.character.level}</h3>
                </Col>
                <Col sm={12}>
                    <h3>Stat Points: {props.character.statPoints}</h3>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        handleDownClick={props.handleHpDown}
                        handleUpClick={props.handleHpUp}
                        name="Hp"
                        value={props.character.stats.hp}/>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        handleDownClick={props.handleAtkDown}
                        handleUpClick={props.handleAtkUp}
                        name="Attack"
                        value={props.character.stats.attack}/>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        handleDownClick={props.handleDefDown}
                        handleUpClick={props.handleDefUp}
                        name="Defense"
                        value={props.character.stats.defense}/>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        handleDownClick={props.handleSpAtkDown}
                        handleUpClick={props.handleSpAtkUp}
                        name="Sp Atk"
                        value={props.character.stats.specialAttack}/>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        handleDownClick={props.handleSpDefDown}
                        handleUpClick={props.handleSpDefUp}
                        name="Sp Def"
                        value={props.character.stats.specialDefense}/>
                </Col>
                <Col sm={6}>
                    <UpDownCounter
                        handleDownClick={props.handleSpeedDown}
                        handleUpClick={props.handleSpeedUp}
                        name="Speed"
                        value={props.character.stats.speed}/>
                </Col>
                <Col sm={12}>
                    <h4>Speed Evasion: {Utility.getSpeedEvasion(props.character.stats.speed)}</h4>
                    <h4>Physical Evasion: {Utility.getPhysicalEvasion(props.character.stats.defense)}</h4>
                    <h4>Special Evasion: {Utility.getSpecialEvasion(props.character.stats.specialDefense)}</h4>
                    <h4>Hit Points: {Utility.getHitPoints(props.character.level, props.character.stats.hp)}</h4>
                    <h4>Action Points: {Utility.getActionPoints(props.character.level)}</h4>
                    <h4>Overland: {Utility.getOverlandSpeed(props.character.skills.athletics, props.character.skills.acrobatics)}</h4>
                    <h4>Swim speed: {Utility.getSwimSpeed(props.character.skills.athletics, props.character.skills.acrobatics)}</h4>
                    <h4>Power: {Utility.getPower(props.character.skills.athletics, props.character.skills.combat)}</h4>
                    <h4>High Jump: {Utility.getHighJump(props.character.skills.acrobatics, props.character.skills.combat)}</h4>
                    <h4>Long Jump: {Utility.getLongJump(props.character.skills.acrobatics)}</h4>
                    <h4>Size: {Utility.getSize(props.character.weight)}</h4>
                    <h4>Weight Class: {Utility.getWeightClass(props.character.weight)}</h4>
                    <h4>Throw Range: {Utility.getThrowRange(props.character.skills.athletics)}</h4>
                </Col>
            </Row>
        </div>
    );
};

CombatStatAssigner.propTypes = {
    character: PropTypes.object.isRequired,
    handleHpUp: PropTypes.func.isRequired,
    handleHpDown: PropTypes.func.isRequired,
    handleAtkUp: PropTypes.func.isRequired,
    handleAtkDown: PropTypes.func.isRequired,
    handleSpeedUp: PropTypes.func.isRequired,
    handleSpeedDown: PropTypes.func.isRequired,
    handleDefUp: PropTypes.func.isRequired,
    handleDefDown: PropTypes.func.isRequired,
    handleSpDefUp: PropTypes.func.isRequired,
    handleSpDefDown: PropTypes.func.isRequired,
    handleSpAtkUp: PropTypes.func.isRequired,
    handleSpAtkDown: PropTypes.func.isRequired,
};

export default CombatStatAssigner;
