import React from 'react'
import { AuthHeader } from '../components/Auth/AuthHeader'
import { AuthFooter } from '../components/Auth/AuthFooter'

import { useHandleSubmit } from '../hooks/useHandleSubmit'
// import { useHistory } from 'react-router-dom'

export const SellPage = () => {
  const [
    price,
    description,
    priceError,
    descriptionError,
    handleSubmit,
    setPrice,
    setDescription,
  ] = useHandleSubmit()

  return (
    <>
      <AuthHeader />
      <div className='main'>
        <h1 style={{ marginTop: '15px' }}>出品</h1>

        <div className='section__center'>
          <form onSubmit={handleSubmit}>
            <div className='input-wrapper'></div>
            <div>
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
                      onChange={(e) => {
                        // console.log('hello')
                        setPrice(e.target.value)
                      }}
                      value={price}
                    />
                  </div>
                </div>
              </label>

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

            <button>出品する</button>
          </form>
        </div>
      </div>
      <AuthFooter />
    </>
  )
}

export default SellPage
