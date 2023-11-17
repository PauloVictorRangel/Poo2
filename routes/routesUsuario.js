const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/usuarios', usuarioController.getAllUsuarios);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;