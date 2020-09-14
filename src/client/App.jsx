// - Imports
import React from 'react';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom';
import Header from './components/Header';

// - Components
import Router, { routes } from './routes/Router';
import { fetchCurrentUser } from './store/actions/fetchCurrentUserAction';

/**
 * Root React Application Component
 * @returns {JSX.Element} - The Router and Routes Component (To Render all other child components)
 */
const App = ({ useStaticRouter, context, location, store }) => {
    return (
        <Provider store={store}>
            <Router
                useStaticRouter={useStaticRouter}
                context={context}
                location={location}
            >
                <Header />
                <Switch>{renderRoutes(routes)}</Switch>
            </Router>
        </Provider>
    );
};

// - Exports
export default App;
