import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import CubeEffectSwiper from './CubeEffectSwiper';
import Navigation from './Navigation';
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const App = () => {
  const [currentPage, setCurrentPage] = useState("");
  const [selctPage, setSelctPage] = useState("home");
  const [data, setData] = useState([]);;
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const catalogueRef = useRef(null);
  const clientsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const refs = { 
    home: homeRef, 
    about: aboutRef, 
    why: whyRef, 
    catalogue: catalogueRef, 
    clients:clientsRef, 
    contact: contactRef 
  };

  const scrollToSection = (section) => {
    setSelctPage(section);
    const targetRef = refs[section];
    if (targetRef && targetRef.current) {
      
      gsap.to(window, {
        scrollTo: {
          y: targetRef.current,
        },
        ease: "ease", // Easing for a smooth deceleration
      });
      const newData = { name:currentPage};
      setData([...data, newData]);
      setCurrentPage(section);
     
    }
  };

  useEffect(() => {
    

  
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute("data-section");
          const div = document.querySelector(".sub-"+section);
          const [scrollNavText, scrollNavLine] = div.childNodes;
          const animation = gsap.to(scrollNavText, {
            opacity: 1,
            display: "block",
            filter: "blur(0px)",
            transform: "translate3d(5px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            paused: true,
          });
      
          const animation1 = gsap.to(scrollNavLine, {
            transform: "translate3d(0px, 0px, 0px) scale3d(1.5, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            boxShadow: "0px 0px 2px 0.2px rgba(217, 217, 217, 0.5)",
            paused: true,
          });
          
          animation.play();
          animation1.play();

          setCurrentPage(section);
        }else{
          const div = document.querySelector(".sub-"+entry.target.getAttribute("data-section"));
          const [scrollNavText, scrollNavLine] = div.childNodes;
          const animation = gsap.to(scrollNavText, {
            opacity: 0,
            display: "none",
            filter: "blur(2px)",
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(20deg, 0deg)",
            paused: true,
          });
      
          const animation1 = gsap.to(scrollNavLine, {
            transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
            boxShadow: "0px 0px 2px 0.2px rgba(217, 217, 217, 0.5)",
            paused: true,
          });
          
          animation.play();
          animation1.play();
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.6, // Consider section visible when 60% is in view
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    Object.keys(refs).forEach((section) => {
      if (refs[section].current) {
        refs[section].current.setAttribute("data-section", section);
        observer.observe(refs[section].current);
        
      }
    });

    return () => observer.disconnect();
  }, [refs]);
  return (
    <>
      <Navigation scrollToSection={{scrollToSection, currentPage}} />
      <CubeEffectSwiper scrollToSection={{refs, setCurrentPage}} />
    </>
  )
}

export default App
