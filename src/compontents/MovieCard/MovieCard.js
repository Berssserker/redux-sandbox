import React from 'react'
import { Card, Rate } from 'antd'

import './MovieCard.css'

import { imageURL } from '../../public/imageURL'
import { plug } from '../../public/plug'

import { CardMeta } from './CardMeta'

export const MovieCard = ({ poster_path, ...props }) => {
  const fullImageUrl = poster_path ? imageURL + poster_path : plug

  return (
    <Card cover={<img alt="Poster" src={fullImageUrl} />}>
      <CardMeta {...props} />
      <Rate count={10} allowHalf />
    </Card>
  )
}
