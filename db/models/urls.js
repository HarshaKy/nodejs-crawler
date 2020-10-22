const Mongoose = require('mongoose')

const urlsSchema = Mongoose.Schema({
    url: { type: String, unique: true },
    refCount: { type: Number, default: 0 },
    params: [{ type: String }]
}, { timeStamps: true })

module.exports = Mongoose.model('urls', urlsSchema)