import React, { createContext, useReducer } from "react";
import topMoviesPromises from "../api/getAllMovies";
import { TopMoviesReducer, TopMoviesState } from "../reducers/TopMoviesReducer";
import { TopMoviesActionTypes } from "../reducers/types";
import { ContextProps } from "./constInterface";

interface TopMoviesContextInitialValue {
  allMovies: TopMoviesState;
  getAllMovies: () => Promise<void>;
  toggleWatched: (id: string) => void
}

const { GET_ALL_MOVIES, TOGGLE_WATCHED } = TopMoviesActionTypes;

const initialValue: TopMoviesState = [];

export const TopMoviesContext = createContext<TopMoviesContextInitialValue>({
  allMovies: initialValue,
  getAllMovies: () => Promise.resolve(void 0),
  toggleWatched: (id: string) => {}
});

const TopMoviesProvider = ({ children }: ContextProps) => {
  const [allMovies, dispatch] = useReducer(TopMoviesReducer, initialValue);

  const getAllMovies = async () => {
    const topMovieResponses = await Promise.all(topMoviesPromises);
    console.log(topMovieResponses);
    dispatch({
      type: GET_ALL_MOVIES,
      payload: topMovieResponses.map((res) => ({
        ...res.data,
        Watched: false,
      })),
    });
  };

  const toggleWatched = (id: string) => {
    dispatch({type: TOGGLE_WATCHED, payload: id})
  }

  const topMoviesValue = {
    allMovies,
    getAllMovies,
    toggleWatched
  };
  return (
    <TopMoviesContext.Provider value={topMoviesValue}>
      {children}
    </TopMoviesContext.Provider>
  );
};

export default TopMoviesProvider;
