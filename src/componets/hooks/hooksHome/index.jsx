import React from 'react';
import './hooksHome.scss'
import { MdTouchApp } from "react-icons/md";


export default function HooksHome() {
    return (
        <div className='hookes-home'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h2>React Hooks</h2>
                    </div>
                    <div className="contant">
                        <p>A React hook is a special function in React that allows you to use state and other React
                            features in functional components. Hooks enable you to manage component state, handle
                            side effects, and reuse logic across components without needing to write class components. </p>
                    </div>
                    <div className="hooks-types">
                        <div className="heading-hooks">
                            <h3>type of hooks</h3>
                        </div>
                        <div className="hooks-box">
                            <div className="type">
                                <h3>UseState <MdTouchApp className='icons' /></h3>
                            </div>
                            <div className="type">
                                <h3>UseEffect <MdTouchApp className='icons' /></h3>
                            </div>
                            <div className="type">
                                <h3>UseContext <MdTouchApp className='icons' /></h3>
                            </div>
                            <div className="type">
                                <h3>UseReducer <MdTouchApp className='icons' /></h3>
                            </div>
                            <div className="type">
                                <h3>UseCallback <MdTouchApp className='icons' /></h3>
                            </div>
                            <div className="type">
                                <h3>UseMemo <MdTouchApp className='icons' /></h3>
                            </div>
                            <div className="type">
                                <h3>UseRef <MdTouchApp className='icons' /></h3>
                            </div>
                            <div className="type">
                                <h3>UseLayoutEffect <MdTouchApp className='icons' /></h3>
                            </div>
                            <div className="type">
                                <h3>UseEmparativeEffect <MdTouchApp className='icons' /></h3>
                            </div>
                            <div className="type">
                                <h3>UseDebugValue <MdTouchApp className='icons' /></h3>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
