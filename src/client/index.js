/* Entry Point for the client side application */
import 'babel-polyfill';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './store';
import App from './App';

// Base Axios instance used for accessing the API
const axiosInstance = axios.create({
    baseURL: '/api',
});

// Setup Client Side Redux Store
const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

// Hydrate the server side rendered application
ReactDOM.hydrate(<App store={store} />, document.getElementById('root'));
