import React from 'react';
import {Row, Col} from 'react-grid-system';
import UpDownCounter from '../UpDownCounter';
import PropTypes from 'prop-types';

const CombatStatAssigner = (props) => {
    const speedEvasion = Math.floor(props.character.stats.speed / 5);
    const physicalEvasion = Math.floor(props.character.stats.defense / 5);
    const specialEvasion = Math.floor(props.character.stats.specialDefense / 5);
    const hitPoints = props.character.level * 2 + (props.character.stats.hp * 3) + 10;
    const actionPoints = Math.floor(props.character.level / 5) + 5;
    const overlandSpeed = Math.floor((props.character.skills.athletics + props.character.skills.acrobatics) / 2) + 3;
    const swimSpeed = Math.floor(overlandSpeed / 2);
    const power = 0;
    const highJump = 0;
    const longJump = Math.floor(props.character.skills.acrobatics / 2);
    const throwRange = 4 + props.character.skills.athletics;
    const size = 0;

    return (
        <div>
            <Row>
                <Col sm={12}>
                    <h3>Assign Combat Stats</h3>
                </Col>
                <Col sm={12}>
                    <h3>Level: {props.character.level}</h3>
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
                    <h4>Speed Evasion: {speedEvasion}</h4>
                    <h4>Physical Evasion: {physicalEvasion}</h4>
                    <h4>Special Evasion: {specialEvasion}</h4>
                    <h4>Hit Points: {hitPoints}</h4>
                    <h4>Action Points: {actionPoints}</h4>
                    <h4>Overland: {overlandSpeed}</h4>
                    <h4>Swim speed: {swimSpeed}</h4>
                    <h4>Power: I did not want to write this one yet</h4>
                    <h4>High Jump: I did not want to write this one yet</h4>
                    <h4>Long Jump: {longJump}</h4>
                    <h4>Size: I did not want to write this yet</h4>
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
