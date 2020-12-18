import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleIcon } from '../../assets/svg'
import './styles.css'

export const GoogleButton = () => {
  return (
    <Link
      to='/signup/registration'
      style={{
        display: 'block',
        borderRadius: 3,
        border: '1px solid black',
        backgroundColor: 'transparent',
      }}
    >
      <button className='btn-google btn-default btn-align'>
        <div className='icon-mail'>
          <GoogleIcon />
        </div>
        <div className='btn-text'>Googleで登録する</div>
      </button>
    </Link>
  )
}
