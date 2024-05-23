import React from 'react'
import './header.scss'
import logo from '../../assets/logo/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { CgMenuLeft } from "react-icons/cg";

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <header>
                    <div className="logo">
                        <img src={logo} alt="A Compnay Logo" />
                    </div>
                    <div className="menu">
                        <NavLink activeclassname="active" to={"/"}>Home</NavLink>
                        <NavLink activeclassname="active" to={"/Routes"}>Routes</NavLink>
                        <NavLink activeclassname="active" to={"/Hookes"}>Hooks</NavLink>
                        <NavLink activeclassname="active" to={"/Redux"}>React-Redux</NavLink>
                        <NavLink activeclassname="active" to={"/Api"}>Api</NavLink>
                    </div>
                    <div className="contect">
                        <a href="https://www.linkedin.com/in/yash-babariya-a370b52a5/" target='_blank'><FaLinkedin size={30} className='icon linkdin' /></a>
                        <a href="https://github.com/yash-babariya" target='_blank'><FaGithubSquare size={30} className='icon github' /></a>
                    </div>
                    <div className="mobile-menu-icon">
                        <CgMenuLeft  className='icon'/>
                    </div>
                </header>
            </div>
        </div>
    )
}
