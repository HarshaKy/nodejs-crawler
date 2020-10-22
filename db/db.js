var mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => console.log('connected to db'))
mongoose.set('useCreateIndex', true)

module.exports = { mongoose }