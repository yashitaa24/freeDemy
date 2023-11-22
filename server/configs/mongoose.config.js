const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://arya:Arya*0708@cluster0.qmdbwss.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err))

module.exports = mongoose