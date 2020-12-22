import React from 'react'
// import Logo from '../assets/img/mercari_logo.png';
import { AuthHeader} from '../components/organisms/Header/Auth'
import { AuthFooter } from '../components/organisms/Footer/Auth'

import { useHandleSubmit } from '../hooks/useHandleSubmit'
// import { useHistory } from 'react-router-dom'

const SellPage = () => {
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
      <AuthHeader/>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
          margin: '0 auto',
        }}
      >
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
                      type='text'
                      onChange={(e) => setPrice(e.target.value)}
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
      <AuthFooter/>
    </>
  )
}
export default SellPage;
