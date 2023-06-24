const imageModel = require('../models/imageModel');

class imageController { 
    async salvar(req, res) {
        const imagens = req.body;
        const file = req.file.buffer;
        imagens.avatar = file
        const resultado = await imageModel.create(imagens);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await imageModel.find({});
        res.status(200).json(resultado);
    }
}

module.exports = new imageController();