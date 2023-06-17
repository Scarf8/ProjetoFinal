const createHttpError = require('http-errors');
const mongoose = require('mongoose');

const cadSchema = new mongoose.Schema({
    id: Number,
    nomecomp: String,
    fotoPf: String,
    cpf: String,
    dataNascimento: String,
    telefone: Number,
    endereco: String,
    cidade: String,
    estado: String,
    emai: String,
    senha: String,
    status: Boolean
});

module.exports = mongoose.model('cliente', cadSchema);