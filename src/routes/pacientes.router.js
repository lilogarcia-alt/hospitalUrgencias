const express = require("express");
const router = express.Router();

const controller = require("../controllers/pacientes.controller");

router.get('/create', controller.create)


module.exports = router;    