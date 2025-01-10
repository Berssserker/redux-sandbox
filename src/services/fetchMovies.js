import { createAsyncThunk } from '@reduxjs/toolkit'

import { apiKey } from '../public/apiKey'

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async ({ text, page }, { rejectWithValue }) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(text.trim())}&page=${page.toString()}`
  try {
    const response = await fetch(url)
    const body = await response.json()
    return body.results
  } catch (error) {
    return rejectWithValue('Говно')
  }
})
