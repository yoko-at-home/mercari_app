import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Button } from '../atom/Button'
import './Signup.styles.css'

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
      const response = await fetch('http://localhost:4000/api/users/login', {
        // credentials: 'include',
      method: 'POST',
        headers: {
          // 'Access-Control-Allow-Origin': 'http://localhost:4000',
          'Content-Type': 'application/json',
        },
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
    <div className='signup'>
      <div className='signup__inner'>
        <div className='signup__content'>
          <div className='signup__header'>
            <div className='main__text'>アカウントをお持ちでない方はこちら</div>
            <Button
              type='auth'
              platform='registration'
              onClick={() => history.push('/signup/registration')}
              customize={{
                border: '1px solid #0199E8',
                backgroundColor: '#0199E8',
              }}
              fullWidth
            />
          </div>

          <div className='signup__buttons'>
            <div style={{ width: '100%', margin: '8px 0' }}>
              <Button
                type='auth'
                platform='google'
                onClick={() => alert('google button clicked')}
                customize={{
                  border: '1px solid black',
                  backgroundColor: 'transpaent',
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
            <h4 className='main__text_error'>{error}</h4>
            <form
              method='post'
              onSubmit={handleSubmit}
              style={{ width: '100%' }}
            >
              <div style={{ marginTop: 20, width: '100%' }}>
                <div style={{ margin: '10px 0' }}>
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, email: e.target.value })
                    }
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

              <Button
                type='auth'
                platform='login'
                // onClick={() => history.push('')}
                customize={{
                  border: '1px solid red',
                  backgroundColor: 'red',
                }}
                fullWidth
              >
                <input
                  type='submit'
                  value='ログイン'
                  style={{ background: 'red', border: 0, color: 'white' }}
                />
              </Button>
            </form>

            <div style={{ width: '100%', margin: '8px 0' }}>
              <Link to='/signup' className='forgot__password'>
                パスワードをお忘れの方
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
