import React from 'react'
import cardImg from '../assets/images/cardImg.jpg'

export const AboutCard = () => {
    return (
        <section>
            <div className='container d-flex flex-wrap justify-content-center p-5'>
                <div className='col-md-6 col-sm-10'>
                    <img src={cardImg} alt="" className='p-3 about-card-img' />
                </div>
                <div className='col-md-6 col-sm-10 p-lg-5 p-md-2'>
                    <span className='ps-3'>About Us</span>
                    <h3 className='about-card-h'>we always make the best</h3>
                    <p className='about-card-p'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos earum consectetur exercitationem cumque. Consequuntur ipsa, repudiandae, quos inventore ad eius libero vel maiores voluptas quisquam veniam eos totam aliquam. Aliquam.</p>
                    <button className='btn btn-outline-light rounded-0'>Contact Us</button>
                </div>
            </div>
        </section>
    )
}
