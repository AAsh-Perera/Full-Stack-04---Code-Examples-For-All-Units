const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;

const fileDir = './example-html-files/';

// the create server function, takes in a callback, 
// and this call back is going to be run each time a request is being send to the server.
const server = http.createServer((req, res) => {
    console.log('Request made');

    res.setHeader('Content-Type', 'text/html');

    let filePath = fileDir;

    switch (req.url) {
        // Root path
        case '/': 
            filePath += 'index.html';
            res.statusCode = 200;
            break;

        // About page
        case '/about':
            filePath += 'about.html';
            res.statusCode = 200;
            break;

        // Redirect
        case '/about-me': 
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            return; // Return to prevent further execution

        // 404 Error for unmatched routes
        default:
            filePath += '404Error.html';
            res.statusCode = 404;
            break;
    }

    // Read the file and send the response
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error('Error while loading html:', err);
            res.end('Error loading page');
        } else {
            res.write(data);
            res.end();
        }
    });
});

// Make the server listen to requests
server.listen(port, 'localhost', () => {
    console.log(`Listening to requests on port ${port}`);
});
