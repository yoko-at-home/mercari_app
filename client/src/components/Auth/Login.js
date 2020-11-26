import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import "../../styles/global.css";
import './AuthStyles.css'
import './AuthButton.styles.css'

import { FacebookButton } from "./FacebookButton";
import { GoogleButton } from "./GoogleButton";
import { AppleButton } from './AppleButton'


export const Login = () => {
  const history = useHistory()

  const [info, setInfo] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()

    // if (info.email === '') {
    //   setError({ メールアドレス: 'メールアドレスを入力してください。' })
    // }
    // if (info.password === '') {
    //   setError({ パスワード: 'パスワードを入力してください。' })
    // }
    if (
      info.mail === '' ||
      info.password ===''
    ) {
      // console.log('entered err')
      setError('入力漏れがあります')
      return
    }
    console.log('info', info);
    // response -> string型
    // '{"status": "success"}'
      const response = await fetch('http://localhost:4000/users/login', {
        // credentials: 'include',
        headers: {
          // 'Access-Control-Allow-Origin': 'http://localhost:4000',
          'Content-Type': 'application/json',
        },
      method: 'POST',
        body: JSON.stringify(info),
      })
    // console.log(info);
      // '{"status": "success"}'.json() -> { status : "success"}
      // json string型をjavascriptのオブジェクトに変換する
      const resJavascript = await response.json()

      // console.log(resJavascript.status) // "success", "fail"
       if (resJavascript.status === 'success') {
      //   // クッキーをつける
      // } else {
      //   setError(resJavascript.message)
      localStorage.setItem('token', resJavascript.token)

      // landing pageにユーザーを飛ばす
      history.push('/')
    } else {
      setError(resJavascript.message);
    }
  };
  return (
    <>
      <div className='main__no-account'>
        <div className='section__center'>
          <ul className='btn__wrap'>
            <div className='main__text'>アカウントをお持ちでない方はこちら</div>
            <li className='list__btn'>
              <Link
                to='/signup/registration'
                style={{
                  display: 'block',
                  borderRadius: 3,
                  border: '1px solid black',
                  backgroundColor: 'transparent',
                }}
              >
                <button className='btn-new btn-default btn-align'>
                  <div className='icon-mail'></div>
                  <div className='btn-text'>新規会員登録</div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className='main'>
        <div className='section__center'>
          <ul className='btn__wrap'>
            <li className='list__btn'>
              <GoogleButton />
            </li>
            <li className='list__btn'>
              <FacebookButton />
            </li>
            <li className='list__btn'>
              <AppleButton />
            </li>
          </ul>
          <h4 className='main__text_error'>{error}</h4>
          <form method='post' onSubmit={handleSubmit} style={{ width: '100%' }}>
            <div style={{ marginTop: 20, width: '100%' }}>
              <div style={{ margin: '10px 0' }}>
                <input
                  onChange={(e) => setInfo({ ...info, email: e.target.value })}
                  value={info.email}
                  className='form__input'
                  type='text'
                  placeholder='メールアドレス'
                />
              </div>
              <div style={{ margin: '10px 0' }}>
                <input
                  onChange={(e) =>
                    setInfo({ ...info, password: e.target.value })
                  }
                  value={info.password}
                  className='form__input'
                  type='text'
                  placeholder='パスワード'
                />
              </div>
            </div>
            <button
              className='btn-default btn-align'
              style={{ background: 'red' }}
            >
              <Link to='/signup' className='button__anchor'>
                <input
                  type='submit'
                  value='ログイン'
                  style={{ background: 'red', border: 0, color: 'white' }}
                />
              </Link>
            </button>
          </form>

          <div style={{ width: '100%', margin: '8px 0' }}>
            <Link to='/signup' className='forgot__password'>
              パスワードをお忘れの方
            </Link>
          </div>
        </div>
      </div>
    </>
  )
};
