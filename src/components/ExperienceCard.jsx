import React from 'react'

export const ExperienceCard = ({count, experience}) => {
    return (
        <div className='col-sm-5 col-10 card bg-transparent border border-4 p-3 m-2 text-light skill-card'>
            <h4 className='about-card-n mx-auto'>{count}</h4>
            <span className='mx-auto text-center'>{experience}</span>
        </div>
    )
}
