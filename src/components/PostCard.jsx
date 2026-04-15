import React from 'react'
import Cartimg from '../assets/images/cartimg.jpg'
import { Link } from 'react-router';

export const Postcard = () => {
  return (
      <div className='card'>
        <img src={Cartimg} alt="" className='rounded-top' />
        <div className='card-body'>
          <ul className='list-unstyled d-flex justify-content-between align-item-center'>
            <li>
              <span className='badge bg-soft rounded-pill'>eComerce</span>
            </li>
            <li>
              <span className='text-muted'>29th nov 2023</span>
            </li>
          </ul>
          <Link to="/blocg" className='text-dark h5 title'>On the other hand we provide denounce</Link>
          <Link className='d-block mt-3 card-link'>Read More</Link>
        </div>
      </div>
  )
}
