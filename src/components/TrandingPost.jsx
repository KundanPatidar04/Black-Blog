import React from 'react'
import mainImg from '../assets/images/blog.jpg'

export const TrandingPost = () => {
    return (
        <div className="w-50 news_post">
            <div className="news-post-data">
                <img src={mainImg} className="news-big-img" alt=""></img>
                <div className="w-100">
                    <a href="#" className="category-text-1 badge">Lifestyle</a>
                    <h1 className="post-big-title"><a href="">Winners of the 2022 Nature Conservancy Photo Contest</a></h1>
                    <ul className="posted-by">
                        <li>BY admin</li>
                        <li> - Apr 10, 2023</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
