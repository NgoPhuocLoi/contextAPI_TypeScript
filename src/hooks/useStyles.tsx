import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    positionSelect: {
      color: "white",
      borderBottom: "1px solid #fff",
    },
    floatBtn: {
        position: "fixed",
        right: "3rem",
        bottom:" 3rem"
    },
    movieInput :{
      marginRight: "5px"
    },
    movieChip:{
      fontSize: "2rem",
      padding: "30px 10px",
      margin: "5px"
    },

    // TopMovies components
    topMoviesHeader: {
      paddingBottom: 0 
    },
    topMoviesList: {
      paddingTop: 0
    },
    topMoviesItem: {
      paddingTop: "2px",
      paddingBottom: "2px"
    }
  })
);

export default useStyles