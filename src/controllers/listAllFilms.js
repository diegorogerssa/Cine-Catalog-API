const { films } = require('../data/films');

const listAllFilms = (_req, res) => [res.status(200).json(films)];

module.exports = listAllFilms;