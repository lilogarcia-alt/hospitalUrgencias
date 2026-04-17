const querystring = require('querystring');

const create = (req, res) => {
    res.render('pacientes/create');
}

module.exports = {
    create,
};