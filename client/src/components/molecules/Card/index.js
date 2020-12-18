import React from 'react'
import { ItemCard } from './Item'

export const Card = ({ type = "item", price, imgUrl, description, likes }) => {
  const types = {
    item: (
      <ItemCard
        price={price}
        imgUrl={imgUrl}
        description={description}
        likes={likes}
      />
    ),
  }
  return types[type]
}
