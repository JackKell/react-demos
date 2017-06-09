import React, {Component} from 'react';
import PropTypes from 'prop-types';

const warrior = {
    name: "Jimmy The Fearful",
    role: "Warrior",
    strength: 6,
    dexterity: 6,
    intelligence: 4,
    health: 4,
};

const wizard = {
    name: "Pyros the Reckless",
    role: "Wizard",
    strength: 1,
    dexterity: 1,
    intelligence: 4,
    health: 14,
};

const rouge = {
    name: "Rumbum the Clumsy",
    role: "Rouge",
    strength: 2,
    dexterity: 2,
    intelligence: 4,
    health: 12,
};

const knight = {
    name: "Lisa the Shy",
    role: "Knight",
    strength: 7,
    dexterity: 1,
    intelligence: 4,
    health: 8,
};

class PartyMemberList extends Component {
    constructor() {
        super();
        this.state = {
            currentPartyMembers: [],
            availablePartyMembers: [warrior, wizard, rouge, knight],
        };
    }
}