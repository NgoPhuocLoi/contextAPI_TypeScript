import { useState } from "react";
import { createContext } from "react";
import { ContextProps } from "./constInterface";
import { v4 } from "uuid";

interface Movie {
  id: string;
  name: string;
}

interface MovieContextInitialValue {
  movies: Movie[];
  addMovie: (name: string) => void;
  deleteMovie: (name: string) => void;
}

const initialValue = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};

export const MovieContext =
  createContext<MovieContextInitialValue>(initialValue);

const MovieContextProvider = ({ children }: ContextProps) => {
  const [movies, setMovies] = useState<Movie[]>(initialValue.movies);

  const addMovie = (name: string) => setMovies([...movies, { id: v4(), name }]);
  const deleteMovie = (id: string) =>
    setMovies(movies.filter((movie) => movie.id !== id));

  const movieContextValue = {
    movies,
    addMovie,
    deleteMovie,
  };
  return (
    <MovieContext.Provider value={movieContextValue}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
