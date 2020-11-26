import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProgressBar from "./ProgressBar";
import "./Registration.styles.css";

export const Registration = () => {
  const history = useHistory()

  const [info, setInfo] = useState({
    nickname: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    year: '',
    month: '',
    day: '',
  })

  const [error, setError] = useState('')

  const displayError = () => {
    if (error.process !== '') {
      return error.process
    }
  }

  //　inlineで書くよりもここで宣言した方がいい
  const handleSubmit = async (e) => {
    e.preventDefault() //リロードさせない

    if (
      info.nickname === '' ||
      info.email === '' ||
      info.password === '' ||
      info.firstName === '' ||
      info.lastName === '' ||
      info.firstNameKana === '' ||
      info.lastNameKana === '' ||
      info.year === '' ||
      info.month === '' ||
      info.day === ''
    ) {
      setError('未入力の項目があります')
      return
    }

    try {
      // JSONのstring型のレスポンスをresponseの変数に入れる
      const response = await fetch('http://localhost:4000/users/signup', {
        // credentials: 'include',
        headers: {
          'Content-Type': 'application/json', //server側でjson -> jsに変換
        },
        method: 'POST',
        body: JSON.stringify(info), //serverは、request.bodyで受け取る　StringifyはJSON形式のinfoをjsとして受け取れる
      })

      //　response(string型)をjavascriptのオブジェクトに変換する
      const resJson = await response.json()
      if (resJson.status === 'success') {
        //　localstorageにtokenをkey,valueの形で保存する
        localStorage.setItem('token', resJson.token)

        // landing pageにユーザーを飛ばす
        history.push('/')
      } else {
        setError(resJson.message);
      }
    } catch (err) {
      setError('処理の途中で問題が発生しました。')
    }
  };

  return (
    <div className='registration'>
      <div className='registration__inner'>
        <div className='registration__header'>
          <ProgressBar />
        </div>
        <h5 className='header-font'>会員情報入力</h5>
        <div className='registration__content'>
          <div className='registration__align'>
            <form
              action='localhost:4000/signup/registration'
              method='post'
              onSubmit={handleSubmit}
            >
              <div>
                <div>{error.nickname}</div>
                <div>
                  <label htmlFor='nickname'>ニックネーム</label>
                  <div className='necessary-badge'>必須</div>
                </div>
                <div>
                  <input
                    className='form__input'
                    onChange={
                      (e) => setInfo({ ...info, nickname: e.target.value }) //スプレッド...中身だけを参照する（参照元に影響が出ない）
                    }
                    value={info.nickname}
                    id='nickname'
                    type='text'
                    placeholder='例）メルカリ太郎'
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='email'>メールアドレス</label>
                  <div className='necessary-badge'>必須</div>
                </div>
                <div>
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, email: e.target.value })
                    }
                    value={info.email}
                    className='form__input'
                    id='nickname'
                    type='text'
                    placeholder='PC・携帯どちらでも可'
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor='password'>パスワード</label>
                  <div className='necessary-badge'>必須</div>
                </div>
                <div>
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, password: e.target.value })
                    }
                    value={info.password}
                    className='form__input'
                    id='password'
                    type='text'
                    placeholder='７文字以上の半角英数字'
                  />
                </div>
              </div>
              <div>
                <p>※ 英字と数字の両方を含めて設定してください</p>
              </div>
              <div className='label-wrapper'>
                <div>
                  <input type='checkbox' className='checkbox' />
                </div>
                <div>
                  <p className='text-password'>パスワードを表示する</p>
                </div>
              </div>
              <div>
                <div>
                  <h4>本人確認</h4>
                </div>
                <div>
                  <p>
                    安心・安全にご利用いただくために、お客さまの本人情報の登録にご協力ください。他のお客さまに公開されることはありません。
                  </p>
                </div>
              </div>
              <div>
                <div className='label-wrapper'>
                  <p className='text-inline'>お名前（全角）</p>
                  <div className='necessary-badge'>必須</div>
                </div>
                <div className='input-wrapper'>
                  <div className='input-wrapper'>
                    <input
                      onChange={(e) =>
                        setInfo({ ...info, firstName: e.target.value })
                      }
                      className='form__input'
                      value={info.firstName}
                      type='text'
                      name='firstName'
                      placeholder='例）山田'
                    />
                  </div>
                  <div className='input-wrapper'>
                    <input
                      onChange={(e) =>
                        setInfo({ ...info, lastName: e.target.value })
                      }
                      className='form__input'
                      value={info.lastName}
                      type='text'
                      name='lastName'
                      placeholder='例）彩'
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className='label-wrapper'>
                  <p className='text-inline'>お名前カナ（全角）</p>
                  <div className='necessary-badge'>必須</div>
                </div>
                <div className='input-wrapper'>
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, firstNameKana: e.target.value })
                    }
                    className='form__input'
                    value={info.firstNameKana}
                    type='text'
                    name='firstNameKana'
                    placeholder='例）ヤマダ'
                  />
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, lastNameKana: e.target.value })
                    }
                    className='form__input'
                    value={info.lastNameKana}
                    type='text'
                    name='lastNameKana'
                    placeholder='例）アヤ'
                  />
                </div>
              </div>
              <div>
                <div className='label-wrapper'>
                  <p className='text-inline'>生年月日</p>
                  <div className='necessary-badge'>必須</div>
                </div>
                <div className='input-wrapper'>
                  <select
                    defaultValue='invalid'
                    onChange={(e) => setInfo({ ...info, year: e.target.value })}
                    className='form__input-date'
                  >
                    <option value='invalid'>--</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                  </select>
                  <div className='text-inline'>年</div>
                  <select
                    defaultValue='invalid'
                    onChange={(e) =>
                      setInfo({ ...info, month: e.target.value })
                    }
                    className='form__input-date'
                  >
                    <option value='invalid'>--</option>
                    <option value='12'>12</option>
                    <option value='11'>11</option>
                    <option value='10'>10</option>
                  </select>
                  <div className='text-inline'>月</div>
                  <select
                    onChange={(e) => setInfo({ ...info, day: e.target.value })}
                    defaultValue='invalid'
                    className='form__input-date'
                  >
                    <option value='invalid'>--</option>
                    <option value='31'>31</option>
                    <option value='30'>30</option>
                    <option value='29'>29</option>
                  </select>
                  <div className='text-inline'>日</div>
                </div>
              </div>
              <div>
                <p>
                  ※
                  本人情報は正しく入力してください。会員登録後、修正するにはお時間を頂く場合があります。
                </p>
              </div>
              {/* <div>{info.error}</div> */}
              <h3>{displayError()}</h3>
              <h1 className='main__text_error'>
                {error !== '' ? <p>{error}</p> : null}
              </h1>
              <div>
                <input type='submit' value='次へ進む' className='next_button' />
              </div>
              <div>
                <p>本人情報の登録について</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
