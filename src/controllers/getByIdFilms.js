const { films } = require('../data/films');
const { findfilm } = require('../utils/findId');

const getByIdFilms = (req, res) => {
  const { id } = req.params;
  console.log(id);

  const idExist = findfilm(films, id);
  if (idExist === undefined) {
    return res
      .status(400)
      .json({ message: 'There is no film available for the provided ID.' });
  }

  return res.status(200).json(idExist);
};

module.exports = getByIdFilms;