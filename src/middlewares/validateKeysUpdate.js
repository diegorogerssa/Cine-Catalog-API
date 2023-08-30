const { filmschemaUpdate } = require('./schemas/schemaFilmUpdate');

const validateKeysUpdate = (req, res, next) => {
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
  const validDatafilm = filmschemaUpdate.safeParse({
    movie_title,
    film_director,
    year,
    movie_duration,
    genre,
    main_actors,
    rating,
    synopsis,
    review 
  });

  if (!validDatafilm.success) {
    const { message } = validDatafilm.error.errors[0]
    const { path } = validDatafilm.error.issues[0]
    if(message === "Required"){
      return res.status(400).json({message: `${path} is required`})
    }
    return res.status(400).json({message:`${path}:  ${message}`})
  }

  next();
};
module.exports = validateKeysUpdate;