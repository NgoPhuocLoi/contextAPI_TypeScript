import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { TopMoviesContext } from "../Context/TopMoviesContext";
import useStyles from "../hooks/useStyles";

const TopMovies = () => {
  const classes = useStyles();
  const { allMovies, getAllMovies, toggleWatched } = useContext(TopMoviesContext);

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <Box mt={2} ml={2}>
      <Card raised>
        <CardHeader
          title={"Top ten movies of all time"}
          className={classes.topMoviesHeader}
          titleTypographyProps={{
            variant: "h4",
            align: "center",
            color: "primary",
          }}
        />

        <CardContent className={classes.topMoviesList}>
          <List>
            {allMovies.map((movie) => (
              <ListItem button className={classes.topMoviesItem} key={movie.imdbID}>
                <ListItemIcon>
                  <Checkbox checked={movie.Watched} onClick={() => toggleWatched(movie.imdbID)}/>
                </ListItemIcon>
                <ListItemText primary={movie.Title}></ListItemText>
              </ListItem>
            ) )}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TopMovies;


