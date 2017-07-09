import { getNamedAction } from "./ActionUtility";

const POINT_SPENDER = "POINT_SPENDER";

function getPointSpenderAction(actionName) {
    return getNamedAction(POINT_SPENDER, actionName);
}

// Actions
export const CHANGE_SKILL = getPointSpenderAction("CHANGE_SKILL");

// Action Creators
export function changeSkill(skill, delta) {
    return {
        type: CHANGE_SKILL,
        payload: {
            skill,
            delta
        }
    }
}
