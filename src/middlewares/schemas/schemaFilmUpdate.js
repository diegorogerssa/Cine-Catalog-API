const { z } = require('zod');

const currentYear = new Date();
const filmschemaUpdate = z.object({
  movie_title: z.string().min(1, "Must have at least one letter").optional(),
  film_director: z.string().min(1, "Must have at least one letter").optional(),
  year: z.number().min(1500, "Release must be greater than 1499.").max(currentYear.getFullYear(), `Release must be less than  ${currentYear.getFullYear()}`).optional(),
  movie_duration: z.number().min(15, "Must be at least 20 minutes.").optional(),
  genre: z.string().min(1, "Must have at least one letter").optional(),
  main_actors: z.string().array().optional(),
  rating: z.string().min(1, "Must have at least one letter").optional(),
  synopsis: z.string().min(1, "Must have at least one letter").optional(),
  review: z.number().optional()
})

module.exports = {
  filmschemaUpdate
};