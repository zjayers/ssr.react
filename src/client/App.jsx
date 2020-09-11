// - Imports
import React from 'react';

// - Components
import Router from './routes/Router';

/**
 * Root React Application Component
 * @returns {JSX.Element} - The Router and Routes Component (To Render all other child components)
 */
const App = (props) => {
    return <Router {...props} />;
};

// - Exports
export default App;
