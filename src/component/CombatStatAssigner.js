import React from 'react';
import {Row, Col} from 'react-grid-system';
import UpDownCounter from './UpDownCounter';
import PropTypes from 'prop-types';
import decamelize from 'decamelize';
import toTitleCase from 'to-title-case';
import CharacterStatViewer from './CharacterStatViewer';

const CombatStatAssigner = (props) => {
    const getUpDownCounters = () => {
        return Object.keys(props.character.stats).map((stat) => {
            return (
                <Col key={stat} sm={6}>
                    <UpDownCounter
                        handleDownClick={() => props.handleClick(stat, -1)}
                        handleUpClick={() => props.handleClick(stat, 1)}
                        name={toTitleCase(decamelize(stat, " "))}
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
                    <CharacterStatViewer character={props.character}/>
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
