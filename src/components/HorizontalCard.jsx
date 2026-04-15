import React from 'react'
import img1 from '../assets/images/1.jpg'

export const HorizontalCard = () => {
    return (
        <div className="other_news_box">
            <img src={img1} alt=""></img>
            <div className="short-news">
                <a href="" className="category-text-2 badge">Tech</a>
                <h5><a href="" className='text-light small'>Handcr Bijouterie from Tanzanian Designers</a></h5>
            </div>
        </div>
    )
}
