// - Imports
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import { routes } from '../client/routes/Router';
import { fetchCurrentUser } from '../client/store/actions/fetchCurrentUserAction';
import { API_ADDRESS } from './constants/constants';
import { getContentToRender } from './helpers/renderer';
import { createServerStore } from './store/createServerStore';
import proxy from 'express-http-proxy';

// - Setup Express
const app = express();

// Setup Proxy Server route for the API
// This middleware will look for any route coming from the client that contains 'api'
// If it contains 'api', the middleware will replace 'localhost:PORT/api' with the Api Address
// Exp. localhost:3000/api/users => http://react-ssr-api.herokuapp.com/users
app.use(
    '/api',
    proxy(API_ADDRESS, {
        // This second option is set ONLY for the react-ssr-api,
        // option does not need to be used for custom api's
        proxyReqOptDecorator(opts) {
            opts.headers['x-forwarded-host'] = 'localhost:3000';
            return opts;
        },
    })
);

// - Serve Public Files
app.use(express.static('public'));

// - Routes
app.get('*', async (req, res) => {
    // Create the server side redux store
    const store = createServerStore(req);
    // Initialize and load data into the server-side redux store
    // Look at the current request path & routing config and determine
    // which component to render to the screen
    const matchedRoutes = matchRoutes(routes, req.path);

    // Map over each route/component and call the 'loadData' function if it exists on the component
    // returns an array of promises from each load data function
    const dataPromises = matchedRoutes.map(({ route }) => {
        if (route.loadData) {
            return route.loadData(store);
        }
    });

    // Get the current auth status of the user
    const getUserAuthStatus = store.dispatch(fetchCurrentUser());

    // Await all data loading promises
    await Promise.all([...dataPromises, getUserAuthStatus]);

    // Respond to the HTTP request with the React HTML content
    const contentToRender = getContentToRender(req, store);
    res.status(200).send(contentToRender);
});

// - Server Initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
