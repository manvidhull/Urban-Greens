import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import NavLinks3 from './NavLinks3';
import './NavBar.css'; 

const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const scrollHandler = () => setTop(window.pageYOffset < 10);
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`navbar ${top ? '' : 'navbar-scroll'}`}>
            <div className="navbar-container">
                <HashLink to="/newhome">
                    <img src="/logo.svg" alt="Logo" className="navbar-logo" />
                </HashLink>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <svg className="menu-icon" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 011.414 1.414l-4.828 4.829 4.828 4.828z" />
                        ) : (
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                        )}
                    </svg>
                </button>
                <div className={`nav-links ${isOpen ? 'show' : ''}`}>
                    <NavLinks3 />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
