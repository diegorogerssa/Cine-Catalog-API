const { filmschema } = require('./schemas/schemaFilm');

const validateKeys = (req, res, next) => {
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
  const validDatafilm = filmschema.safeParse({
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
module.exports = validateKeys;
