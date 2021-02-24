import React from "react";

import { movies } from "../mock-data/Movies";
import MultiSelect from "./MultiSelect";
import { getUniqueGenres } from "../Helpers";

export default function Genre({ onChangeFilter, filters }) {
  return (
    <MultiSelect
      data={getUniqueGenres(movies)}
      label="Genres"
      renderValue={(selected) => selected.join(", ")}
      primary={(value) => value}
      onChangeFilter={(changed) => {
        onChangeFilter({ ...filters, genres: changed });
      }}
    />
  );
}
