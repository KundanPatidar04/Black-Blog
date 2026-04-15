import React from 'react'

export const ExperienceCard = ({count, experience}) => {
    return (
        <div className='col-5 card bg-transparent border border-4 p-3 m-2 text-light skill-card'>
            <h4 className='about-card-n mx-auto'>{count}</h4>
            <span className='mx-auto'>{experience}</span>
        </div>
    )
}
