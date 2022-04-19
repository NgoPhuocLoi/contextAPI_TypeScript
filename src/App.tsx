import { Grid } from "@material-ui/core";
import "./App.css";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import TopMovies from "./components/TopMovies";
import {
  AuthContextProvider,
  MovieContextProvider,
  ProgressContextProvider,
  ThemeContextProvider,
  TopMoviesProvider,
} from "./Context";

function App() {
  return (
    <div className="App">
      <TopMoviesProvider>
        <AuthContextProvider>
          <MovieContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>

                <ToggleThemeBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MovieContextProvider>
        </AuthContextProvider>
      </TopMoviesProvider>
    </div>
  );
}

export default App;
