import * as Actions from '../action/CharacterCreator.action';

const initialState = {
    stepIndex: 0,
    steps: [
        "Character Information",
        "Choose Skills",
        "Choose Edges",
        "Choose Features",
        "Assign Combat Stats",
        "Create Basic Descriptions",
        "Choose A Starter",
        "Choose Staring Items",
    ],
    baseStats: {
        hp: 10,
        attack: 5,
        defense: 5,
        specialAttack: 5,
        specialDefense: 5,
        speed: 5,
    },
    maxStateChange: 5,
    character: {
        level: 1,
        statPoints: 10,
        name: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        background: {
            adeptSkill: "",
            noviceSkill: "",
            patheticSkill1: "",
            patheticSkill2: "",
            patheticSkill3: "",
        },
        description: "",
        skills: {
            acrobatics: 2,
            athletics: 2,
            combat: 2,
            intimidate: 2,
            stealth: 2,
            survival: 2,
            generalEducation: 2,
            occultEducation: 2,
            pokemonEducation: 2,
            technologyEducation: 2,
            guile: 2,
            perception: 2,
            charm: 2,
            command: 2,
            focus: 2,
            intuition: 2,
        },
        features: [],
        edges: [],
        stats: {
            hp: 10,
            attack: 5,
            defense: 5,
            specialAttack: 5,
            specialDefense: 5,
            speed: 5,
        }
    },
};

const CharacterCreatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SET_STEP:
            return {...state, stepIndex: action.payload};
        case Actions.CHANGE_STEP:
            return {...state, stepIndex: state.stepIndex + action.payload};
        case Actions.SET_TRAIT:
            return {
                ...state,
                character: {
                    ...state.character,
                    [action.payload.trait]: action.payload.value
                },
            };
        case Actions.SET_BACKGROUND_BUFF:
            const previouslyBuffedSkill = state.character.background[action.payload.buff];
            if (previouslyBuffedSkill !== "") {
                return {
                    ...state,
                    character: {
                        ...state.character,
                        background: {
                            ...state.character.background,
                            [action.payload.buff]: action.payload.skill,
                        },
                        skills: {
                            ...state.character.skills,
                            [previouslyBuffedSkill]: 2,
                            [action.payload.skill]: action.payload.value
                        }
                    }
                }
            } else {
                return {
                    ...state,
                    character: {
                        ...state.character,
                        background: {
                            ...state.character.background,
                            [action.payload.buff]: action.payload.skill,
                        },
                        skills: {
                            ...state.character.skills,
                            [action.payload.skill]: action.payload.value
                        }
                    }
                };
            }
        case Actions.SET_SKILL:
            return {
                ...state,
                character: {
                    ...state.character,
                    skills: {
                        ...state.character.skills,
                        [action.payload.skill]: action.payload.rank,
                    },
                }
            };
        case Actions.CHANGE_SKILL:
            return {
                ...state,
                character: {
                    ...state.character,
                    skills: {
                        ...state.character.skills,
                        [action.payload.skill]: state.character.skills[action.payload.skill] + action.payload.delta,
                    },
                }
            };
        case Actions.SET_STAT:
            return {
                ...state,
                character: {
                    ...state.character,
                    stats: {
                        ...state.character.stats,
                        [action.payload.stat]: action.payload.value,
                    },
                }
            };
        case Actions.CHANGE_STAT:
            const baseStatValue = state.baseStats[action.payload.stat];
            const currentStatValue = state.character.stats[action.payload.stat];
            const newStatValue = currentStatValue + action.payload.delta;
            if (newStatValue >= baseStatValue &&
                newStatValue <= baseStatValue + state.maxStateChange &&
                state.character.statPoints - action.payload.delta >= 0) {
                return {
                    ...state,
                    character: {
                        ...state.character,
                        stats: {
                            ...state.character.stats,
                            [action.payload.stat]: newStatValue,
                        },
                        statPoints: state.character.statPoints - action.payload.delta,
                    }
                }
            } else {
                return state;
            }
        default:
            return state;
    }
};

export default CharacterCreatorReducer;