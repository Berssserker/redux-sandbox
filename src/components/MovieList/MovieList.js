import React from 'react'
import './MovieList.css'
import { useSelector } from 'react-redux'

import { MovieCard } from '../MovieCard'

export const MovieList = () => {
  const generalListData = useSelector((state) => state.movies.movies)
  return (
    <section className="movie-list">
      {generalListData?.map((item) => {
        const { id, ...itemProps } = item
        return <MovieCard key={id} {...itemProps} />
      })}
    </section>
  )
}
