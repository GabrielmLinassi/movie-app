import Rating from "@material-ui/lab/Rating";
import React from "react";
import MultiSelect from "./MultiSelect";
import RatingLabels from "./RatingLabens";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Ratings({ onChangeFilter, filters }) {
  return (
    <MultiSelect
      data={data}
      label="Rating"
      renderValue={(selected) => <RatingLabels items={selected} />}
      primary={(value) => <Rating value={value} max={10} readOnly />}
      onChangeFilter={(changed) => {
        onChangeFilter({ ...filters, ratings: changed });
      }}
    />
  );
}
