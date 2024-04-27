import React, { useState, useEffect } from 'react';
import NavLinks3 from './NavLinks3';
import { HashLink } from 'react-router-hash-link';
import { ReactComponent as Logo } from '/path/to/logo.svg'; 

const NavBar = () => {
    const [isTop, setIsTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
      const handleScroll = () => {
        setIsTop(window.pageYOffset < 10);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{position: "fixed", width: '100vw', justifyContent: 'start', backgroundColor: 'white'}}>
            <div className="nav-container">
                <div className="logo-and-menu">
                    <HashLink to="/newhome">
                        <Logo style={{ width: '170px' }} />
                    </HashLink>
                    <button onClick={toggleMenu} className="menu-button">
                    </button>
                </div>
                <div className={`menu ${isOpen ? "is-open" : ""}`}>
                    <NavLinks3 />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

