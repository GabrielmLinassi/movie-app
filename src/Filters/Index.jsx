import Genre from "./Genre";
import Ratings from "./Ratings";

export default function Filters({ filters, onChangeFilter }) {
  return (
    <>
      <Ratings onChangeFilter={onChangeFilter} filters={filters} />
      <Genre onChangeFilter={onChangeFilter} filters={filters} />
    </>
  );
}
