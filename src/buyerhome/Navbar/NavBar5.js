import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import NavLinks3 from './NavLinks5.js';
import './NavBar.css'; 

const NavBar = () => {
    const [isTop, setIsTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsTop(window.pageYOffset < 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${!isTop && 'navbar-scrolled'}`}>
            <div className="navbar-content">
                <HashLink to="/newhome">
                    <img src="/logo.svg" alt="Logo" className="navbar-logo"/>
                </HashLink>
                <button className="menu-button" onClick={toggleMenu}>
                    {isOpen ? 'Close Menu Icon' : 'Open Menu Icon'}
                </button>
                <div className={`menu ${isOpen ? 'menu-open' : 'menu-closed'}`}>
                    <NavLinks3 />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

