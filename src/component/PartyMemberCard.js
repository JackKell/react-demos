import React from 'react';
import {Card, CardActions, CardText, CardTitle} from 'material-ui';
import {FlatButton} from 'material-ui';
import PropTypes from 'prop-types';

function PartyMemberCard(props) {
    const partyMember = props.partyMember;
    return (
        <div className="partymembercard" style={props.style}>
            <Card>
                <CardTitle
                    title={partyMember.name}
                    subtitle={partyMember.role}/>
                <CardText>
                    Strength: {partyMember.strength}, Dexterity: {partyMember.dexterity},
                    Intelligence: {partyMember.intelligence}, Health: {partyMember.health}
                </CardText>
                <CardActions>
                    <FlatButton label={props.actionLabel} onClick={props.actionOnClick}/>
                </CardActions>
            </Card>
        </div>
    );
}

PartyMemberCard.propTypes = {
    partyMember: PropTypes.object.isRequired,
    actionLabel: PropTypes.string.isRequired,
    actionOnClick: PropTypes.func.isRequired,
};

export default PartyMemberCard;