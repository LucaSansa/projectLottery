import { SELECT_TYPE } from './actions';
import { RESET_TYPE } from './actions';

export const selectType = (type) => ({
    type: SELECT_TYPE,
    payload: type
})

export const resetType = () => ({
    type: RESET_TYPE
})