import React, {Component} from 'react';
import {Row, Col} from 'react-grid-system';
import {SelectField, MenuItem} from 'material-ui';
import decamelize from 'decamelize';
import toTitleCase from 'to-title-case';
import PropTypes from 'prop-types';

class BackgroundMaker extends Component {
    skillsMenuItemList = () => {
        return Object.keys(this.props.character.skills).map((skill) => {
            const skillText = toTitleCase(decamelize(skill, " "));
            const isDisabled = Object.values(this.props.character.background).includes(skill);
            return (<MenuItem key={skill} value={skill} primaryText={skillText} disabled={isDisabled} />);
        });
    };

    render() {
        return (
            <div>
                <Row>
                    <Col sm={12}>
                        <h3>Choose Skills</h3>
                    </Col>
                    <Col sm={6}>
                        <SelectField
                            value={this.props.character.background.adeptSkill}
                            floatingLabelText={"Adept Skill Upgrade"}
                            onChange={(event, index, value) => {this.props.handleSelect("adeptSkill", value, 4)}}>
                            {this.skillsMenuItemList()}
                        </SelectField>
                    </Col>
                    <Col sm={6}>
                        <SelectField
                            value={this.props.character.background.noviceSkill}
                            floatingLabelText={"Novice Skill Upgrade"}
                            onChange={(event, index, value) => {this.props.handleSelect("noviceSkill", value, 3)}}>
                            {this.skillsMenuItemList()}
                        </SelectField>
                    </Col>
                    <Col sm={6}>
                        <SelectField
                            value={this.props.character.background.patheticSkill1}
                            floatingLabelText={"Pathetic Skill 1 Downgrade"}
                            onChange={(event, index, value) => {this.props.handleSelect("patheticSkill1", value, 1)}}>
                            {this.skillsMenuItemList()}
                        </SelectField>
                    </Col>
                    <Col sm={6}>
                        <SelectField
                            value={this.props.character.background.patheticSkill2}
                            floatingLabelText={"Pathetic Skill 2 Downgrade"}
                            onChange={(event, index, value) => {this.props.handleSelect("patheticSkill2", value, 1)}}>
                            {this.skillsMenuItemList()}
                        </SelectField>
                    </Col>
                    <Col sm={6}>
                        <SelectField
                            value={this.props.character.background.patheticSkill3}
                            floatingLabelText={"Pathetic Skill 3 Downgrade"}
                            onChange={(event, index, value) => {this.props.handleSelect("patheticSkill3", value, 1)}}>
                            {this.skillsMenuItemList()}
                        </SelectField>
                    </Col>
                </Row>
            </div>
        );
    }
}

BackgroundMaker.propTypes = {
    handleSelect: PropTypes.func.isRequired,
    character: PropTypes.object.isRequired,
};

export default BackgroundMaker;