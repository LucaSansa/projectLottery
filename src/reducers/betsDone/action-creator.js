import { SAVE_BET } from './actions';
import { RESET_BET } from './actions';

export const addBets = (games) => ({
    type: SAVE_BET,
    payload: games
})

export const resetBets = () => ({
    type: RESET_BET
})

