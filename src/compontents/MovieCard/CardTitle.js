import React from 'react'

export const CardTitle = ({ title, vote_average }) => {
  return (
    <div className="title">
      <span>{title}</span>
      <span>{Math.ceil(vote_average * 10) / 10}</span>
    </div>
  )
}
