import React, { useState, useEffect,useRef } from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIconRef = useRef(null);
const navRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  
    const handleClickOutside = (event) => {
      if (
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target) &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <div>
      <div className={scroll ? 'header scrolled' : 'header'}>
        <div className="menu">
        <div className={`bx bx-menu ${isMenuOpen ? '  bx-x' : ''}`} id ="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)} ref={menuIconRef}>
          
       
       
      </div>
      <a href="/" className="logo">
            My <span>Movie</span>
          </a>
          <nav className={`navbar ${isMenuOpen ? 'open' : ''}`} ref={navRef}>
            <a href="/" >
              Home
            </a>
            <a href="/">Movie</a>
            <a href="/">TV Series</a>
           
              
              <a href="/search">Search <i className="bx bx-search"></i></a>
             
            
          </nav>
          <div className="login">
            {/* <div className="search">
        <input type="text" placeholder="Search" />
      </div> */}
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
