const express = require('express');
const films = require('./routesFilms');

const route = express.Router();

route.use('/films', films);

module.exports = route;