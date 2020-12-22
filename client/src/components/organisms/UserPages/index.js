import React from 'react'

import { SellPage } from './Sell'
import { ItemsPage } from './Items'

export const UserPages = ({ type = 'sell' }) => {
  const types = {
    sell: <SellPage />,
    items: <ItemsPage />,
  }
  return types[type]
}
