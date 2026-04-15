import React from 'react'
import img1 from '../assets/images/1.jpg'

export const FeatureCard = ({count, title}) => {
    return (
        <div className="feature-news-box">
            <div className="feature-news-image">
                <img src={img1} alt=""></img>
                <span className="news-no">{count}</span>
            </div>
            <div className="feature-news-heading">
                <a href="#" className="category-text-4">food</a>
                <h4>{title}</h4>
            </div>
        </div>
    )
}
