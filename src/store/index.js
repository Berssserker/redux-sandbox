import { configureStore } from '@reduxjs/toolkit'

import moviesReducer from './moviesSlise'

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
})
