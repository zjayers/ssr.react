/* Entry Point for the client side application */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Hydrate the server side rendered application
ReactDOM.hydrate(<App />, document.getElementById('root'));
