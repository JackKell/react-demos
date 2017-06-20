import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PartyMemberList from '../component/PartyMemberList'

const warrior = {
    id: 1,
    name: "Jimmy The Fearful",
    role: "Warrior",
    strength: 6,
    dexterity: 6,
    intelligence: 4,
    health: 4,
};

const wizard = {
    id: 2,
    name: "Pyros the Reckless",
    role: "Wizard",
    strength: 1,
    dexterity: 1,
    intelligence: 4,
    health: 14,
};

const rouge = {
    id: 3,
    name: "Rumbum the Clumsy",
    role: "Rouge",
    strength: 2,
    dexterity: 2,
    intelligence: 4,
    health: 12,
};

const knight = {
    id: 4,
    name: "Lisa the Shy",
    role: "Knight",
    strength: 7,
    dexterity: 1,
    intelligence: 4,
    health: 8,
};

const startingParty = [];
const partyOptions = [warrior, wizard, rouge, knight];

class PartyBuilder extends Component {
    constructor() {
        super();
        this.state = {
            currentPartyMembers: startingParty,
            availablePartyMembers: partyOptions,
        };
    }

    removeFromParty = (partyMember) => {
        let index = this.state.currentPartyMembers.indexOf(partyMember);
        let newCurrentPartyMembers = this.state.currentPartyMembers;
        newCurrentPartyMembers.splice(index, 1);
        let newAvailablePartyMembers = this.state.availablePartyMembers;
        newAvailablePartyMembers.push(partyMember);
        this.setState({
            currentPartyMembers: newCurrentPartyMembers,
            availablePartyMembers: newAvailablePartyMembers,
        });
    };

    addToParty = (partyMember) => {
        if (this.state.currentPartyMembers.length + 1 <= this.props.maxPartySize) {
            let index = this.state.availablePartyMembers.indexOf(partyMember);
            let newAvailablePartyMembers = this.state.availablePartyMembers;
            newAvailablePartyMembers.splice(index, 1);
            let newCurrentPartyMembers = this.state.currentPartyMembers;
            newCurrentPartyMembers.push(partyMember);

            this.setState({
                currentPartyMembers: newCurrentPartyMembers,
                availablePartyMembers: newAvailablePartyMembers,
            });
        }
    };

    render() {
        return (
            <div className="partybuilder">
                <Row>
                    <h1>Party Slots Remaining: {this.props.maxPartySize - this.state.currentPartyMembers.length}</h1>
                </Row>
                <Row>
                    <Col sm={6}>
                        <PartyMemberList
                            partyMembers={this.state.currentPartyMembers}
                            listTitle="Current Party Members"
                            actionLabel="Remove"
                            actionOnClick={(partyMember) => this.removeFromParty(partyMember)}
                        />
                    </Col>
                    <Col sm={6}>
                        <PartyMemberList
                            partyMembers={this.state.availablePartyMembers}
                            listTitle="Available Party Members"
                            actionLabel="Add"
                            actionOnClick={(partyMember) => this.addToParty(partyMember)}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

PartyBuilder.propTypes = {
    maxPartySize: PropTypes.number,
};

PartyBuilder.defaultProps = {
    maxPartySize: 3,
};

export default PartyBuilder;