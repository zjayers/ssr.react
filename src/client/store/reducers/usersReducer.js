import { FETCH_USERS } from '../types/types';

/**
 * Users Reducer
 * @param state - Current Redux State
 * @param action - The Current Action Creator
 */
export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
};
