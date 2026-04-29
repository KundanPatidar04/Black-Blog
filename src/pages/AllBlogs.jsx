import React from 'react'
import { Link } from 'react-router'

export const AllBlogs = () => {
  return (
    <div className="container text-center my-5">
        <div className="icon">🏜️</div>
        <h1 className='empty-head text-info'>All blog</h1>
        <h1 className='empty-head'>It's a bit quiet in here...</h1>
        <p className='empty-para mx-auto'>There is nothing to show at this time. We're either tidying up or the content is taking a nap.</p>
        <Link className="btn btn-outline-light" to="/" >Take me home</Link>
    </div>
  )
}
