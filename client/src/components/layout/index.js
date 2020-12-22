import React from 'react'
import { AuthLayout } from './Auth';

export const Layout = ({ type = 'auth' }) => {
  const types = {
    auth: <AuthLayout />,
  }
  return types[type];
}
