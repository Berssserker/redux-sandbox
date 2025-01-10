import { createSlice } from '@reduxjs/toolkit'

import { fetchMovies } from '../services/fetchMovies'

export const moviesSlise = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: null,
    error: null,
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'resolved'
        state.movies = action.payload
        if (action.payload && action.payload.length === 0 && state.text) {
          state.status = 'rejected'
          state.error = 'Not found'
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        console.log(action.payload)
        state.status = 'rejected'
        state.error = action.payload
      })
  },
})

export const { setMovies } = moviesSlise.actions

export default moviesSlise.reducer
