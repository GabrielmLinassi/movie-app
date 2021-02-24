function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export const getUniqueGenres = (movies) => {
  const genres = movies.map((movie) => movie.category).filter(onlyUnique);
  return genres;
};

export const genericSearch = (movie, properties, query) => {
  return properties.some((property) => {
    const value = movie[property];
    return value.toString().toLowerCase().includes(query.toLowerCase());
  });
};

export const genericFilter = (movie, filters) => {
  const ratings =
    filters.ratings?.length > 0
      ? filters.ratings.includes(Math.floor(movie.rating))
      : filters;

  const genres =
    filters.genres?.length > 0
      ? filters.genres.some((genre) => {
          return genre.toLowerCase().includes(movie.category.toLowerCase());
        })
      : filters;

  return ratings && genres;
};
