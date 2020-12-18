import React from 'react'
import { Link } from 'react-router-dom'
import { AuthButton } from './Auth'


export const Button = ({
  type = 'auth',
  platform = 'facebook',
  to,
  customize,
  onClick,
  fullWidth = false,
}) => {
  const types = {
    auth: {
      component: <AuthButton platform={platform} />,
      customStyle: { borderRadius: 3 },
    },
  }

  if (to) {
    return (
      <Link
        to={to}
        // style={{
        //   display: 'block',
        //   borderRadius: 3,
        //   backgroundColor: types[type].backgroundColor,
        //   border: types[type].border,
        // }}
        style={{
          display: 'block',
          width: fullWidth && '100%',
          ...customize,
          ...types[type].customStyle,
        }}
      >
        {types[type].component}
      </Link>
    )
  }

  return (
    <button
      style={{
        display: 'block',
        width: fullWidth && '100%',
        ...customize,
        ...types[type].customStyle,
      }}
      onClick={onClick}
    >
      {types[type].component}
    </button>
  )
}
