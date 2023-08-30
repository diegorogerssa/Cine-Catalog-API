const filmIndex = (films, id) => {
  return films.findIndex((film) => film.id == id);
}

const findfilm = (films, id) => {
  return films.find((film) => film.id == id);
}

module.exports = {
  filmIndex,
  findfilm
};
