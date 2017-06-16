import React from 'react';
import PropTypes from 'prop-types';
import toTitleCase from 'to-title-case';
import decamelize from 'decamelize';
import {MenuItem, SelectField} from 'material-ui';

const SkillBuffSelectField = (props) => {
    const skillsMenuItemList = () => {
        return Object.keys(props.character.skills).map((skill) => {
            const skillText = toTitleCase(decamelize(skill, " "));
            const isDisabled = Object.values(props.character.background).includes(skill);
            return (<MenuItem key={skill} value={skill} primaryText={skillText} disabled={isDisabled} />);
        });
    };

    return (
        <SelectField
            value={props.character.background[props.buff]}
            floatingLabelText={toTitleCase(props.buff)}
            onChange={(event, index, value) => {props.handleChange(props.buff, value, props.buffAmount)}}>
            {skillsMenuItemList()}
        </SelectField>
    );
};

SkillBuffSelectField.propTypes = {
    character: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    buff: PropTypes.string.isRequired,
    buffAmount: PropTypes.number.isRequired,
};

export default SkillBuffSelectField;