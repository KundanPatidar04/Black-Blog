import React from 'react'
import { BlogCard } from './BlogCard'
import { RecentCard } from './RecentCard'
import { ListCard } from './ListCard'

export const FooterBody = () => {
  return (
    <div className='border-top border-bottom py-5 d-flex'>
        <div className='col-4 p-1'>
            <h2 className="border-bottom border-secondary border-3 my-4"><span className='trending-header'>Education</span></h2>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
        </div>
        <div className='col-4 p-1'>
            <h2 className="border-bottom border-secondary border-3 my-4"><span className='trending-header'>Education</span></h2>
            <ul className='list-unstyled px-2'>
                <li className='footer-links'>
                    <a href="#" className=''>Demos</a>
                </li>
                <li className='footer-links'>
                    <a href="#" className=''>Features</a>
                </li>
                <li className='footer-links'>
                    <a href="#" className=''>Post</a>
                </li>
                <li className='footer-links'>
                    <a href="#" className=''>Categories</a>
                </li>
                <li className='footer-links'>
                    <a href="#" className=''>Shop</a>
                </li>
            </ul>
            <h2 className="border-bottom border-secondary border-3 my-4"><span className='trending-header'>Tags</span></h2>
            <ul className=''>
                <a href="#" className='tag-link badge'>#Ideas</a>
                <a href="#" className='tag-link badge'>#Indie</a>
                <a href="#" className='tag-link badge'>#Long Read</a>
                <a href="#" className='tag-link badge'>#Lookbooks</a>
                <a href="#" className='tag-link badge'>#Originals</a>
                <a href="#" className='tag-link badge'>#Sweatshirts</a>
                <a href="#" className='tag-link badge'>#Video</a>
                <a href="#" className='tag-link badge'>#Originals</a>
            </ul>
        </div>
        <div className='col-4 p-1'>
            <h2 className="border-bottom border-secondary border-3 my-4"><span className='trending-header'>articles</span></h2>
            <ListCard/>
            <ListCard/>
            <ListCard/>
            <ListCard/>
        </div>
    </div>
  )
}
