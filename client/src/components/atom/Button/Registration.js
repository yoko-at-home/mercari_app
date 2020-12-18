import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

export const RegistrationButton = () => {
  return (
    <Link
      to='/signup/registration'
      style={{
        display: 'block',
        borderRadius: 3,
        backgroundColor: '#EA352E',
        border: '1px solid #EA352E',
      }}
    >
      <button className='btn-mail_signup btn-default btn-align'>
        <div className='icon-mail'>{""}</div>
        <div className='btn-text'>新規会員登録</div>
      </button>
    </Link>
  )
}
