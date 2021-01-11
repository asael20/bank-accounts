// -------------------------------------------------

const config = require('config')
const express = require('express');
const app = express();

// ------------------------------------------------

const routes = require('./routes/inex');
require('./data/connection');
//-------------------------------------------------


const domain = config.get('server.domain');

app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/service.cards/api', routes);


module.exports = app;