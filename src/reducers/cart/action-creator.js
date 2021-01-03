import {ADD_IN_CART} from './actions';
import {REMOVE_FROM_CART} from './actions';
import { REMOVE_ALL_CART } from './actions';

export const addGame = (game) => ({
    type: ADD_IN_CART,
    payload: game
})

export const removeGame = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id
})

export const removeAllCart = () => ({
    type: REMOVE_ALL_CART
})

