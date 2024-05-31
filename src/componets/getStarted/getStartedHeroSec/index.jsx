import React from 'react';
import './getStartedHeroSec.scss';
import easy from '../../../assets/icons/easy.png';
import medium from '../../../assets/icons/medium.png';
import hard from '../../../assets/icons/hard.png';
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";


export default function GetStartedHeroSec() {
    return (
        <div className='get-started-hero'>
            <div className="container">
                <section>
                    <div className="hero-text">
                        <div className="heading">
                            <h2>Learen React in 3 steps</h2>
                        </div>
                    </div>
                    <div className="hero-steps-buttons">
                        <div className="step easy">
                            <div className="image">
                                <img src={easy} alt="easy" />
                            </div>
                            <div className="text">
                                <h4>easy</h4>
                                <div className="rate">
                                    <IoMdStar className='icon' />
                                    <IoMdStarOutline className='icon' />
                                    <IoMdStarOutline className='icon' />
                                </div>
                            </div>
                        </div>
                        <div className="step medium">
                            <div className="image">
                                <img src={medium} alt="medium" />
                            </div>
                            <div className="text">
                                <h4>mediam</h4>
                                <div className="rate">
                                    <IoMdStar className='icon' />
                                    <IoMdStar className='icon' />
                                    <IoMdStarOutline className='icon' />
                                </div>
                            </div>
                        </div>
                        <div className="step hard">
                            <div className="image">
                                <img src={hard} alt="hard" />
                            </div>
                            <div className="text">
                                <h4>hard</h4>
                                <div className="rate">
                                    <IoMdStar className='icon' />
                                    <IoMdStar className='icon' />
                                    <IoMdStar className='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
