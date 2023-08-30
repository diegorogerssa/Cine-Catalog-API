const express = require('express');
const { 
  addFilm,
  deleteFilm,
  getBysIdFilms,
  replaceFilm,
  listAllFilms,
  updadteFilm
} = require('../controllers')
const { validId } = require('../middlewares/validId')
const validateKeys = require('../middlewares/validateKeys');
const validateKeysUpdate = require('../middlewares/validateKeysUpdate');

const films = express.Router();

films.get('/', listAllFilms);
films.get('/:id', validId, getBysIdFilms)
films.post('/', validateKeys, addFilm)
films.put('/:id', validId, validateKeys, replaceFilm)
films.patch('/:id', validId, validateKeysUpdate, updadteFilm)
films.delete("/:id", validId, deleteFilm)

module.exports = films;