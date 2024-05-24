import React, { useState, useEffect, useRef } from 'react';
import './header.scss';
import logo from '../../assets/logo/logo.png';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";

export default function Header() {
    const menuItems = [
        { path: "/", label: "Home" },
        { path: "/Routes", label: "Routes" },
        { path: "/Hookes", label: "Hooks" },
        { path: "/Redux", label: "React-Redux" },
        { path: "/Api", label: "Api" }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const menuRefs = useRef(menuItems.map(() => React.createRef()));

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                setActiveIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % menuItems.length;
                    menuRefs.current[newIndex].current.click();
                    return newIndex;
                });
            } else if (e.key === 'ArrowLeft') {
                setActiveIndex((prevIndex) => {
                    const newIndex = (prevIndex - 1 + menuItems.length) % menuItems.length;
                    menuRefs.current[newIndex].current.click();
                    return newIndex;
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [menuItems]);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const currentIndex = menuItems.findIndex(item => item.path === currentPath);
        setActiveIndex(currentIndex !== -1 ? currentIndex : 0);
    }, [menuItems]);

    return (
        <div className="header">
            <div className="container">
                <header>
                    <div className="logo">
                        <img src={logo} alt="A Company Logo" />
                    </div>
                    <div className="menu">
                        {menuItems.map((item, index) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => (isActive ? "active" : "")}
                                ref={menuRefs.current[index]}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                    <div className="contact">
                        <a href="https://www.linkedin.com/in/yash-babariya-a370b52a5/" target='_blank' rel="noopener noreferrer">
                            <FaLinkedin size={30} className='icon linkdin' />
                        </a>
                        <a href="https://github.com/yash-babariya" target='_blank' rel="noopener noreferrer">
                            <FaGithubSquare size={30} className='icon github' />
                        </a>
                    </div>
                    <div className="mobile-menu-icon">
                        <CgMenuLeft className='icon' />
                    </div>
                </header>
            </div>
        </div>
    );
}
