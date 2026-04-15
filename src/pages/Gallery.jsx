import React from 'react'
import { Link } from 'react-router'

export const Gallery = () => {
  return (
    <>
      <div className='container mb-5'>
        <div className='px-4 my-4'>
          <h4 className='gallery-title' >We Are Getblog Studio. <br /> Australia based art & design studio</h4>
        </div>
        <div className='col-md-12 d-flex flex-wrap'>
          <div className='col-md-3 col-sm-6 d-flex flex-column justify-content-evenly'>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/3.94d06b6d92e8ecc62c46.jpg' alt="" className='odd-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/3.94d06b6d92e8ecc62c46.jpg' alt="" className='odd-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/3.94d06b6d92e8ecc62c46.jpg' alt="" className='odd-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/3.94d06b6d92e8ecc62c46.jpg' alt="" className='odd-col-img' />
            </div>
          </div>
          <div className='col-md-3 col-sm-6 d-flex flex-column justify-content-evenly'>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/2.322d4717c48295bf8aeb.jpg' alt="" className='even-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/2.322d4717c48295bf8aeb.jpg' alt="" className='even-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='	https://getblog.vercel.app/static/media/2.322d4717c48295bf8aeb.jpg' alt="" className='even-col-img' />
            </div>
          </div>
          <div className='col-md-3 col-sm-6 d-flex flex-column justify-content-evenly'>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/3.94d06b6d92e8ecc62c46.jpg' alt="" className='odd-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/3.94d06b6d92e8ecc62c46.jpg' alt="" className='odd-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/3.94d06b6d92e8ecc62c46.jpg' alt="" className='odd-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='https://getblog.vercel.app/static/media/3.94d06b6d92e8ecc62c46.jpg' alt="" className='odd-col-img' />
            </div>
          </div>
          <div className='col-md-3 col-sm-6 d-flex flex-column justify-content-evenly'>
            <div className='img-item m-2'>
              <img src='	https://getblog.vercel.app/static/media/2.322d4717c48295bf8aeb.jpg' alt="" className='even-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='	https://getblog.vercel.app/static/media/2.322d4717c48295bf8aeb.jpg' alt="" className='even-col-img' />
            </div>
            <div className='img-item m-2'>
              <img src='	https://getblog.vercel.app/static/media/2.322d4717c48295bf8aeb.jpg' alt="" className='even-col-img' />
            </div>
          </div>
        </div>
        {/* <div>
          <ul className='list-unstyled w-25 d-flex justify-content-evenly mx-auto my-2'>
            <Link className='btn btn-outline-primary rounded-circle' > {"<"} </Link>
            <li className='my-auto'>1</li>
            <li className='my-auto'>2</li>
            <li className='my-auto'>3</li>
            <li className='my-auto'>4</li>
            <Link className='btn btn-outline-primary rounded-circle' > {">"} </Link>
          </ul>
        </div> */}
      </div>
    </>
  )
}
