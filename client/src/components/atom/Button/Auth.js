import React from 'react'
import { Facebook, Google, Apple, Email } from '../../../assets/svg'

export const AuthButton = ({ platform = 'email' }) => {
  const platforms = {
    facebook: {
      icon: <Facebook width={18} fill='white' />,
      textColor: 'white',
      content: 'Facebook',
    },
    google: {
      icon: <Google width={18} fill='white' />,
      textColor: 'black',
      content: 'Google',
    },
    email: {
      icon: <Email width={18} fill='white' />,
      textColor: 'white',
      content: 'メールアドレス',
    },
    apple: {
      icon: <Apple width={18} fill='white' />,
      textColor: 'white',
      content: 'Apple',
    },
    registration: {
      icon: false,
      textColor: 'white',
      content: '新規会員登録',
    },
    login: {
      icon: false,
      textColor: 'white',
      content: 'ログイン',
    },
  }
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        itemsCenter: 'center',
        justifyContent: 'center',
        padding: '12px 0',
      }}
    >
      <div style={{ position: 'absolute', left: 15 }}>
        {platforms[platform].icon}
      </div>
      {!platforms.icon ? (
        <div style={{ fontSize: 14, color: platforms[platform].textColor }}>
          {platforms[platform].content}
        </div>
      ) : (
        <div style={{ fontSize: 14, color: platforms[platform].textColor }}>
          {platforms[platform].content}で登録
        </div>
      )}
    </div>
  )
}
