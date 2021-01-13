// -------------------------------------------------
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const config = require('config');
const express = require('express');
const app = express();

// ------------------------------------------------

const routes = require('./routes/inex');
require('./data/connection');
//-------------------------------------------------

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-7z5dlz6h.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3000/service.cards/api/',
  issuer: 'https://dev-7z5dlz6h.us.auth0.com/',
  algorithms: ['RS256']
});


const domain = config.get('server.domain');

app.set('view engine', 'hbs')

app.use(jwtCheck);
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/service.cards/api', routes);


module.exports = app;