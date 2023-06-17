const createHttpError = require('http-errors');
const mongoose = require('mongoose');

const cadSchema = new mongoose.Schema({
    id: Number,
    preco: String,
    listaQuant: String,
    clientePed: String,
    dataPed: String,
    horaPed: String,
    statusDoPed: Boolean
});

module.exports = mongoose.model('cliente', cadSchema);