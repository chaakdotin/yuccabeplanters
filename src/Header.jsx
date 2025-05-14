import React, { useEffect, useState, useRef } from 'react';

import { Outlet } from 'react-router';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { gsap, ScrollTrigger } from "gsap/all";
import './header.css';

const Header = () => {
  gsap.registerPlugin(ScrollTrigger);
  const location = useLocation();
  const header = useRef(null);
  const cursor = useRef(null);
  window.addEventListener("mousemove", (e) => {
    gsap.to('.cursor', {
      duration: 0,
      x: e.clientX,
      y: e.clientY,
    });
    // cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
  })
  if(location.pathname == '/'){
    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
      let triggerPoint = window.innerHeight * 0.9; // 200vh
      if (scrollPosition >= triggerPoint) {
        document.getElementById('header').classList.remove("d-none");
      } else {
        document.getElementById('header').classList.add("d-none");
      }
    });
  }
  return (
    <>
      <div className='cursor' ref={cursor}></div>
      <div className={`navbar-container position-fixed z-index-99 w-100 ${location.pathname == '/' ? 'd-none' : ''}`} id="header" ref={header}>
        <Navbar data-bs-theme="light">
          <Container fluid className="navbar-container-padding">
            <Navbar.Brand href="/" className="menu-logos" >
              <img
                src="/yp.svg"
                alt="Logo" width={'100%'} />
            </Navbar.Brand>
            <Nav className="w-100 d-flex justify-content-start" defaultActiveKey={location.pathname}>
              <Nav.Link href="/" >
               <span className='dot'></span> Home
              </Nav.Link>
              <Nav.Link href="/explore" >
                <span className='dot'></span> Explore
              </Nav.Link>
              <Nav.Link href="/collections" >
                <span className='dot'></span> Collections
              </Nav.Link>
              <Nav.Link href="/services" >
                <span className='dot'></span> Services
              </Nav.Link>
              <Nav.Link href="/about-us" >
                <span className='dot'></span> About
              </Nav.Link>
              <Nav.Link href="/projects" >
                <span className='dot'></span> Projects
              </Nav.Link>
              <Nav.Link href="/blogs" >
                <span className='dot'></span> Blogs
              </Nav.Link>
              <Nav.Link href="/contact" >
                <span className='dot'></span> Contact
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className='w-100' style={{height: location.pathname == '/' ? '0px' : location.pathname == '/work' ? '70px' : location.pathname == '/explore' ? '70px': location.pathname == '/collections' ? '100px': '0px'}}></div>
      <div className='position-fixed ' style={{
        width: "50px",
        height: "50px",
        right: "20px",
        bottom: "20px",
        zIndex: "1000"
      }}>
        <a href="https://wa.link/m2jwc3">
          <img src="/img/Whats App.png" alt="" className='w-100'/>
        </a>
      </div>
      <Outlet />
    </>
  );
  
};
export default Header;