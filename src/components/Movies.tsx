import { Box, Button, Chip, PropTypes, TextField } from "@material-ui/core";
import React, { ChangeEvent, useContext, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import { ThemeContext } from "../Context/ThemeContext";
import useStyles from "../hooks/useStyles";

const Movies = () => {
  const classes = useStyles();
  const { movies, addMovie, deleteMovie } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);
  const [movie, setMovie] = useState("");

  const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>

  const onMovieInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMovie(e.target.value);
  };
  return (
    <>
      <Box display={"flex"} justifyContent="center" my={5}>
        <TextField
          label="Your favorite movie .. "
          variant="outlined"
          className={classes.movieInput}
          value={movie}
          onChange={onMovieInputChange}
        />
        <Button variant="contained" color={theme} onClick={() => {
          addMovie(movie)
          setMovie("")
        }}>
          Add
        </Button>
      </Box>

      <Box display={"flex"} justifyContent="center" flexWrap={"wrap"} mx={5}>
        {movies.map((movie) => (
          <Chip
            key={movie.id}
            label={movie.name}
            clickable
            color={chipTheme}
            className={classes.movieChip}
            onDelete={() => deleteMovie(movie.id)}
          ></Chip>
        ))}
      </Box>
    </>
  );
};

export default Movies;
