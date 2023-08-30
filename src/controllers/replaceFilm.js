const { films } = require('../data/films');
const { filmIndex } = require('../utils/findId');

const replaceFilm = (req, res) => {
  const { id } = req.params;
  const { 
    movie_title,
    film_director,
    year,
    movie_duration,
    genre, 
    main_actors,
    rating,
    synopsis,
    review 
  } = req.body;

  const idExist = filmIndex(films, id);
  if (idExist === -1) {
    return res.status(404).json({
      message: 'There is no film to be replaced for the given ID.',
    });
  }
  const filmReplace = {
    id: Number(id),
    movie_title,
    film_director,
    year,
    movie_duration,
    genre, 
    main_actors,
    rating,
    synopsis,
    review 
  };
  films.splice(idExist, 1, filmReplace);
  return res.status(201).json({ message: 'film replaced.' });
};

module.exports = replaceFilm;