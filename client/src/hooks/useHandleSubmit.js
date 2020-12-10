import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const useHandleSubmit = () => {
  const history = useHistory()
  const [price, setPrice] = useState('0')
  const [description, setDescription] = useState('')
  const [priceError, setPriceError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')

  const token = localStorage.getItem('token')
  const imageUrl =
    'https://static.mercdn.net/c!/w=240/thumb/photos/m67570932924_1.jpg?1607477013'

  const handleSubmit = async (e) => {
    e.preventDefault()
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
    if (description.length === 0) {
      setDescriptionError('入力してください')
      return
    }

    // console.log('送信できました')
    try {
      const response = await fetch('http://localhost:4000/api/items/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          imgUrl: imageUrl,
          price: price,
          description: description,
          token: token,
        }),
      })
      const resJson = await response.json()
      // console.log('resJson', resJson)
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return [
    price,
    description,
    priceError,
    descriptionError,
    handleSubmit,
    setPrice,
    setDescription,
    imageUrl,
    token,
  ]
}

export { useHandleSubmit }