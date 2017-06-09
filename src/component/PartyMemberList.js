import React, {Component} from 'react';
import PartyMemberCard from './PartyMemberCard';
import PropTypes from 'prop-types';

class PartyMemberList extends Component {
    renderPartyMemberCard = (partyMember) =>{
        return (
            <PartyMemberCard
                key={partyMember.id.toString()}
                partyMember={partyMember}
                actionOnClick={() => this.props.actionOnClick(partyMember)}
                actionLabel={this.props.actionLabel}/>
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