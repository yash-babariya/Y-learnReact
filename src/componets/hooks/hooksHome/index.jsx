import React from 'react';
import './hooksHome.scss'


export default function HooksHome() {
    return (
        <div className='hookes-home'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h2>React Hooks</h2>
                        <h5>A React hook is a special function in React that allows you to use state and other React
                            features in functional components. Hooks enable you to manage component state, handle
                            side effects, and reuse logic across components without needing to write class components. </h5>
                    </div>
                    <div className="hooks-types">
                        <div className="heading">
                            <h3>type of hooks</h3>

                        </div>
                        <div className="hooks-box">
                            <div className="box">
                                <h3>UseState</h3>
                               
                            </div>
                            <div className="box">
                                <h3>UseEffect</h3>
                            </div>
                            <div className="box">
                                <h3>UseContext</h3>
                            </div>
                            <div className="box">
                                <h3>UseReducer</h3>
                            </div>
                            <div className="box">
                                <h3>UseCallback</h3>
                            </div>
                            <div className="box">
                                <h3>UseMemo</h3>
                            </div>
                            <div className="box">
                                <h3>UseRef</h3>
                            </div>
                            <div className="box">
                                <h3>UseLayoutEffect</h3>
                            </div>
                            <div className="box">
                                <h3>UseEmparativeEffect</h3>
                            </div>
                            <div className="box">
                                <h3>UseDebugValue</h3>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
