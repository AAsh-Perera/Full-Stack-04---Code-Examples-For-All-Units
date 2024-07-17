const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3001;

const app = express();

// now set up an instance of express-handlebars as the engine
const hbs = exphbs.create();

app.engine('handlebars', hbs.engine);
//let's set the view engine to view all files ending with handlebars aka .hbs files
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    console.log('Request revieved for "/"');
    res.render('main');
});

app.listen(port, ()=> {
    console.log('Exress Server is running on port: ', port);
    console.log(__dirname);
});