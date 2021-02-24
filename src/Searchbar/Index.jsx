import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import HalfRating from "./HalfRating";
import { useDebounce } from "../hooks";

export default function Searchbar({ onChangeSearchQuery, movies }) {
  const [searchQuery, setSearchQuery] = useState();
  const debouncedSearchQuery = useDebounce(searchQuery, 250);

  useEffect(() => {
    if (debouncedSearchQuery !== undefined) {
      onChangeSearchQuery(debouncedSearchQuery);
    }
  }, [debouncedSearchQuery, onChangeSearchQuery]);

  return (
    <div style={{ width: "500px" }}>
      <Autocomplete
        id="searchbar"
        freeSolo={movies.length > 0}
        options={movies}
        getOptionLabel={(option) => option.title}
        onInputChange={(event, newInputValue) => {
          setSearchQuery(newInputValue);
        }}
        renderOption={(option) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <div>{option.title}</div>
                <div>
                  <HalfRating rate={option.rating} />
                </div>
              </div>
              <div>{option.category}</div>
            </div>
          );
        }}
        renderInput={(params) => (
          <TextField {...params} label="Search movie" variant="outlined" />
        )}
      />
    </div>
  );
}
