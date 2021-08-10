const express = require('express');
const app = express();
const path = require('path');
require('dotenv/config');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
  res.render('pages/index');
});

app.get('/portfolio', function(req, res){
  res.render('pages/portfolio');
});

app.get('/commissions', function(req, res){
  res.render('pages/commissions');
});

app.get('/about', function(req, res){
  res.render('pages/about');
});

app.get('/policy', function(req, res){
  res.render('pages/policy');
});

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('pages/404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

const port = process.env.PORT || '8080';
app.listen(port, err => {
  if (err)
    throw err
  console.log(`Server listening on ${port}`)
});