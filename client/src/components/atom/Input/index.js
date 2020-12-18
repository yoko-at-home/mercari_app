import React from 'react'
import { DefaultInput } from './DefaultInput'

export const Input = ({ type = 'default' }) => {
  const types = {
    default: <DefaultInput />,
  }
  return types[type]
}
