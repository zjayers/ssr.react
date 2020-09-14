// - Imports
import { combineReducers } from 'redux';
import { usersReducer } from './reducers/usersReducer';
import { authReducer } from './reducers/authReducer';

/**
 * Combine custom redux reducers
 */
export const reducers = combineReducers({
    users: usersReducer,
    auth: authReducer,
});
