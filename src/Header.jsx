import React, { useEffect, useState } from 'react';

import { Outlet } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { gsap, ScrollTrigger } from "gsap/all";
import './header.css';
const Header = () => {
  window.addEventListener("scroll", function () {
    let popup = document.getElementById("header");
    let scrollPosition = window.scrollY;
    let triggerPoint = window.innerHeight * 0.9; // 200vh
    if (scrollPosition >= triggerPoint) {
      popup.classList.remove("d-none");
    } else {
      popup.classList.add("d-none");
    }
  });
  return (
    <>
      <div className="navbar-container position-fixed z-index-99 w-100 d-none" id="header">
        <Navbar data-bs-theme="light">
          <Container fluid className="navbar-container-padding">
            <Navbar.Brand href="/" className="menu-logos" >
              <img
                src="./yp.svg"
                alt="Logo" width={'100%'} />
            </Navbar.Brand>
            <Nav className="w-100 d-flex justify-content-between">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      
      <Outlet />
    </>
  );
};
export default Header;