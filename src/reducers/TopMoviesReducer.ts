import { TopMoviesActionTypes } from "./types";

const { GET_ALL_MOVIES, TOGGLE_WATCHED } = TopMoviesActionTypes;
interface Movie {
  imdbID: string;
  Title: string;
  Watched: boolean;
}

export type TopMoviesState = Movie[];

type TopMoviesAction =
  | {
      type: typeof GET_ALL_MOVIES;
      payload: Movie[];
    }
  | {
      type: typeof TOGGLE_WATCHED;
      payload: string;
    };

export const TopMoviesReducer = (
  state: TopMoviesState,
  action: TopMoviesAction
) => {
  switch (action.type) {
    case GET_ALL_MOVIES:
      return action.payload;
    case TOGGLE_WATCHED:
      return state.map((movie) =>
        movie.imdbID === action.payload
          ? { ...movie, Watched: !movie.Watched }
          : movie
      );
    default:
      return state;
  }
};
