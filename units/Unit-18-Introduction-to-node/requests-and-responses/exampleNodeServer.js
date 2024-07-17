// lets import all the modules we need.
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const port = 3000;
const fileDir = './example-html-files/';

//lets make an instance of a server
const server = http.createServer((req, res) => {
    console.log('request made');

    // Parse the query string
    var query = url.parse(req.url, true);
    var filePath = path.join(fileDir, query.pathname);

    // Set the header content type
    res.setHeader('Content-Type', 'text/html');

    // Read the file and serve it
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 404;
            let errorFilePath = path.join(fileDir, '404Error.html');
            fs.readFile(errorFilePath, (err, errorData) => {
                if (err) {
                    res.end('404 Not Found');
                } else {
                    res.end(errorData);
                }
            });
        } else {
            res.statusCode = 200;
            res.end(data);
        }
    });
});

// now lets make the server listen to requests.
server.listen(port, 'localhost', () => {
    console.log(`Listing to requests on port ${port}`);
});

// the create server function, takes in a callback, 
// and this call back is going to be run each time a request is being send to the server.