import { Navbar, Container, Nav } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import React from 'react'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { animateScroll as scroll } from 'react-scroll';

export default function NavBar() {

  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      //onScroll is used to check if the page has been scrolled after all of the html has been renedered on the page
      //and this is done using useEffect
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // we are telling the browser to call the onScroll function every time the user scrolls the window.
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])



  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" onClick={() => scroll.scrollToTop()} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="https://github.com/jayantatwal" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} target="_blank"
              rel="noopener noreferrer">Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jayantatwal" target='blank'><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/jayantatwal" target='blank'><img src={navIcon4} alt="" /></a>
              <a href="https://www.instagram.com/jayant.atwal/" target='blank'><img src={navIcon3} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => window.open("https://www.linkedin.com/in/jayantatwal", '_blank')}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
