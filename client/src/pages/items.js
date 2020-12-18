import React, { useState, useEffect } from 'react'
import '../styles/pages.css'
import { Card } from '../components/molecules/Card'
import jwt from 'jsonwebtoken'
import { Link } from 'react-router-dom';

import { useHistory } from 'react-router-dom'

const ItemsPage = () => {
  const history = useHistory();
  const [items, setItems] = useState([])
  // const [data, setData] = useState()
  const [nickname, setNickname] = useState('')

  useEffect(() => {
    const fetchData = async (userId) => {
      const response = await fetch('http://localhost:4000/api/users/items', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: userId }),
      })
      const resJson = await response.json()
      console.log('resJson', resJson)
      setItems(resJson.data)
    }
    const token = localStorage.getItem('token')
    try {
      const user = jwt.verify(token, process.env.REACT_APP_JWT_KEY)
      setNickname(user.nickname)
      fetchData(user.id)
    } catch (err) {
      history.push('/')
    }
  }, [])

  return (
    <div>
      <div>
        <div style={{ display: 'flex' }}>
          <h3>{nickname}さんが出品した商品</h3>
          <button className='btn'>
            <Link to='/'>トップページへ</Link>
          </button>
          <button className='btn'>
            <Link
              to='/items/sell'
            >出品ページへ
            </Link>
          </button>
        </div>
        <div className='items__layout'>
          <ul className='items__layout--grid'>
          {items.map((item, index) => {
            return (
              <li key={index}>
                <Card
                  type="item"
                  price={item.price}
                  imgUrl={item.img_url}
                  description={item.description}
                  likes={item.likes}
                />
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ItemsPage;
