const path = require('path');
const express = require('express');
const fs = require('fs');


const port = 3000;

// now we need to make an instance of express, or as we call it an express app
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set up the view engine
app.set('view engine', 'ejs');
// by default ejs will look for a folder named views for files. you change this if you want like you see below
app.set('views', './handling-dynamic-data/views');

// now lets make the app serve us some files.
// this in response to get requests with only the '/'
app.get('/', (req, res) => {
    console.log('Request for "/" was received');
    //render a view
    res.render('index');
});

// now lets make a new rout
app.get('/about', (req, res)=> {
    console.log('Request for "about" was recieved');
    res.render('about');
    //its as simple as that.
});

app.get('/create-blog', (req, res) => {
    res.render('createBlog');
});

// when a user submits the form it sends a post req, we will now hadle that
app.post('/submit-blog', (req, res) => {

    console.log('Received form submission');
    console.log('req.body:', req.body);

    if (!req.body) {
        return res.status(400).send('No form data received');
    }

    // Extract data from the form submission
    const { title, author, category, body, tags } = req.body;

    // Create a data object to pass to the EJS template
    const blogData = {
        title,
        author,
        category,
        body,
        tags: tags.split(',').map(tag => tag.trim()),
        date: new Date().toLocaleDateString()
    };

    // Generate the EJS content, what we are basically doing it writing the ejs here, and then later on write it to the file blog.ejs
    const ejsContent = `
        <%- include('partials/header') %>
        <h1><%= title %></h1>
        <p>By <%= author %> on <%= date %></p>
        <p>Category: <%= category %></p>
        <div>
            <%= body %>
        </div>
        <p>Tags: <%= tags.join(', ') %></p>
        <%- include('partials/footer') %>
    `;

    // Write the EJS content to a file
    fs.writeFile(path.join(__dirname, 'views', 'blog.ejs'), ejsContent, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return res.status(500).send('Error creating blog post');
        }
        
        // Render the newly created blog.ejs with the blog data
        res.render('blog', blogData);
        // here we pass in the object containing what we want, and that will be injected using the ejs in blog.ejs
    });
});

// now finnaly the 404 page
app.use((req, res) => {
    // this will only happen if the execution reaches this line.
    res.status(404).render('404');
});


//now make the app listen.
app.listen(port, ()=> {
    console.log('Express server is live on port:', port);
    console.log(__dirname);
});