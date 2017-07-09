import * as Actions from '../action/PointSpender.action';

const initialState = {
    points: 20,
    skills: {
        strength: 0,
        dexterity: 0,
        intelligence: 0,
        health: 0,
    },
    minStat: -5,
    maxStat: 10,
};

const PointSpenderReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.CHANGE_SKILL:
            return {
                ...state,
                points: state.points - action.payload.delta,
                skills: {
                    ...state.skills,
                    [action.payload.skill]: state.skills[action.payload.skill] + action.payload.delta
                }
            };
        default:
            return state;
    }
};

export default PointSpenderReducer;