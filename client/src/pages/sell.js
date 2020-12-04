import React, { useState } from 'react'

import { AuthHeader } from '../components/Auth/AuthHeader'
import { AuthFooter } from '../components/Auth/AuthFooter'

const SellPage = () => {
  const [itemName, setItemName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('0')
  const [itemNameError, setItemNameError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [priceError, setPriceError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (itemName === '') {
      setItemNameError('商品名を入力してください')
      return
    }
    if (description === '') {
      setDescriptionError('商品の説明を入力してください')
      return
    }
    if (price === '0') {
      setPriceError('入力してください')
      return
    }
    if (price === '') {
      setPriceError('販売価格を入力してください')
      return
    }
    if (!price.match(/^[0-9]*$/)) {
      setPriceError('文字が含まれています')
      return
    }

    console.log('送信できました')
  }
  return (
    <>
      <AuthHeader />
      <div className='main'>
        <h1 style={{ marginTop: '15px' }}>出品</h1>

        <div className='section__center'>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                商品名
                <div className='necessary-badge'>必須</div>
                <div className='notice'>
                  {itemNameError && <p>{itemNameError}</p>}
                </div>
                <input
                  className='form__input'
                  type='text'
                  onChange={(e) => setItemName(e.target.value)}
                  value={itemName}
                />
              </label>
            </div>
            <div>
              <label>
                商品の説明
                <div className='necessary-badge'>必須</div>
                <div className='notice'>
                  {descriptionError && <p>{descriptionError}</p>}
                </div>
                <input
                  className='form__input'
                  type='text'
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </label>
            </div>
            <div className='input-wrapper'>
              <label>
                <div>
                  販売価格
                  <div className='necessary-badge'>必須</div>
                  {priceError && <p className='notice'>{priceError}</p>}
                  <div>
                    <div className='yen'>¥</div>
                    <input
                      className='form__input-price'
                      type='text'
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                  </div>
                </div>
              </label>
            </div>
            <button>出品する</button>
          </form>
        </div>
      </div>
      <AuthFooter />
    </>
  )
}

export default SellPage
