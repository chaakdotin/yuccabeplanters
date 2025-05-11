import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import lenis  from './LenisWrapper'
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import jsdhsjd from "./StackedSections.css?raw";
import AnimatedTypingText from "./AnimatedTypingText";
// import Footer from "./Footer"
gsap.registerPlugin(ScrollTrigger);

const Image = ({ imageData }) => {
  return (
    <>
      {imageData && imageData.map((d) => (
        <img
          key={d.Image_ID + "s"}
          src={d.Image_Link}
          alt="Man adjusting necklace"
          className={`clickable ${d.Entry_ID == 1 ? 'active' : ''}`}
        />
      ))}
    </>
  )
}
const Collections = () => {
  
  const [show, setShow] = useState(false);
  const [sections, setSections] = useState([]);
  const [FilterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let tl;
  useEffect(() => {
    if (!loading) return;

    const el = document.querySelector('.k8nd8');
    if (el) {
      const elWidth = el.clientWidth;
      const screenWidth = window.innerWidth;
    
      if (screenWidth <= 768) {
        // Mobile
        el.style.left = '30px';
      } else {
        // Desktop/tablet - center it
        const leftOffset = (screenWidth - elWidth) / 1.5;

        el.style.left = `${leftOffset}px`;
      }
    }
  
    const url = new URL(window.location.href);
    const c = url.searchParams.get('tags') || "all";
  
    const filterButtons = document.querySelectorAll(".sdsss button");
    const productItems = document.querySelectorAll(".panel");
  
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        window.location.href = "?tags=" + filter;
      });
    });
  
    filterButtons.forEach(btn => {
      const filter = btn.getAttribute("data-filter");
      if (c == filter) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  
    productItems.forEach(item => {
      const category = item.getAttribute("data-category");
      item.style.display = (c == "all" || category == c) ? "" : "none";
    });
  
    
  
    const imageSections = document.querySelectorAll('.image-section');
    const imageHeight = 220;
    const containerHeight = 658.68;
  
    imageSections.forEach(section => {
      const clickableImages = section.querySelectorAll('.clickable');
      const mainImage = section.querySelector('.main-image');
      const slider = section.querySelector('.slider');
  
      if (!clickableImages.length || !mainImage || !slider) return;
  
      const totalImages = clickableImages.length;
  
      function centerActiveImage(activeImg) {
        if (!activeImg) return;
        const index = Array.from(clickableImages).indexOf(activeImg);
        if (index === -1) return;
  
        
        const screenWidth = window.innerWidth;
        if (screenWidth <= 480) {
          const imageHeights = 100;
          const containerHeights = 300;
          const sliderHeight = totalImages * imageHeights;
          let offset = index * imageHeights + imageHeights / 2 - containerHeights / 2;
          offset = Math.max(0, Math.min(offset, sliderHeight - containerHeights));
          slider.style.transform = `translateY(-${offset}px)`;
        }else if (screenWidth <= 768) {
          const imageWidth = 120;
          const containerWidth = 780;
          const sliderHeight = totalImages * imageWidth;
          let offset = index * imageWidth + imageWidth / 2 - containerWidth / 2;
          offset = Math.max(0, Math.min(offset, sliderHeight - containerWidth));
          
          slider.style.transform = `translateX(-${offset}px)`;
        }else{
          const sliderHeight = totalImages * imageHeight;
          let offset = index * imageHeight + imageHeight / 2 - containerHeight / 2;
          offset = Math.max(0, Math.min(offset, sliderHeight - containerHeight));
          slider.style.transform = `translateY(-${offset}px)`;
        }
        
      }
  
      function handleImageClick(img) {
        mainImage.src = img.src;
        mainImage.alt = img.alt;
        clickableImages.forEach(i => i.classList.remove('active'));
        img.classList.add('active');
        centerActiveImage(img);
      }
  
      clickableImages.forEach(img => {
        const onClick = () => handleImageClick(img);
        img.addEventListener('click', onClick);
        img._onClick = onClick;
      });
  
      const initialActiveImage = section.querySelector('.clickable.active');
      if (initialActiveImage) centerActiveImage(initialActiveImage);
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);
    if (c !== 'all') {
      ScrollTrigger.refresh();
      setTimeout(() => {
        const div = document.querySelector('.small-section');
        if (div) {
          const distanceFromDocumentTop = div.offsetTop + 100;
          window.scrollBy(0, distanceFromDocumentTop);
        }
      }, 600);
    }
    if(window.innerWidth <= 330){
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 22%",
          end: "+=200",
          scrub: true,
          
        },
      });

      tl1.to(".k8nd8", {
        left: 20,
        color: "#d9d4c5",
        fontSize:40,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 15%",
          end: "+=100",
          scrub: true,
        }
      });
      gsap.set(".h84gf", {
        y:15,
        duration: 1,
      });
      tl2.to(".h84gf", {
        x: 10,
        duration: 1,
        
      });
      gsap.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 25%",
          end: "+=160",
          scrub: true,
          
        },
      });
      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;
    
      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 75),
          scrub: true,
          pin: true,
          //
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 0, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "102%" }, { y: 0, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 0, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    }else if(window.innerWidth <= 375){
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 22%",
          end: "+=200",
          scrub: true,
          
        },
      });

      tl1.to(".k8nd8", {
        left: 20,
        color: "#d9d4c5",
        fontSize:40,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 20%",
          end: "+=100",
          scrub: true,
          
        }
      });

      tl2.to(".h84gf", {
        x: 10,
        duration: 1,
      });
      gsap.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 25%",
          end: "+=160",
          scrub: true,
        },
      })

      
      
      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;
    
      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 200),
          scrub: true,
          pin: true,
          // markers:true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 20, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "102%" }, { y: 20, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 20, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    }else if(window.innerWidth <= 480){
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 20%",
          end: "+=200",
          scrub: true,
          
        },
      });

      tl1.to(".k8nd8", {
        left: 30,
        color: "#d9d4c5",
        fontSize:60,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 27%",
          end: "+=100",
          scrub: true,

        }
      });

      tl2.to(".h84gf", {
        x: 10,
        duration: 1,
      });
      // const tl3 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#newcolum",
      //     start: "top 40%",
      //     end: "+=160",
      //     scrub: true,
      //     // markers:true,
      // });
      gsap.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 40%",
          end: "+=160",
          scrub: true,
          // markers:true,
        },
      })

      
      
      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;
    
      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 100),
          scrub: true,
          pin: true,
          // markers:true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 60, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "102%" }, { y: 60, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 60, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    }else if(window.innerWidth <= 770){
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 25%",
          end: "+=200",
          scrub: true,
        },
      });

      tl1.to(".k8nd8", {
        left: 30,
        color: "#d9d4c5",
        fontSize:60,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 27%",
          end: "+=100",
          scrub: true,

        }
      });

      tl2.to(".h84gf", {
        x: 10,
        duration: 1,
      });

      // const tl3 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: "#newcolum",
      //     start: "top 40%",
      //     end: "+=160",
      //     scrub: true,
      //     // markers:true,
      //   }

      // });
      gsap.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        scrollTrigger: {
          trigger: "#newcolum",
          start: "top 30%",
          end: "+=160",
          scrub: true,

        },
      })

      
      
      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;
    
      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 200),
          scrub: true,
          pin: true,
          // markers:true,
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 80, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "100%" }, { y: 80, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 80, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    }else{
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".kdjff",
          start: "top 25%",
          end: "+=200",
          scrub: true,
        },
      });

      tl1.to(".k8nd8", {
        left: 0,
        color: "#d9d4c5",
        fontSize:80,
        duration: 1
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".sdsss",
          start: "top 12%",
          end: "+=100",
          scrub: true,
        }
      });

      tl2.to(".h84gf", {
        x: 0,
        duration: 1,
      });

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#newcolum",
          start: "30% -40%",
          end: "+=160",
          scrub: true,
          // markers:true,
          
        }
      });

      tl3.to("#newcolum .card", {
        y: "400px",
        duration: 1,
        // ease: "power1.inOut",
        // stagger: {
        //   grid: [2,3],
        //   each: 0.4,
        //   from: "center",
        //   axis: "y",
        //   amount: 1.5
        // }
      });
      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      const count = panels.length;
    
      const tlMain = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 200),
          scrub: true,
          pin: true,
          // markers: true
        }
      });
      tlMain.fromTo(".small-section", { y: "100vh" }, { y: 0, duration: 0.5 });
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tlMain.fromTo(panel, { y: "100%" }, { y: 0, duration: 1 }, "<");
        if (i < lastPanel) {
          tlMain.to(panel, { height: "5vh", y: 0, duration: 1 });
          tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
        }
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      imageSections.forEach(section => {
        const clickableImages = section.querySelectorAll('.clickable');
        clickableImages.forEach(img => {
          if (img._onClick) {
            img.removeEventListener('click', img._onClick);
            delete img._onClick;
          }
        });
      });
    };
    
  }, [loading]);
  useEffect(() => {
    fetch('https://yuccabeplanters.chaak.in/api/collection.php').then((res) => res.json())
    .then((result) => {
      setSections(result[0]['product']);
      setFilterData(result[0]['cat']);
      setLoading(true);
    }).catch((err) => {
      setLoading(false);
      console.error('API Error:', err);
      alert('Failed to load collections. Please try again later.');
    });
  }, []);
 
  
  // if(show){
  //   lenis.stop()
  // }else{
  //   lenis.start()
  // }
  return (
    <>
    
      <style>
        {/* {jsdhsjd} */}
        {`
          @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css';
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          @font-face {
            font-family: 'Qalogre';
            src: url('fonts/Qalogre-K7Y1W.otf') format('opentype');
          }
          *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: Arial, sans-serif;
            overflow-x: hidden;
          }

          header {
            background: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
          .kdjff{
            /* height: 20vh; */
            width: 100%;
            display: grid;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            text-align: left;
          }
          .ab-about-content span {
            height: 60px;
            line-height: 60px;
            color: #fff;
            background-color:#000;
            padding: 0 20px;
            display: inline-block;
            font-size: 30px;
            font-weight: 600;
            position: absolute;
            top: -55px;
            left: 20px;
            transform: rotate(-24deg);
          }
          .ab-about-content P {
            font-size: 54px;
            font-weight: 400;
            line-height: 1.2;
            letter-spacing: -1.08px;
            color:#000;
            padding-right: 25px;
          }
          /* Intro Section */
          .intro {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #f4f4f4;
            text-align: center;
          }

          .intro img {
            max-width: 80%;
            margin-top: 20px;
          }

          /* Container for small-section & panels */
          .stack-container {
            position: relative;
            height: 100vh; /* Extra scroll space for all transitions */

          }

          /* 5vh rectangular section */
          .small-section {
            position: fixed;
            top: 22vh;
            left: 0;
            width: 100%;
            height: 5vh;
            z-index: 9;
            transform: translateY(100vh); /* Initially off-screen */

          }
          .small-section .articles_header {
            padding: 2px 0px!important;
            background-color: #d9d4c5;
            font-weight: bold;
            color:#000;
            /* -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #000000; */
            font-family: "Poppins", sans-serif;
            /* -webkit-text-fill-color: transparent; */
          }
          .articles_header li {
            color: #000;
          }
          .new_style{
              --bg: #d9d4c5;
              --hover-bg: #000;
              --hover-text: #fff;
              color: #000;
              cursor: pointer;
              border: 1px solid var(--bg);
              border-radius: 4px;
              padding: 0.8em 2em;
              background: var(--bg);
              transition: 0.2s;
            }
            
            .new_style:hover {
              color: var(--hover-text);
              -webkit-transform: translate(-0.25rem, -0.25rem);
              transform: translate(-0.25rem, -0.25rem);
              background: var(--hover-bg);
              -webkit-box-shadow: 0.25rem 0.25rem var(--bg);
              box-shadow: 0.25rem 0.25rem var(--bg);
            }
            
            .new_style:active {
              transform: translate(0);
              box-shadow: none;
            }
            

          /* Panels styling */
          .panel {
            position: absolute;
            top: 26vh;
            left: 0;
            width: 100vw;
            height: 73vh; /* Active panel height */
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
            display: block;
            justify-content:space-between; 
            align-items: center;
            padding: 0 20px;
            color: #fff;
            overflow: hidden;
            z-index: 3;
          }

          .panel-text {
            font-size: 0.6em;
            width: 100%;
          }
          .articles_li_header {
            display: flex;
            justify-content: space-between;
          }
          .font-en-df{
            color: #000;
            text-align: left;
            padding: 0px;
          } 
          .articles_li_num{
            width: 7%!important;
            padding: 0px!important;
          }
          /* .panel-image {
            transform: scale(0.5); 
          } */

          /* First panel image starts at full scale */
          .panel .panel-image {
            transform: scale(1);
          }

          /* Different background colors for each panel */
          .panel {
            background: #ffffff;
          }

          .panel-body{
              /* height: 300px; */
          }
          .panel-text-div{
            font-size: 0.6em;
            display: flex;
            flex-direction: column;
            padding-bottom: 0px;
            height: 100%;
            padding-left: 10px;
          }
          .panel-image-div{
            height: 69.5vh;
          }
          .sdsss .btn_style.active {
            background-color: #d9d4c5;
          }
          .btn_style{
            position: relative;
            border: 1px solid #d9d4c5!important;
            border-radius: 30px;
            color: #2d2d2b;
            font-size: 14px;
            font-family: Neurialgrotesk Bold, sans-serif;
            padding:1rem 1.6rem 1rem 3.6rem;
          }
          .btn_style .btn_icon{
            position: absolute;
            left: 2%;
            top: 4%;
            width: 30%;
          }
          .sdsss .btn_icon .btn_icon_1{
            position: relative;
            top: 2px;
            width: 46px!important;
          }
          .sdsss .btn_style .btn_icon_2{
            display: none;
          }
          .sdsss .btn_style.active .btn_icon_1{
            display: none;
          }
          .sdsss .btn_style.active .btn_icon_2{
            display: inline-block;
            position: relative;
            top: 2px;
            width: 45px!important;

          }

          .background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0);
            -webkit-backdrop-filter: blur(0px);
            backdrop-filter: blur(0px);
            transition: background 1.5s ease, backdrop-filter 1.5s ease;
            z-index: 500;
            pointer-events: none;
            }

            .blurred {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
            pointer-events: auto;
            }

            .expand-btn {
                position: fixed;
                width: 50px;
                height: 50px;
                background-color: #d9d4c5;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                display: flex;
                align-items: flex-end;
                justify-content: flex-start;
                padding: 0;
                transition: width 1.5s ease, height 1.5s ease, border-radius 1.5s ease;
                z-index: 999999;
            }

            .btn-icon {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
            cursor: pointer;
            }

            .contents {
            display: none;
            color: white;
            padding: 20px;
            opacity: 0;
            transition: opacity 1.5s ease;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 60px;
            }

            .contents h2 {
            margin-top: 0;
            font-size: 24px;
            }

            .expanded {
            width: calc(100vw - 40px);
            height: calc(100vh - 40px);
            border-radius: 12px;
            z-index: 1100;
            }
          .image-section .row{
            flex-direction: column;
            direction: rtl;
          }
          @media (max-width:768px){
            .mobile_view_frist_section{
              transform: translate(0px, 13vh)!important;
            }

            .mobile_view{
              flex-direction: column!important;
              height: 153px!important;
            }

            .kdjff{
              width: 100%!important;
              height: 80px!important;
            }

            .sdsss{
              width: 100%!important;
              height: 65px!important
            }
            
            .k8nd8{
              font-size: 120px!important;
            }
            
            .btn_style .btn_icon {
              position: absolute;
              left: 2%;
              top: 6%;
              width: 20%;
            }
            
            .sdsss .btn_icon .btn_icon_1 {
              position: relative;
              top: 2px;
              width: 30px !important;
            }
            
            .sdsss .btn_style.active .btn_icon_2 {
              display: inline-block;
              position: relative;
              top: 2px;
              width: 33px !important;
            }

            .btn_style {
              font-size: 13px;
              padding: 0.7rem 1.2rem .7rem 2.6rem;
            }
            #newcolum {
              transform: translate(0px, 0px)!important;
            }

            #newcolum  .col-md-4 {
              overflow: hidden;
            }
            .image-section .row{
              justify-content: start!important;
              direction: ltr;
            }
            .left-images{
              width: 100%!important;
              height: 100px!important;
            }
            .right-image {
              width: 100%!important;
              height: 73%!important;
            
            }
            .slider img{
              height: 100px!important;
            }
            .slider{
              flex-direction: row!important;
            }
            .typings .text{
              font-size: 1.1rem;
              left: 0%;
            }
          }

          @media (max-width:480px){
            .panel-body .d-flex {
              flex-direction: column-reverse;
            }
            .panel-body{
              padding-left:0px!important;
              padding-right:0px!important;
              padding-top:12px!important;
            }
            .mobile_view_frist_section {
              transform: translate(0px, 9vh)!important;
            }
            .k8nd8 {
              font-size: 60px!important;
            }
            .col-sm-4 {
              flex:0 0 auto;
              width:33.33333333%
            }
            .panel-title {
              font-size: 30px!important;
            }
            .panel-subtitle {
              font-size: 15px!important;
            }
            .panel-description {
              font-size: 12px!important;
              padding-top: .1rem !important;
            }
            .new_style {
              width: 35%;
              font-size: 11px !important;
            }
            .left-images {
              width: 20% !important;
              height: 280px!important;
            }
            .right-image {
              width: 76% !important;
              height: 73% !important;
            }
            .image-section .row{
              flex-direction: row!important;
              
              direction: rtl;
            }
            .two-colum-div{
              gap:10px;
            }
            .slider{
              flex-direction: column !important;
            }
            .slider img {
              width: 100%!important;
              height: 200px;
            }
            .right-image img {
              width: 100%!important;
              height: 100%!important;
            }
            .panel-image-div{
              height: 35vh;
            }
            .panel-text-div .pt-4{
              padding-top: 0rem!important;
            }
            .panel-text-div .pt-5{
              padding-top: 1rem!important;
            }
            .offcanvas{
              width: 100%!important;
            }
            .typings .text{
              font-size: 1.2rem;
              left: 0%;
            }
            .btn_style .btn_icon{
              display: none;
            }
            .btn_style {
              padding: 0.5rem 1.2rem .5rem 1.2rem;
            }
          }
          @media (max-width: 375px) {
            
            .k8nd8 {
              font-size: 60px !important;
              left: 15px!important;
            }
            .kdjff {
              height: 48px !important;
            }
            .new_style {
              width: 40%;
            }
            
          }
          @media (max-width: 320px) {
            .mobile_view_frist_section {
              transform: translate(0px, 6vh)!important;
            }
            .k8nd8 {
              font-size: 50px !important;
              left: 15px!important;
            }
            .new_style {
              width: 45%;
            }
            .typings .text{
              font-size: 1.1rem;
              left: 0%;
            }
          }
          body {
            margin: 0;
            padding: 0;
          }
          .navbar {
            background-color: #ffffff;
          }
          section.sliders {
            overflow: hidden;
            position: relative;
          }
          .slider-wrapper {
            display: flex;
            width: 200%;
            
          }
          .slide {
            display: inline-flex;
            align-items: center;
            white-space: nowrap;
            width: 100%;
          }
          .slide span {
            font-size: 2.2rem;
            margin-right: 10px;
          }
          .rotating-svg {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            animation: rotate 4s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .image-section {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: flex-start;
          }
          .left-images {
            height: 100%;
            width: 20%;
            padding: 0;
            margin: 0;
            overflow: hidden;
            position: relative;
          }
          .slider {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            width: 100%;
            transition: transform 0.3s ease;
          }
          .slider img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            cursor: pointer;
            aspect-ratio: 3/4;
            border: none;
          }
          .slider img.active {
            border: 2px solid white;
          }
          .right-image {
            height: 100%;
            padding: 0;
            margin: 0;
          }
          .right-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .row.no-gaps {
            margin: 0;
          }
          .row.no-gaps > * {
            padding: 0;
          }
          @media (max-width: 767.98px) {
            .image-section {
              height: auto;
              flex-direction: column;
              align-items: flex-start;
            }
            .left-images {
              width: 100%;
              height: 616px;
            }
            .slider img {
              width: 50%;
              height: 200px;
              aspect-ratio: 3/4;
            }
            .right-image {
              width: 100%;
            }
            .right-image img {
              width: 300px;
              height: 300px;
            }
          }
        `}
      </style>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      <div style={{ position: "relative" }}>
        <div className="stack-container">
          <div className="mobile_view_frist_section" style={{ position: "fixed", transform: "translate(0px, 12vh)", zIndex: '2', width: "100%", lineHeight: "1", height: "85px" }}>
            <div className="w-100 d-flex h-100 justify-content-center mobile_view">
              <div className="kdjff" style={{ width: "30%", position: "relative", lineHeight: "1" }}>
                <span className="k8nd8" style={{ position: "absolute", fontSize: "225px", fontWeight: "bold", backgroundColor: "rgb(255, 255, 255)", zIndex: 1 }}>Collections</span>
              </div>
              <div className="sdsss" style={{ overflow: "hidden", width: "fit-content" }}>
                <div className="d-flex gap-2 h84gf" style={{ transform: "translate(-955px, 20px)", position: "relative" }}>
                  <button className="btn btn_style active" data-filter="all">
                    <div className="btn_icon">
                      <img src="./svg/icon2.svg" className="w-100 btn_icon_1" />
                      <img src="./svg/icon-1.svg" className="w-100 btn_icon_2" />
                    </div> All
                  </button>
                  {FilterData.map((data) => (
                    <button key={data.Category_ID} className="btn btn_style" data-filter={data.Category_ID}>
                      <div className="btn_icon">
                        <img src="./svg/icon2.svg" className="w-100 btn_icon_1" />
                        <img src="./svg/icon-1.svg" className="w-100 btn_icon_2" />
                      </div> 
                      {data.Category_Name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="container-fluid" id="newcolum" style={{ position: "fixed", transform: "translate(0px, 100px)", }}>
              <div className="w-100 h-100" style={{ overflow: "hidden" }}>
                <div className="row px-2">
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/6.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/7.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/8.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/6.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/7.png" />
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-4 px-1 py-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/8.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="small-section">
            <div className="articles_header w-100 text-center">
              <section className="sliders">
                <div className="slider-wrapper">
                 <AnimatedTypingText />
                </div>
              </section>
            </div>
            
          </div>
          {sections.map(({ Entry_ID, Product_Name, Product_Subtitle, Product_Description, Sizes_Image_Link, Category_ID, Images }) => (
            <div className={"panel p-0 panel"+Entry_ID} key={Entry_ID} data-category={Category_ID}>
              <div className="container-fluid">
                <div className="row px-1">
                  <div className="panel-body col-12 panel-image" style={{ paddingTop: "25px" }}>
                    <div className="d-flex justify-content-between two-colum-div">
                      <div className="panel-text-div col-lg-6 col-md-5 justify-content-start">
                        <div className="d-flex flex-column" style={{fontFamily: '"Poppins", sans-serif'}}>
                          <span className="panel-title" style={{ color: "#000", fontWeight:"700", fontSize:"50px", lineHeight:0.9 }}>{Product_Name}</span>
                          <span className="panel-subtitle" style={{ color: "rgb(118 118 118)", fontSize:"25px", fontStyle:"italic",  }}>{Product_Subtitle}</span>
                          <span className="panel-description pt-3" style={{ color: "#000", fontSize:"20px", fontWeight:"200" }}>{Product_Description}</span>
                        </div>
                        <div className="pt-4 col-12">
                          {Sizes_Image_Link ? (
                            <img src={Sizes_Image_Link} alt="" className="w-100" />
                          ) : null}
                        </div>
                        <div className="col-12 pt-5">
                          <div className="d-flex justify-content-start">
                            <Button variant="primary" onClick={handleShow} className="new_style fs-5">Explore Variants</Button>
                          </div>
                        </div>
                      </div>
                      <div className="panel-image-div col-lg-5 col-md-7 overflow-hidden">
                        <div className="image-section" >
                          <div className="row h-100 no-gaps justify-content-center w-100 flex-column">
                            
                            <div className="col-lg-10 right-image">
                              <img className="main-image" src={Images[0].Image_Link} alt="Main Image" />
                            </div>
                            <div className=" left-images">
                              <div className="slider">
                                <Image key={Entry_ID} imageData={Images} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.footer-bg-color { background-color: #d9d4c5!important; margin-bottom:20px; }`}</style>
      {/* <Footer /> */}
    </>
  );
};

export default Collections;