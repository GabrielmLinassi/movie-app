import { useState } from "react";
import styled from "styled-components";

import Searchbar from "./Searchbar/Index";
import Filters from "./Filters/Index";

import { movies } from "./mock-data/Movies";
import { genericFilter, genericSearch } from "./Helpers";

export default function App() {
  const [query, setQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({});

  const resultMovies = movies
    .filter((movie) => genericSearch(movie, ["title"], query))
    .filter((movie) => genericFilter(movie, activeFilters));

  return (
    <Searchbox>
      <Searchbar
        onChangeSearchQuery={(query) => setQuery(query)}
        movies={resultMovies}
      />
      <Filters
        movies={movies}
        filters={activeFilters}
        onChangeFilter={(changedFilterProperty) => {
          setActiveFilters(changedFilterProperty);
        }}
      />
    </Searchbox>
  );
}

const Searchbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
