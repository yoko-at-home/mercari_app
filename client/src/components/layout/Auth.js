import React from 'react'

import { Header } from '../organisms/Header'
import { Footer } from '../organisms/Footer'

export const AuthLayout = ({ content }) => {
  return (
    <>
      <Header type='auth' />
      <>{content}</>
      <Footer type='auth'/>
    </>
  )
}
