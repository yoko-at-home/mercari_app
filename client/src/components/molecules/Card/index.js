import React from 'react'
import { ItemCard } from './Item'

export const Card = ({ type = "item", price, imgurl, description, likes }) => {
  const types = {
    item: (
      <ItemCard
        price={price}
        imgurl={imgurl}
        description={description}
        likes={likes}
      />
    ),
  }
  return types[type]
}
