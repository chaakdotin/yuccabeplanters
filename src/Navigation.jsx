import React, { useEffect, useState } from 'react'
import { gsap, ScrollTrigger } from "gsap/all";
function Navigation({scrollToSection }) {
  const { scrollToSection: scrollFunc, currentPage } = scrollToSection;

  useEffect(() => {
    const scrollNavLinks = document.querySelectorAll(".scroll-nav button");
    scrollNavLinks.forEach((link) => {
      const [scrollNavText, scrollNavLine] = link.childNodes;
      const animation = gsap.to(scrollNavText, {
        opacity: 1,
        display: "block",
        filter: "blur(0px)",
        transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
        paused: true,
      });

      const animation1 = gsap.to(scrollNavLine, {
          transform: "translate3d(0px, 0px, 0px) scale3d(1.5, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
          boxShadow: "0px 0px 2px 0.2px rgba(0, 0, 0, 0.5)",
          paused: true,
      });

      link.addEventListener("mouseenter", async () => {
        animation.play();
        animation1.play();
      });
      link.addEventListener("mouseleave", async () => {
        animation.reverse();
        animation1.reverse();
      });
    });

    return () => {
      scrollNavLinks.forEach((link) => {
        link.removeEventListener("mouseenter", async () => {
          animation.play();
          animation1.play();
        });
        link.removeEventListener("mouseleave", async () => {
          animation.reverse();
          animation1.reverse();
        });
      });
    };
    
  }, []);
  const navLinks = [
    { href: "#1", text: "Home", btn: "home" },
    { href: "#2", text: "About Us", btn:"about" },
    { href: "#3", text: "Experience", btn:"why" },
    { href: "#4", text: "Technical expertise", btn:"catalogue" },
    { href: "#5", text: "Package", btn:"clients" },
    { href: "#6", text: "Contact", btn:"contact" },
  ];
  
  return (
    <aside className="scroll-nav d-none d-md-block" style={{ willChange: 'filter', filter: 'invert(100%)', }}>
      <div className="scroll-nav-inner">
        {navLinks.map(({ href, text, btn }) => (
          <button
            key={href}
            className={`scroll-nav-link-block w-inline-block ${"sub-"+btn}  ${currentPage === btn ? "w--current" : ""} border-0`} style={{backgroundColor: 'transparent'}}
            onClick={() => scrollFunc(btn)} 
          >
            <div
              className="scroll-nav-text"
              style={{
                opacity: 0,
                filter: "blur(2px)",
                transform:
                  "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(20deg, 0deg)",
                transformStyle: "preserve-3d",
                display: "none",
              }}
            >
              {text}
            </div>
            <div
              className="scroll-nav-line"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
              }}
            >
            </div>
          </button>
        ))}
      </div>
    </aside>
  )
}

export default Navigation;