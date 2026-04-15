import React from 'react'
import crdimg from '../assets/images/cartimg.jpg'
import { Link } from 'react-router'
import { SearchPost } from './SearchPost'

export const SearchCard = () => {
  return (
    <>
      <div className='p-4 card SearchCard'>
        <div>
          <h6 className='py-2 mb-2 title text-center rounded bg-light'>Search</h6>
          <div className='mt-4'>
            <input type="text" name="" id="" placeholder='Search Keywords...' className='border rounded p-3 w-100' />
          </div>
        </div>
        <div className='pt-2 mt-4'>
          <h6 className='py-2 mb-2 title text-center rounded bg-light'>Recent Post</h6>
          <div className='mt-4'>
            <SearchPost/>
            <SearchPost/>
            <SearchPost/>
            <SearchPost/>
          </div>
        </div>
        <div className='mt-4 pt-2 text-center'>
          <h6 className='bg-light py-2'>Tags Cloud</h6>
          <div className='mt-4'>
            <Link className='rounded text-dark tagcloud'>BUSINESS</Link>
            <Link className='rounded text-dark tagcloud'>FINANCE</Link>
            <Link className='rounded text-dark tagcloud'>MARKETING</Link>
            <Link className='rounded text-dark tagcloud'>FASHION</Link>
            <Link className='rounded text-dark tagcloud'>BRIDE</Link>
            <Link className='rounded text-dark tagcloud'>LIFESTYLE</Link>
            <Link className='rounded text-dark tagcloud'>TRAVEL</Link>
            <Link className='rounded text-dark tagcloud'>BEAUTY</Link>
            <Link className='rounded text-dark tagcloud'>VIDEO</Link>
            <Link className='rounded text-dark tagcloud'>AUDIO</Link>
          </div>
        </div>
      </div>
    </>
  )
}
