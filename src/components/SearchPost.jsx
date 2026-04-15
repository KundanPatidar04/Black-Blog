import React from 'react'
import crdimg from '../assets/images/cartimg.jpg'
import { Link } from 'react-router'

export const SearchPost = () => {
    return (
        <div className='mt-3 d-flex'>
            <img src={crdimg} alt="" className='suggest-img rounded' />
            <div className='d-flex flex-column ms-3'>
                <Link className='text-dark title'>Consultant Business</Link>
                <span className='text-muted'>13th March 2023</span>
            </div>
        </div>
    )
}
