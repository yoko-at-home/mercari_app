import React, { useState } from 'react'

const SellPage = () => {
  const [price, setPrice] = useState('0')
  const [description, setDescription] = useState('商品の説明を入力')
  const [priceError, setPriceError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (price === '' || '0') {
      setPriceError('金額を入力してください')
      return
    }
    if (!price.match(/^[0-9]*$/)) {
      setPriceError('文字が含まれています')
      return
    }
    if (description === '' || '商品の説明を入力') {
      setDescriptionError('商品の説明を入力してください')
      return
    }

    console.log('送信できました')
  }
  return (
    <>
      <h1>sell page</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Price:
              <input
                type='text'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </label>
          </div>
          {priceError && (
            <div>
              <p style={{ color: 'red' }}>{priceError}</p>
            </div>
          )}
          <div>
            <label>
              Description:
              <input
                type='description'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </label>
          </div>
          {descriptionError && (
            <div>
              <p style={{ color: 'red' }}>{descriptionError}</p>
            </div>
          )}
          <button>出品する</button>
        </form>
      </div>
    </>
  )
}

export default SellPage
