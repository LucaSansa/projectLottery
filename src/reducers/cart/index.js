import { ADD_IN_CART } from './actions';
import { REMOVE_FROM_CART } from './actions';
import { REMOVE_ALL_CART } from './actions';

const initialState = [];

const gamesInCart = (state = initialState, action) => {
    switch(action.type){
        case ADD_IN_CART:
            return [...state, action.payload];

        case REMOVE_FROM_CART:
            const newArray = state.filter(item => item.id !== action.payload)
            return state = newArray;
            
        case REMOVE_ALL_CART:
            return state = initialState;
        
    }
    return state;
}

export default gamesInCart;