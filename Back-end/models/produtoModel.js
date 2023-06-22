const createHttpError = require('http-errors');
const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
    id: Number,
    nomeprod: String,
    imagemprod: String,
    descriprod: String,
    precoprod: String,
    animal: String,
    comentariosprod: String,
    status: Boolean
});

module.exports = mongoose.model('produto', prodSchema);