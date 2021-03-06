import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'react-grid-system';
import {SelectField, TextField, MenuItem} from 'material-ui';

const CharacterInfoInput = (props) =>  {
    return (
        <div>
            <Col sm={12}>
                <h3>Character Information</h3>
            </Col>
            <Col xs={12} sm={12} md={6}>
                <TextField
                    floatingLabelText="Name"
                    value={props.character.name}
                    onChange={(event) => props.onChange("name", event.target.value)}/>
                <TextField
                    floatingLabelText="Height"
                    value={props.character.height}
                    onChange={(event) => props.onChange("height", event.target.value)}/>
                <TextField
                    floatingLabelText="Description"
                    value={props.character.description}
                    multiLine={true}
                    onChange={(event) => props.onChange("description", event.target.value)}/>
            </Col>
            <Col xs={12} sm={12} md={6}>
                <TextField
                    floatingLabelText="Age"
                    value={props.character.age}
                    onChange={(event) => props.onChange("age", event.target.value)}/>
                <TextField
                    floatingLabelText="Weight"
                    value={props.character.weight}
                    onChange={(event) => props.onChange("weight", event.target.value)}/>
                <SelectField
                    value={props.character.gender}
                    floatingLabelText={"Gender"}
                    onChange={(event, index, value) => props.onChange("gender", value)}>
                    <MenuItem value={"male"} primaryText="Male"/>
                    <MenuItem value={"female"} primaryText="Female"/>
                    <MenuItem value={"none"} primaryText="None"/>
                </SelectField>
            </Col>
        </div>
    );
};

//noinspection JSUnresolvedVariable
CharacterInfoInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired,
};

export default CharacterInfoInput;