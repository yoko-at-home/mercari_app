import React from 'react'
import { LandingHeader } from './Landing';
import { AuthHeader } from './Auth';

export const Header = ({ type = 'landing' }) => {
  const types = {
    landing: <LandingHeader />,
    auth:<AuthHeader />
  }
  return types[type];
}
