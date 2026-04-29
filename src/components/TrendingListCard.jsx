import React from 'react'

export const TrendingListCard = ({count}) => {
  return (
    <>
      <div className='col-lg-6 col-md-8 mx-md-auto d-flex'>
        <div className='col-lg-2 col-md-3 p-1 tranding-img-card'>
          <span className='rank-badge rounded-circle px-2'>{count}</span>
          <img src="https://authentictheme.com/the-locals/wp-content/uploads/sites/48/2017/10/authentic-demo-image-00026-160x160.jpg" alt="" className='w-100 rounded-circle' />
        </div>
        <div className='col-10 p-2'>
          <div className="category badge bg-info">STYLE</div>
          <h5 className='tranding-card-title'>Perfect Location for a Business Which Prides Itself on Perfection</h5>
          <div className="card-meta">
              <span className='pe-1 font-weight-bold'>MAY 21, 2019</span>
              <span className='px-1 text-secondary'>2.3K VIEWS</span>
            </div>
        </div>
      </div>
    </>
  )
}
