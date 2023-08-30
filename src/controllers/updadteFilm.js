const { films } = require('../data/films');
const { filmIndex, findfilm } = require('../utils/findId');

const updadteFilm = (req, res) => {
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

  const idIndex = filmIndex(films, id);
  const findId = findfilm(films, id);
  if (movie_title) {
    findId.movie_title = movie_title;
  }
  if (film_director) {
    findId.film_director = film_director;
  }
  if (year) {
    findId.year = year;
  }
  if (movie_duration) {
    findId.movie_duration = movie_duration;
  }
  if (movie_title) {
    findId.genre = genre;
  }
  if (film_director) {
    findId.main_actors = main_actors;
  }
  if (year) {
    findId.rating = rating;
  }
  if (movie_duration) {
    findId.synopsis = synopsis;
  }
  if (movie_duration) {
    findId.review = review;
  }
  films.splice(idIndex, 1, findId);
  return res.status(200).json({ message: 'film modified.' });
};

module.exports = updadteFilm;