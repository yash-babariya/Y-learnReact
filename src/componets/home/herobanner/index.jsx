import React from 'react'
import './herobaner.scss'
import logo from '../../../assets/logo/logo.png'

export default function HeroBanner() {
    return (
        <div className='hero-banner'>
            <div className="container">
                <section>
                    <div className="hero-text">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="haeding">
                            <h1>Build <span>Reusable</span> Frontend Components in 3 Minutes</h1>
                        </div>
                    </div>
                    <div className="hero-buttons">
                        <button className='solid'>Learn More</button>
                        <button className='border'>Get Started</button>
                    </div>
                </section>
            </div>
        </div>
    )
}
