const querystring = require('querystring');
const model = require("../models/Pacientes");

const create = (req, res) => {
    res.render('pacientes/create');
}

const store = async (req, res) => {
    const { nombre, email, eps, genero } = req.body;

    try {
        const result = await model.store(nombre, email, eps, genero);
        console.log(result);
        res.redirect("/pacientes");
    } catch (error) { 
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
};

module.exports = {
    create,
    store,
};