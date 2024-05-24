import React from 'react'
import './herobaner.scss'
import logo from '../../../assets/logo/logo.png'

export default function HeroBanner() {
    return (
        <div className='hero-banner'>
            <div className="container">
                <section>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="hero-text">

                        <div className="hero-buttons">
                            <button className='solid'>Learn More</button>
                            <button className='border'>Get Started</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
