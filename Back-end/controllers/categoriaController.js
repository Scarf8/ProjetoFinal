const categoriaModel = require('../models/categoriaModel');

class categoriaController {
    async salvar(req, res) {
        let categoria = req.body;
        const max = await categoriaModel.findOne({}).sort({ codigo: -1 });
        categoria.id = max == null ? 1 : max.id + 1;
        const resultado = await categoriaModel.create(categoria);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await categoriaModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        const resultado = await categoriaModel.findOne({ 'id': id });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const _id = String((await categoriaModel.findOne({ 'id': id }))._id);
        await categoriaModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.id;
        const _id = String((await categoriaModel.findOne({ 'id': id }))._id);
        await categoriaModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new categoriaController();