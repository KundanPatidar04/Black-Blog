import React from 'react'
import { Link } from 'react-router'

export const SectionNav = (props) => {
    return (
        <>
            <div className='row align-items-center p-0'>
                <div className='col-md-8'>
                    <h4 className='text-dark fw-bold mb-0'>{props.title}</h4>
                </div>
                <div className='col-md-4 text-end d-none d-md-block'>
                    <Link className='btn btn-sm btn-primary'>See More</Link>
                </div>
            </div>
        </>
    )
}
