import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookIcon } from '../../assets/svg'
import './styles.css'

export const FacebookButton = () => {
  return (
    <Link
      to='/signup/registration'
      style={{
        display: 'block',
        borderRadius: 3,
        border: '1px solid black',
        backgroundColor: '#385185',
      }}
    >
      <button className='btn-facebook btn-default btn-align'>
        <div className='icon-mail'>
          <FacebookIcon />
        </div>
        <div className='btn-text'>Facebookで登録する</div>
      </button>
    </Link>
  )
}
