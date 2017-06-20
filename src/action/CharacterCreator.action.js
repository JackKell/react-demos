const CHARACTER_CREATOR = "CHARACTER_CREATOR::";

function getCharacterCreatorAction(actionName) {
    return CHARACTER_CREATOR + actionName
}

export const SET_STEP = getCharacterCreatorAction("SET_STEP");
export const CHANGE_STEP = getCharacterCreatorAction("CHANGE_STEP");
export const SET_TRAIT = getCharacterCreatorAction("SET_TRAIT");
export const SET_BACKGROUND_BUFF = getCharacterCreatorAction("SET_BACKGROUND_BUFF");
export const SET_SKILL = getCharacterCreatorAction("SET_SKILL");
export const CHANGE_SKILL = getCharacterCreatorAction("CHANGE_SKILL");
export const SET_STAT = getCharacterCreatorAction("SET_STAT");
export const CHANGE_STAT = getCharacterCreatorAction("CHANGE_STAT");

export function setStep(step) {
    return {
        type: SET_STEP,
        payload: step,
    };
}

export function changeStep(delta) {
    return {
        type: CHANGE_STEP,
        payload: delta,
    };
}

export function setTrait(trait, value) {
    return {
        type: SET_TRAIT,
        payload: {
            trait,
            value,
        }
    }
}

export function setBackgroundBuff(buff, skill, value) {
    return {
        type: SET_BACKGROUND_BUFF,
        payload: {
            buff,
            skill,
            value
        }
    };
}

export function setSkill(skill, rank) {
    return {
        type: SET_SKILL,
        payload: {
            skill,
            rank,
        }
    }
}

export function changeSkill(skill, delta) {
    return {
        type: SET_SKILL,
        payload: {
            skill,
            delta,
        }
    }
}

export function setStat(stat, value) {
    return {
        type: SET_STAT,
        payload: {
            stat,
            value,
        }
    }
}

export function changeStat(stat, delta) {
    return{
        type: CHANGE_STAT,
        payload: {
            stat,
            delta,
        }
    }
}
