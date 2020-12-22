import React from 'react'
// import {GetStarted} from './GetStarted'
import { Login } from './Login'
import { Registration } from './Registration'
import { Signup } from './Signup'


export const Auth = ({ type = 'signup' }) => {
  const types = {
    // getstarted: <GetStarted />,
    signup: <Signup />,
    login: <Login />,
    registration: <Registration />,
  }
  return types[type]
}
