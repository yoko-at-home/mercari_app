import React, { useState, useEffect } from 'react'
import '../styles/pages.css'
import { Card } from '../components/Card'
import jwt from 'jsonwebtoken'

import { useHistory } from 'react-router-dom'

const ItemsPage = () => {
  const history = useHistory()
  const [data, setData] = useState()
  const items = [undefined, undefined]
  useEffect(() => {
    const fetchData = async (id) => {
      const response = await fetch('http://localhost:4000/api/users/items', {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(id),
      })
      const resJson = response.json()
      setData(resJson)
    }
    const token = localStorage.getItem('token')
    try {
      const user = jwt.verify(token, process.env.REACT_APP_JWT_KEY)
      fetchData(user.id)
    } catch (err) {
      history.push('/')
    }
  }, [])
  return (
    <div>
      <div>
        <h3>Yokoが出品した商品</h3>
        <div className='items__layout'>
          <ul className='items__layout--grid'>
            {items.map((item, index) => {
              return (
                <li>
                  <Card />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ItemsPage
