const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3001;

const app = express();

// Set up an instance of express-handlebars as the engine
const hbs = exphbs.create({
    // what this does it make it so that the there is no default template.
    // but even thoigh we are not using a default layout/template, we still need to have a main.hbs in a dir named 'layouts' with in the views dir.
    defaultLayout: 'main'
});
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
// Let's set the view engine to view all files ending with handlebars aka .hbs files
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    console.log('Request received for "/"');
    // remeber for this to work, you also need the main.hbs file in the 'layouts' dir which should be in the 'views' dir.
    res.render('index');
});

app.listen(port, () => {
    console.log('Express Server is running on port:', port);
    console.log(__dirname);
});
