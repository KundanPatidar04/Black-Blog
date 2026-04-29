import React from 'react'
import { FooterTop } from './FooterTop'
import { FooterBody } from './FooterBody'
import { FooterBottom } from './FooterBottom'

export const Footer = () => {
    return (
        <>
            <section className='dark-section border-top border-3'>
                <div className='container'>
                    <FooterTop />
                    <FooterBody />
                    <FooterBottom />
                </div>
            </section>
        </>
    )
}
    