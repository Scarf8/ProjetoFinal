const createHttpError = require('http-errors');
const mongoose = require('mongoose');

const pedSchema = new mongoose.Schema({
    id: Number,
    precoT: String,
    listaQuant: String,
    clientePed: String,
    dataPed: String,
    horaPed: String,
    statusDoPed: Boolean
});

module.exports = mongoose.model('pedido', pedSchema);