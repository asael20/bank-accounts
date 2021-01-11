const config = require('config');
const mongoose = require('mongoose');

mongoose.connect(config.get('mongodb.uri'), {useUnifiedTopology: true, useNewUrlParser:true, useCreateIndex:true})
    .then((conn) => console.log('Database connected...'))
    .catch((err) => console.log(`Error to Connect Database\n ${err}`));