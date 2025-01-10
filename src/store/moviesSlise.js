import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { apiKey } from '../public/apiKey'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (text) => {
  const page = '1'
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(text)}&page=${page}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`${response.status}, ${response.statusText}`)
  }
  const body = await response.json()
  return body.results
})

export const moviesSlise = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    page: '1',
    status: null,
    error: null,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload
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
        state.movies = action.payload || []
      })
  },
})

export const { setPage, setText } = moviesSlise.actions

export default moviesSlise.reducer
