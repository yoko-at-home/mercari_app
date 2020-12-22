import React from 'react'
import Logo from '../../../assets/img/mercari_logo.png'

export const AuthHeader = () => {
  return (
    <div>
      <div style={{ width: 180, padding: '30px 0', margin: '0 auto' }}>
        <img src={Logo} alt='logo' />
      </div>
    </div>
  )
}
