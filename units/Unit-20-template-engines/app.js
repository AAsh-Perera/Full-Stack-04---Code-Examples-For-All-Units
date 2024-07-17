const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const port = 3001;

const app = express();

// Set up an instance of express-handlebars as the engine
const hbs = exphbs.create({
    defaultLayout: false
});
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
// Let's set the view engine to view all files ending with handlebars aka .hbs files
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    console.log('Request received for "/"');
    res.render('index');
});

app.listen(port, () => {
    console.log('Express Server is running on port:', port);
    console.log(__dirname);
});
