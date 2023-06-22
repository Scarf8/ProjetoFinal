const createHttpError = require('http-errors');
const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    id: Number,
    nomecat: String,
    descat: String,
    status: Boolean
});

module.exports = mongoose.model('categoria', catSchema);