const { films } = require('../data/films');
let { currentId } = require('../data/films');

const addFilm = (req, res) => {
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
  currentId += 1;
  const filmAdded = {
    id: currentId,
    movie_title,
    film_director,
    year,
    movie_duration,
    genre,
    main_actors,
    rating,
    synopsis,
    review,
  };
  films.push(filmAdded);
  return res.status(201).json(filmAdded);
};

module.exports = addFilm;