// lets first import the modules we need
const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const port = 3000;

// now we need to make an istance of express, or as we call it an express app
const app = express();

// now lets make the app serve us some files.
// this in response to get requests with only the '/'
app.get('/', (req, res) => {
    console.log('Request for "/" was recieved');
    // the good thinh about uing express is that we don't need to explicitly set the response header.
    res.sendFile('./examlple-html-files/index.html', {root: __dirname});
    // and we also dont need to use the .end() method on the response as well!
});

// now lets make a new rout
app.get('/about', (req, res)=> {
    console.log('Request for "about" was recieved');
    res.sendFile('./examlple-html-files/about.html', {root: __dirname});
    //its as simple as that.
});

// lets now do a redirect 
app.get('/about-us', (req, res) => {
    res.redirect('/about');
    // and thats all, see how easy it was?
});

// now finnaly the 404 page
app.use((req, res) => {
    // this will only happen if the execution reaches this line.
    res.sendFile('./examlple-html-files/404Error.html', {root: __dirname});
});

//now make the app listen.
app.listen(port, ()=> {
    console.log('Express server is live on port: ', port);
});