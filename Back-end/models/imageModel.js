const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    avatar: {
        type: Buffer,
    }
});

module.exports = mongoose.model('imagens', userSchema);