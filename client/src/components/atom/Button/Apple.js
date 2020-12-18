import React from 'react'
import { Link } from 'react-router-dom'
import { AppleIcon } from '../../../assets/svg'
import './styles.css'

export const AppleButton = () => {
  return (
    <Link
      to='/signup/registration'
      style={{
        display: 'block',
        borderRadius: 3,
        border: '1px solid black',
        backgroundColor: '#000000',
      }}
    >
      <div className='btn-apple btn-default btn-align'>
        <div className='icon-mail'>
          <AppleIcon />
        </div>
        <div className='btn-text'>Appleで登録する</div>
      </div>
    </Link>
  )
}
