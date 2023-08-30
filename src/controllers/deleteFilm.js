const { films } = require('../data/films');
const { filmIndex } = require('../utils/findId');

const deleteFilm = (req, res) => {
  const { id } = req.params;
  const idIndex = filmIndex(films, id);
  if (idIndex === -1) {
    return res.status(404).json({ message: 'film not found.' });
  }
  films.splice(idIndex, 1);
  return res.status(200).json({ message: 'film removed.' });
};

module.exports = deleteFilm;
