import React from 'react'
import { Heart } from '../assets/svg'
import itemImg from '../assets/img/mercari_item.jpg'
import './Card.styles.css'

export const Card = ({
  price = 6000,
  imgurl = itemImg,
  description = '商品名',
  likes = 0,
}) => {
  return (
    <>
      <a href='http://www.google.com'>
        <div className='card'>
          <div className='card__preview'>
            <div className='card__preview--price'>
              <div className='card__preview--text'>
                <p>¥{price}</p>
              </div>
            </div>
            <img src={imgurl} alt='' />
          </div>

          <div className='card__caption'>
            <div className='card__caption-description'>
              <span>{description}</span>
              <div className='card__caption-likes'>
                <div className='card__like-icon'>
                  <Heart />
                </div>
                <div className='card__like-text'>
                  <span id='count'>{likes}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}
