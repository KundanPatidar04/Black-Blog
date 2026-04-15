import React from 'react'

export const RecentCard = () => {
  return (
    <>
    <div className='col-6 border border-secondary p-0'>
        <div className='col-12'>
            <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=500" alt="" className="img-fluid mb-2" />
        </div>
        <div className='col-12 p-4'>
            <div className="category badge bg-info">STYLE</div>
            <h5 className='recent-card-title'>Perfect Location for a Business Which Prides Itself on Perfection</h5>
            <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem cupiditate quos deserunt esse iusto maiores quis illum ducimus pariatur? Magni esse totam hic? Corporis assumenda laboriosam non. Laudantium tenetur delectus natus odit vero velit? Dolores ratione atque quod delectus reiciendis.</p>
            <button className='btn btn-secondary '>view post</button>
        </div>
    </div>
    </>
  )
}
