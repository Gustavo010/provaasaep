const express = require('express');

const routes = express.Router();

const Comentario = require('./src/controller/Comentario');
const Equipamentos = require('./src/controller/Equipamentos');
const Usuario = require('./src/controller/Usuario');

routes.get('/Comentario/:id_Equipamentos', Comentario.listar);
routes.post('/Comentario', Comentario.cadastrar);

routes.get('/Equipamentos', Equipamentos.listar);
routes.post('/Equipamentos', Equipamentos.cadastrar);

routes.post('/login', Usuario.login);

module.exports = routes;