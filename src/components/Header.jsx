import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link, NavLink } from 'react-router'

export const Header = () => {
  return (
    <>
    <header className='container mx-auto m-2'>
        <div className='d-flex justify-content-between col-12'>
            <div className='my-auto d-none d-md-block'><Link className='btn btn-danger px-4 rounded-5'>Subscribe</Link></div>
            <h1><Link to='/' className='navbar-brand fw-bold'>Black Blog</Link></h1>
            <div className='my-auto  me-2'><input type="text" placeholder='search' className='bg-transparent border-0 p-1 text-secondary' /><FiSearch className='fw-bolder' /></div>
        </div>
        <div className='border-top border-bottom border-secondary m-2'>
            <ul className='d-flex list-unstyled col-lg-6 col-sm-9 justify-content-between mx-auto my-2 py-  2 px-auto '>
                <li><NavLink to='/' className='navbar-link'>Home</NavLink></li>
                <li><NavLink to='/about' className='navbar-link'>AboutUs</NavLink></li>
                <li><NavLink to='/Gallery' className='navbar-link'>Gallery</NavLink></li>
                <li><NavLink to='/manageBlog' className='navbar-link'>Manage Blog</NavLink></li>
                <li><NavLink to='/allBlogs' className='navbar-link'>All Blogs</NavLink></li>
            </ul>
        </div>
    </header>
    </>
  )
}
