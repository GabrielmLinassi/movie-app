import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    maxWidth: 250,
  },
}));

export default function MultiSelect({
  data,
  onChangeFilter,
  label,
  renderValue,
  primary,
}) {
  const classes = useStyles();
  const [rating, setRating] = React.useState([]);

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  useEffect(() => {
    onChangeFilter(rating);
  }, [rating]);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="rating-multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="rating-mutiple-checkbox-label"
        id="rating-mutiple-checkbox"
        multiple
        value={rating}
        onChange={handleChange}
        label="Rating"
        renderValue={(selected) => renderValue(selected)}
      >
        {data.map((value) => {
          return (
            <MenuItem key={value} value={value}>
              <Checkbox checked={rating.indexOf(value) > -1} />
              <ListItemText primary={primary(value)} />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
