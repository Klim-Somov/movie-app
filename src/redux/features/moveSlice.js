import { createSlice } from "@reduxjs/toolkit";

const movieSlise = createSlice({
    name: "movie",
    initialState: {
        moviesList: [],
        movie: {},

    },
})

export default movieSlise.reducer