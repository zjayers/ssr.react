// - Imports
import React from 'react';
import { BrowserRouter, Route, StaticRouter, Switch } from 'react-router-dom';
import Home from '../components/Home';

// Route Paths
const HOME_PATH = '/';

/**
 * Routing For React Application
 * @returns {JSX.Element} - Routes for the SSR Static Router & the Browser Router
 */
const Router = ({ useStaticRouter, context, location }) => {
    // Get The Router Style to use when rendering the components
    const RouteHandler = useStaticRouter ? StaticRouter : BrowserRouter;

    // Return the router and corresponding routes for all child components
    return (
        <RouteHandler context={context} location={location}>
            <Switch>
                <Route exact path={HOME_PATH} component={Home} />
            </Switch>
        </RouteHandler>
    );
};

// - Exports
export default Router;
