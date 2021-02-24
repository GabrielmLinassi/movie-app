import Rating from "@material-ui/lab/Rating";

export default function RatingLabels({ items }) {
  return items
    .map((item) => <Rating key={item} value={item} max={item} readOnly />)
    .reduce((prev, curr) => [prev, ", ", curr]);
}
