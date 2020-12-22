import React from 'react'

export const AuthInput = ({ data,
  setData,
  placeholder = 'メールアドレス' }) => {
  return (
    <div>
      <input
        onChange={setData}
        value={data}
        className='form__input'
        type='text'
        placeholder={placeholder} />
    </div>
  )
}
