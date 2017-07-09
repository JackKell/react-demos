import * as Actions from '../action/PartyBuilder.action';

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

const partyOptions = [warrior, wizard, rouge, knight];

const initialState = {
    currentPartyMembers: [],
    availablePartyMembers: partyOptions,
};

const PartyBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.ADD_PARTY_MEMBER:
            return {
                ...state,
                currentPartyMembers: [
                    ...state.currentPartyMembers,
                    action.payload.partyMember
                ],
                availablePartyMembers: state.availablePartyMembers.filter(partyMember => partyMember !== action.payload.partyMember),
            };
        case Actions.REMOVE_PARTY_MEMBER:
            return {
                ...state,
                currentPartyMembers: state.currentPartyMembers.filter(partyMember => partyMember !== action.payload.partyMember),
                availablePartyMembers: [
                    ...state.availablePartyMembers,
                    action.payload.partyMember
                ],
            };
        default:
            return state;
    }
};

export default PartyBuilderReducer;
