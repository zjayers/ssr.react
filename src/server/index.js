// - Imports
import express from 'express';
import { getContentToRender } from './helpers/renderer';

// - Setup Express
const app = express();

// - Serve Public Files
app.use(express.static('public'));

// - Routes
app.get('*', (req, res) => {
    console.log('-------' + req.path);
    // Respond to the HTTP request with the React HTML content
    const content = getContentToRender(req);
    res.status(200).send(content);
});

// - Server Initialization
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
