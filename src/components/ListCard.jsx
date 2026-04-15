import React from 'react'

export const ListCard = () => {
  return (
    <div className="side-list-item d-flex mb-4 border-bottom">
      <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=100" alt="Lifestyle" className='col-3' ></img>
      <div className="ms-3">
        <p className="category">LIFESTYLE</p>
        <h4 className="headline-xs">Plans Lodged to Transform Former Ann Summers Store</h4>
      </div>
    </div>
  )
}
