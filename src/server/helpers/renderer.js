// - Imports
import React from 'react';
import { renderToString } from 'react-dom/server';
import serialize from 'serialize-javascript';
import App from '../../client/App';

/**
 * Get Content To Render
 * @param request - The HTTP Request received by the Express server
 * @param store - The server side Redux store
 * @returns {string} - HTML string containing all React Content rendered to HTML
 */
export const getContentToRender = (request, store) => {
    // Generate the HTML for the React Component Tree
    const content = renderToString(
        <App
            location={request.path}
            context={{}}
            store={store}
            useStaticRouter
        />
    );

    // Convert server-side store to a JSON object to send to the client
    const JSON_STORE = serialize(store.getState());

    // Inject the json data into the renderable HTML template
    const jsonStateScriptInjection = `
    <script>
    window.INITIAL_STATE = ${JSON_STORE}
    </script>
    `;

    /*
     Generate a Root HTML Snippet
     Inject the React Content
     Point the html script loader to the bundle.js file in the 'public' folder
     Response to the HTTP request with the HTML snippet
     */
    return `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>REACT.SSR</title>
        </head>
        <body>
            <div id="root">${content}</div>
            ${jsonStateScriptInjection}
            <script src="bundle.js"></script>
        </body>
    </html>
        `;
};
