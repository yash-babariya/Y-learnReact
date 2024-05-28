import React from 'react';
import './routerHero.scss';
import heroRouter from '../../../assets/images/react router.png'

export default function RouterHero() {
    return (

        <div className='router-hero'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h2>React Routes</h2>
                    </div>
                    <div className="contant">
                        <p>
                            React Router is a standard library for routing in React applications. It enables the navigation among views of various components in a React application, allows changing the browser URL, and keeps the UI in sync with the URL. React Router plays an essential role in developing single-page applications (SPAs) where the user experience is similar to navigating a traditional multi-page website.
                        </p>
                    </div>
                    <div className="hero-img">
                        <img src={heroRouter} alt="hero-router" />
                    </div>
                </section>
            </div>
        </div>

    )
}
