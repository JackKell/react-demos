import React from 'react';
import {Row, Col} from 'react-grid-system';
import PropTypes from 'prop-types';
import SkillBuffSelectField from './SkillBuffSelectField';

const CharacterBackgroundMaker = (props) => {
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <h3>Choose Skills</h3>
                </Col>
                <Col sm={6}>
                    <SkillBuffSelectField
                        character={props.character}
                        handleChange={props.handleChange}
                        buff={"adeptSkill"}
                        buffAmount={4}/>
                </Col>
                <Col sm={6}>
                    <SkillBuffSelectField
                        character={props.character}
                        handleChange={props.handleChange}
                        buff={"noviceSkill"}
                        buffAmount={3}/>
                </Col>
                <Col sm={6}>
                    <SkillBuffSelectField
                        character={props.character}
                        handleChange={props.handleChange}
                        buff={"patheticSkill1"}
                        buffAmount={1}/>
                </Col>
                <Col sm={6}>
                    <SkillBuffSelectField
                        character={props.character}
                        handleChange={props.handleChange}
                        buff={"patheticSkill2"}
                        buffAmount={1}/>
                </Col>
                <Col sm={6}>
                    <SkillBuffSelectField
                        character={props.character}
                        handleChange={props.handleChange}
                        buff={"patheticSkill3"}
                        buffAmount={1}/>
                </Col>
            </Row>
        </div>
    );
};

CharacterBackgroundMaker.propTypes = {
    handleChange: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired,
};

export default CharacterBackgroundMaker;