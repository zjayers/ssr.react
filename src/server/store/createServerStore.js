import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from '../../client/store';
import { API_ADDRESS } from '../constants/constants';

const axiosInstance = axios.create({
    baseURL: API_ADDRESS,
});

/**
 * Create the Server Side Store for use with Redux
 * @returns {Store<{}>} - Redux Store
 */
export const createServerStore = (req) => {
    // Take the cookie from the request object and append it to the axiosInstance for accessing the API
    axiosInstance.headers = { cookie: req.get('cookie') || '' };

    // Debug logging for viewing the axios request before sending
    axiosInstance.interceptors.request.use(
        function (config) {
            console.log(`Axios Request: -- ${config.method}: ${config.url}`);
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    return createStore(
        reducers,
        {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );
};
