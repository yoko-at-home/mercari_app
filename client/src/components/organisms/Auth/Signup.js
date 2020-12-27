import React from 'react'
// import {Authentsstration } from "./components/Auth/Registration";
import { Button } from '../../atom/Button'
import { useHistory } from 'react-router-dom'
import './Signup.styles.css'

export const Signup = () => {
  const history = useHistory()
  return (
    <div className='signup'>
      <div className='signup__inner'>
        <div className='signup__content'>
          <div className='signup__header'>
            <h5 style={{ fontSize: 20 }}>新規会員登録</h5>
          </div>
          <div className='signup__buttons'>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <Button
                type='auth'
                platform='email'
                onClick={() => history.push('/signup/registration')}
                customize={{
                  backgroundColor: '#EA352E',
                  border: '1px solid #EA352E',
                }}
                fullWidth
              />
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <Button
                type='auth'
                platform='google'
                onClick={() => alert('google button clicked')}
                customize={{
                  border: '1px solid black',
                  backgroundColor: 'transparent',
                }}
                fullWidth
              />
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <Button
                type='auth'
                platform='facebook'
                onClick={() => alert('facebook button clicked')}
                customize={{
                  border: '1px solid black',
                  backgroundColor: '#385185',
                }}
                fullWidth
              />
            </div>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <Button
                type='auth'
                platform='apple'
                customize={{
                  border: '1px solid black',
                  backgroundColor: '#000000',
                }}
                onClick={() => alert('apple button clicked')}
                fullWidth
              />
            </div>
            <div style={{ marginTop: 30 }}>
              <p style={{ color: '#A9A9A9', fontSize: 14 }}>
                登録することで、利用規約とプライバシーポリシーに同意したものとみなされます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
