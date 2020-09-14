// - Imports
import React from 'react';
import { BrowserRouter, Route, StaticRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import HomePage from '../pages/HomePage';
import UsersListPage from '../pages/UsersListPage';
import App from '../App';

// Route Paths
const HOME_PATH = '/';
const USERS_PATH = '/users';

// Route Setup
const routes = [
    {
        path: HOME_PATH,
        ...HomePage,
        exact: true,
    },
    {
        path: USERS_PATH,
        ...UsersListPage,
    },
];

/**
 * Routing For React Application
 * @returns {JSX.Element} - Routes for the SSR Static Router & the Browser Router
 */
const Router = ({ useStaticRouter, context, location, children }) => {
    // Get The Router Style to use when rendering the components
    const RouteHandler = useStaticRouter ? StaticRouter : BrowserRouter;

    // Return the router and corresponding routes for all child components
    return (
        <RouteHandler context={context} location={location}>
            <div>{children}</div>
        </RouteHandler>
    );
};

// - Exports
export { routes };
export default Router;
