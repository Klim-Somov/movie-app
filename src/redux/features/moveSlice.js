import { createSlice } from "@reduxjs/toolkit";

const movieSlise = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movie: {},
  },
  reducer: {
    getMovies(name) {
      return name;
    },
    setMovies: (state, { payload }) => {
      state.moviesList = payload;
    },
  },
});

export const { getMovies, setMovies } = movieSlise.actions;

export default movieSlise.reducer;
