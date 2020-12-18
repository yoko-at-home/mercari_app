import React from 'react'
import { Link } from 'react-router-dom'
import { EnvelopeIcon } from '../../assets/svg'
import './styles.css'

export const EmailButton = () => {
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
        <div className='icon-mail'>{<EnvelopeIcon />}</div>
        <div className='btn-text'>メールアドレスで登録する</div>
      </button>
    </Link>
  )
}
