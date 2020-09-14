import axios from 'axios';
import { FETCH_CURRENT_USER } from '../types/types';

/**
 * ACTION CREATOR
 * Fetch Users From The API
 * @returns {function(*, *, *): Promise<void>}
 */
export const fetchCurrentUser = () => async (dispatch, getState, API_HTTP) => {
    const res = await API_HTTP.get('/current_user');

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res,
    });
};
