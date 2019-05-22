import { UPDATE_COUNTER_TYPES } from '../actions/types';

const INITIAL_STATE = {
    counter: 18
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UPDATE_COUNTER_TYPES:
            return { ...state, counter: action.payload };
        default: 
            return state;
    }
}