// NOTE: This action file is only an example on how to create action files.
// A component as dumb as an UpDownCounter should not be added to the global state.

import {INCREMENT, DECREMENT} from '../action/UpDownCounter.action';

const UpDownCounterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case INCREMENT:
            return ({...state, value: state.value + action.payload});
        case DECREMENT:
            return ({...state, value: state.value - action.payload});
        default:
            return state
    }
};

export default UpDownCounterReducer;