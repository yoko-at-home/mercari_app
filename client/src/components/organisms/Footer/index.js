import React from 'react'
import {AuthFooter} from './Auth'
import {LandingFooter} from './Landing'

export const Footer = ({ type = 'landing' }) => {
  const types = {
    landing: <LandingFooter />,
    auth: <AuthFooter />,
  }
  return types[type];
}
