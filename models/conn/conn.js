const mongoose = require('mongoose')

const { host, opts } = require('../../config/database')

mongoose.connect(host, opts)

module.exports = mongoose