import React from 'react'
import { format } from 'date-fns'

// import { MovieGenres } from './MovieGenres'

export const CardDescription = ({ overview, release_date }) => {
  return (
    <div>
      <div className="date">{release_date ? format(new Date(release_date), 'MMMM d, yyyy') : 'Date not found :<'}</div>
      <div className="genre">
        <span>Genre not found</span>
      </div>
      <div className="description-text">{overview ? overview : 'Description not found :<'}</div>
    </div>
  )
}
