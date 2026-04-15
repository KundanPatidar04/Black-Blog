import React from 'react'
import { Link } from 'react-router'

export const FooterBottom = () => {
    return (
        <div className='col-12 p-4'>
            <h1 ><Link to='/' className='navbar-brand fw-bold'>Black Blog</Link></h1>
            <label htmlFor="">Lifestyle Blog & Magazine WordPress Theme</label>
        </div>
    )
}
