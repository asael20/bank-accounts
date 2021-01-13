// -------------------------------------------------
const path = require('path')

const config = require('config');
const express = require('express');
const app = express();
const hbs = require('hbs');
// ------------------------------------------------

const routes = require('./routes/inex');
require('./data/connection');
//-------------------------------------------------



const partialsPath = path.join(__dirname, '/templates/partials');
const viewsPath = path.join(__dirname, '/templates/views')

hbs.registerPartials(partialsPath);

app.set('view engine', 'hbs');
app.set('views', viewsPath)

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/service.cards/api', routes);


module.exports = app;