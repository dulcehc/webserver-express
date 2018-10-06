const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helpers/helper');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS (handlebars) engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
    name: 'dulce'
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(port, () => {
  console.log(`Listening requests on port ${ port }`);
});