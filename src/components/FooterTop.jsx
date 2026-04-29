import React from 'react'

export const FooterTop = () => {
    return (
        <div className='col-lg-6 col-md-8 py-5 mx-auto text-center'>
            <h2>Sign Up for Our Newsletters</h2>
            <p className='text-secondary font-weight-bold'>Get notified of the best deals on our WordPress themes.</p>
            <div className='footer-subscribe'>
                <input className='w-75 p-1 border border-secondary bg-dark ' type="email" name="" id="" placeholder='Enter your email' />
                <button className='border-0 bg-dark py-1 px-3'>subscribe</button>
            </div>
            <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <small >By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the storage of the data submitted through this form.</small>
            </label>
        </div>
    )
}
