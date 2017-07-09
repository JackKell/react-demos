import { getNamedAction } from "./ActionUtility";

const PARTY_BUILDER = "PARTY_BUILDER";

function getPartyBuilderAction(actionName) {
    return getNamedAction(PARTY_BUILDER, actionName);
}

// Actions
export const ADD_PARTY_MEMBER = getPartyBuilderAction("ADD_PARTY_MEMBER");
export const REMOVE_PARTY_MEMBER = getPartyBuilderAction("REMOVE_PARTY_MEMBER");

// Action Creators
export function addPartyMember(partyMember) {
    return {
        type: ADD_PARTY_MEMBER,
        payload: {
            partyMember
        }
    }
}

export function removePartyMember(partyMember) {
    return {
        type: REMOVE_PARTY_MEMBER,
        payload: {
            partyMember
        }
    }
}
