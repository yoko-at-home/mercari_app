import React from 'react'
import { AuthLayout } from './Auth';

export const Layout = ({ type = 'auth', content }) => {
  const types = {
    auth: <AuthLayout content ={content}/>,
  }
  return types[type];
}
