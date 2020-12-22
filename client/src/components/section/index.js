import React from 'react'
import { AppAdvertisement } from './AppAdvertisement'
import { Banner } from './Banner';
import { Items } from './Items'

export const Section = ({ type = '' }) => {
  const types = {
    app: <AppAdvertisement />,
    banner: <Banner />,
    items: <Items/>
  }
  return types[type];
}
