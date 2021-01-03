import { SAVE_BET } from './actions';
import { RESET_BET } from './actions';

const initialState = [];

const betSaved = (state = initialState, action) => {
    switch(action.type){
        case SAVE_BET:
            return [...state, action.payload];
        case RESET_BET:
            return state = initialState
    }
    return state;
}

export default betSaved;