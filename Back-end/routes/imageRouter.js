const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const multer = require('multer')
const upload = multer()

router.get('/', imageController.listar);
router.post('/', upload.single('avatar'), imageController.salvar);


module.exports = router;