import React from 'react';
import './learnMore.scss'
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";

export default function LearnMore() {
    return (
        <div className='learn-more'>
            <div className="container">
                <section>
                    <div className="heading">
                        <h2>Why learn React ?</h2>
                    </div>
                    <div className="content">
                        <h4>
                            Learning React can be highly beneficial for several reasons, especially if you are interested in web development. Here are some key reasons why learning React is valuable:
                        </h4>
                        <div className="points">
                            <div className="point">
                                <h3>1.Component-Based Architecture:</h3>
                                <p>React allows developers to build encapsulated components that manage their own state, making it easier to manage and reuse code across different parts of an application.</p>
                            </div>
                            <div className="point">
                                <h3>2.Virtual DOM:</h3>
                                <p>React uses a virtual DOM to efficiently update and render components. This results in improved performance, especially in complex applications where frequent updates are necessary.</p>
                            </div>
                            <div className="point">
                                <h3>3.Popularity and Community Support:</h3>
                                <p>React is one of the most popular JavaScript libraries, with a large and active community. This means abundant resources, tutorials, libraries, and tools are available to help you learn and troubleshoot issues.</p>
                            </div>
                            <div className="point">
                                <h3>4.Job Market Demand:</h3>
                                <p>Many companies are adopting React for their web applications, creating a high demand for developers skilled in React. Learning React can significantly enhance your job prospects and career growth.</p>
                            </div>
                            <div className="point">
                                <h3>5.Ecosystem and Integration:</h3>
                                <p>React has a rich ecosystem, including libraries like Redux for state management, React Router for navigation, and Next.js for server-side rendering and static site generation. This makes it a versatile tool for various types of applications.</p>
                            </div>
                            <div className="point">
                                <h3>6.Flexibility:</h3>
                                <p>React can be used to build both web and mobile applications (with React Native). This flexibility allows you to apply your React skills across different platforms.</p>
                            </div>
                            <div className="point">
                                <h3>7.Declarative Syntax:</h3>
                                <p>React’s declarative syntax makes it easier to understand and predict how your application will behave, improving code readability and maintainability.</p>
                            </div>
                            <div className="point">
                                <h3>8.JSX (JavaScript XML):</h3>
                                <p>JSX, a syntax extension for JavaScript, allows you to write HTML-like code within JavaScript. This makes the code more readable and easier to write, especially for those with an HTML background.</p>
                            </div>
                            <div className="point">
                                <h3>9.Strong Backing:</h3>
                                <p>React is maintained by Facebook and a community of individual developers and companies, ensuring it stays up-to-date with modern web development trends and best practices.</p>
                            </div>
                            <div className="point">
                                <h3>10.Learning Curve:</h3>
                                <p>While React has a learning curve, it is considered relatively easier to learn compared to some other frameworks due to its simplicity and the abundance of learning resources available.</p>
                            </div>
                            <div className="get-started">
                                <Link>
                                    <button className='solid'>
                                        Get Started
                                        <FaAngleDoubleRight className='icon' />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
