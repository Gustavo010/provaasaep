const con = require('../../connection.js');

const listar = (req, res) => {
    const query = "SELECT * FROM perfis";

    con.query(query, (err, result) => {
        if(err === null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrar = (req, res) => {
    const perfil = req.body.perfil;


    const query = `INSERT INTO salgados VALUES (DEFAULT, '${perfil}')`;

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