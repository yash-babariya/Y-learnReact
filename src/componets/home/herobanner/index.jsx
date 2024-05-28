import React from 'react'
import './herobaner.scss'
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom'

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
                            <h1>why learn <span>React ?</span></h1>
                        </div>
                    </div>
                    <div className="hero-buttons">
                        <Link to="/learnMore"><button className='solid'>Learn More</button></Link>
                        <Link to="/getStarted"><button className='border'>Get Started</button></Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
