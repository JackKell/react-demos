import React from 'react';
import PropTypes from 'prop-types';
import Utility from '../utility';
import { Col } from "react-grid-system";

const CharacterStatViewer = (props) => {
    return (
        <div>
            <Col md={6}>
                <h4>Speed Evasion: {Utility.getSpeedEvasion(props.character.stats.speed)}</h4>
                <h4>Physical Evasion: {Utility.getPhysicalEvasion(props.character.stats.defense)}</h4>
                <h4>Special Evasion: {Utility.getSpecialEvasion(props.character.stats.specialDefense)}</h4>
                <h4>Level: {props.character.level}</h4>
                <h4>Hit Points: {Utility.getHitPoints(props.character.level, props.character.stats.hp)}</h4>
                <h4>Action Points: {Utility.getActionPoints(props.character.level)}</h4>
            </Col>
            <Col md={6}>
                <h4>Overland: {Utility.getOverlandSpeed(props.character.skills.athletics, props.character.skills.acrobatics)}</h4>
                <h4>Swim speed: {Utility.getSwimSpeed(props.character.skills.athletics, props.character.skills.acrobatics)}</h4>
                <h4>High Jump: {Utility.getHighJump(props.character.skills.acrobatics, props.character.skills.combat)}</h4>
                <h4>Long Jump: {Utility.getLongJump(props.character.skills.acrobatics)}</h4>
                <h4>Size: {Utility.getSize(props.character.weight)}</h4>
                <h4>Weight Class: {Utility.getWeightClass(props.character.weight)}</h4>
                <h4>Power: {Utility.getPower(props.character.skills.athletics, props.character.skills.combat)}</h4>
                <h4>Throw Range: {Utility.getThrowRange(props.character.skills.athletics)}</h4>
            </Col>
        </div>
    );
};

//noinspection JSUnresolvedVariable
CharacterStatViewer.prototype = {
    character: PropTypes.object.isRequired,
};

export default CharacterStatViewer;