import axios from 'axios';
import { FETCH_USERS } from '../types/types';

/**
 * ACTION CREATOR
 * Fetch Users From The API
 * @returns {function(*, *, *): Promise<void>}
 */
export const fetchUsers = () => async (dispatch, getState, API_HTTP) => {
    const res = await API_HTTP.get('/users');
    dispatch({
        type: FETCH_USERS,
        payload: res,
    });
};
