const films = [
  {
    id: 1,
    movie_title: 'Eternal Love',
    film_director: 'Isabella Lee',
    year: 2023,
    movie_duration: 150,
    genre: 'Romance',
    main_actors: ['Emma Williams', 'Daniel Anderson', 'Ava Scott'],
    rating: 'PG',
    synopsis:
      'Experience a heartwarming tale of love and destiny that transcends time and space.',
    review: 4.9,
  },
  {
    id: 2,
    movie_title: 'Comedy Chaos',
    film_director: 'Samuel Rodriguez',
    year: 2021,
    movie_duration: 90,
    genre: 'Comedy',
    main_actors: ['Sophie Martinez', 'Kevin Adams', 'Liam Thompson'],
    rating: 'PG-13',
    synopsis:
      'Get ready for side-splitting laughter as unexpected events lead to hilarious chaos.',
    review: 4.0,
  },
];

let currentId = 2;

module.exports = {
  films,
  currentId,
};
