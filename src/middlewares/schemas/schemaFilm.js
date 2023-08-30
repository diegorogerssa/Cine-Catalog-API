const { z } = require('zod');

const currentYear = new Date();
const filmschema = z.object({
  movie_title: z.string().min(1, "Must have at least one letter"),
  film_director: z.string().min(1, "Must have at least one letter"),
  year: z.number().min(1500, "Release must be greater than 1499.").max(currentYear.getFullYear(), `Release must be less than  ${currentYear.getFullYear()}`),
  movie_duration: z.number().min(15, "Must be at least 20 minutes."),
  genre: z.string().min(1, "Must have at least one letter"),
  main_actors: z.string().array(),
  rating: z.string().min(1, "Must have at least one letter"),
  synopsis: z.string().min(1, "Must have at least one letter"),
  review: z.number()
})

module.exports = {
  filmschema
};