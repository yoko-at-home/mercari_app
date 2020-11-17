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

  //ここでからの配列を作ってuseState定義するのだったと思うけど..
  // const EmailError = ''
  // const [error, setError] = useState({
  //   email: '',
  //   password: '',
  // })
  // const displayError = () => {
  //   if (error.process !== '') {
  //     return error.process
  //   }
  // }
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
      console.log('entered err')
      setError('入力にエラーがありました')
      return
    }
    // response -> string型
    // '{"status": "success"}'
    try {
      const response = await fetch('http://localhost:4000/users/login', {
        // credentials: 'include',
        method: 'POST',
        headers: {
          // 'Access-Control-Allow-Origin': 'http://localhost:4000',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
      })
      // '{"status": "success"}'.json() -> { status : "success"}
      // json string型をjavascriptのオブジェクトに変換する
      const resJavascript = await response.json()

      // console.log(resJavascript.status) // "success", "fail"
      // if (resJavascript.statusCode === 'success') {
      //   // クッキーをつける
      // } else {
      //   setError(resJavascript.message)
      localStorage.setItem('token', resJavascript.token)

      // landing pageにユーザーを飛ばす
      history.push('/')
    } catch (err) {
      setError('処理の途中でエラーが発生しました。')
    }
  }

  return (
    <>
      <div className='main__no-account'>
        <div className='section__center'>
          <ul className='btn__wrap'>
            <div className='main__text'>アカウントをお持ちでない方はこちら</div>
            <li className='list__btn'>
              <Link to='./Signup'>
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
          <ul className='btn__wrap'>
            <li className='list__btn'>
              <div className='btn-text__bottom'>
                <div>{info.error}</div>
                <form
                  method='post'
                  onSubmit={handleSubmit}
                  style={{ width: '100%' }}
                >
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, email: e.target.value })
                    }
                    value={info.email}
                    className='form__input'
                    type='text'
                    placeholder='メールアドレス'
                  />
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, password: e.target.value })
                    }
                    value={info.password}
                    className='form__input'
                    type='text'
                    placeholder='パスワード'
                  />
                </form>
              </div>
            </li>
            <ul className='btn__wrap'>
              <li className='list__btn'>
                <Link
                  to='/'
                  style={{
                    display: 'block',
                    borderRadius: 3,
                    backgroundColor: '#EA352E',
                    border: '1px solid #EA352E',
                  }}
                >
                  <button className='btn-mail_signup btn-default btn-align'>
                    <div className='icon-mail'></div>
                    <input
                      type='submit'
                      value='ログイン'
                      className='next_button'
                    />
                  </button>
                </Link>
              </li>
            </ul>
            <li className='list__btn'>{/* <LoginCaptchaBlock /> */}</li>
            <li className='list__btn'>
              <Link to='/signup'>パスワードをお忘れの方</Link>
            </li>
          </ul>
        </div>
        <div>{error !== '' ? <p>{}</p> : null}</div>
      </div>
    </>
  )
}
