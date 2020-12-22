import React from 'react'
import { AuthInput } from './Auth'
import { LandingInput } from './Landing'

export const Input = ({ type = 'landing', data, setData, placeholder }) => {
  const types = {
    landing: <LandingInput data={ data } setData={setData} />,
    auth: <AuthInput data={ data } setData={setData} placeholder={ placeholder }/>,
  }
  return types[type]
}
