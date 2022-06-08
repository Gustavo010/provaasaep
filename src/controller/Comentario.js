const con = require('../../connection.js');

const listar = (req, res) => {
    const query = "SELECT * FROM comentarios WHERE id_equipamentos = " + req.params.id_equipamentos;

    con.query(query, (err, result) => {
        if(err === null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrar = (req, res) => {
    const id_user = req.body.id_user;
    const id_equipamentos = req.body.id_equipamentos;
    const id_perfil = req.body.id_perfil;
    

    const query = `INSERT INTO comentarios VALUES (DEFAULT, ${id_user}, ${id_equipamentos}, ${id_perfil})`;

    con.query(query, (err, result) => {
        if(err === null) {
            res.status(200).json(req.body).end();
        }else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    listar,
    cadastrar,
}