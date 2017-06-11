import React, {Component} from 'react';
import PartyMemberCard from './PartyMemberCard';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

const cardStyle = {
    paddingBottom: "2rem",
};

class PartyMemberList extends Component {
    renderPartyMemberCard = (partyMember) =>{
        return (
            <PartyMemberCard
                style={cardStyle}
                key={partyMember.id.toString()}
                partyMember={partyMember}
                actionOnClick={() => this.props.actionOnClick(partyMember)}
                actionLabel={this.props.actionLabel}
            />
        );
    };

    render() {
        const partyMembers = this.props.partyMembers;
        const partyMemberList = partyMembers.map((partyMember) => this.renderPartyMemberCard(partyMember));
        return (
            <div className="partymemberlist">
                <h2>{this.props.listTitle}</h2>
                <ul>{partyMemberList}</ul>
            </div>
        );
    }
}

PartyMemberList.propTypes = {
    partyMembers: PropTypes.array.isRequired,
    listTitle: PropTypes.string.isRequired,
};

export default PartyMemberList;