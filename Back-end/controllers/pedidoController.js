const pedidoModel = require('../models/pedidoModel');

class pedidoController {
    async salvar(req, res) {
        let pedido = req.body;
        const max = await pedidoModel.findOne({}).sort({ codigo: -1 });
        pedido.id = max == null ? 1 : max.id + 1;
        const resultado = await pedidoModel.create(pedido);
        res.status(201).json(resultado);
    }

    async listar(req, res) {
        const resultado = await pedidoModel.find({});
        res.status(200).json(resultado);
    }

    async buscarPorId(req, res) {
        const id = req.params.id;
        const resultado = await pedidoModel.findOne({ 'id': id });
        res.status(200).json(resultado);
    }

    async atualizar(req, res) {
        const id = req.params.id;
        const _id = String((await pedidoModel.findOne({ 'id': id }))._id);
        await pedidoModel.findByIdAndUpdate(String(_id), req.body);
        res.status(200).send();
    }

    async excluir(req, res) {
        const id = req.params.id;
        const _id = String((await pedidoModel.findOne({ 'id': id }))._id);
        await pedidoModel.findByIdAndRemove(String(_id));
        res.status(200).send();
    }
}

module.exports = new pedidoController();