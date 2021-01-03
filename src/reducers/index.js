import { combineReducers } from 'redux';
import types from './selectTypeGame';
import gamesInCart from './cart';
import betSaved from './betsDone';

export default combineReducers({
    types, 
    gamesInCart,
    betSaved
})