import React from 'react';
import { useState, useEffect } from 'react';
import '../assets/css/Navbar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import userIcon from '../assets/images/dummypfp.png';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/images/lmay-logo.png';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
        if(window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="/">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>    
            </Navbar.Toggle> 
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
                    <Nav.Link href="/leaderboard" className={activeLink === 'leaderboard' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('leaderboard')}>LEADERBOARD</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href="/profile"><img src={userIcon} alt='profile-icon' color='white' /></a>
                    </div>
                    <HashLink to='/login'>
                      <button className='vvd'><span>LOGIN</span></button>
                    </HashLink>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

