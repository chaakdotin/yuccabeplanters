
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import "./StackedSections.css"; // Make sure this file contains your CSS

const ScrollSections = () => {
  const sections = Array.from({ length: 10 }, (_, i) => ({
    s_id: i + 1,
    id: `panel${i + 1}`,
    title: `Section ${i + 1}`,
    content: `This is the content for section ${i + 1}.`,
    imageUrl: `https://source.unsplash.com/random/300x300?sig=${i + 1}`,
  }));
  useEffect(() => {
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
  
    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".kdjff",
        start: "top top",
        end: "+=200", // Adjust scroll distance as needed
        scrub: true,
      },
    })
    tl1.to(".kdjff", { 
      top: "18%", 
      left: "1%",
      fontSize: "80px",
      duration: 1 
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stack-container",
        start: "top top",
        end: "+=2000", // Adjust scroll distance as needed
        scrub: true,
        pin: true
      },
    });

    // Small-section slide in from below
    tl.fromTo(".small-section", { y: "100vh" }, { y: "0", duration: 0.5 });

    // Panel 1 slides in from below
    tl.fromTo(".panel.panel1", { y: "100%" }, { y: "0%", duration: 1 }, "<");

    // Transition: Panel 1 shrink + Image scale animation + Panel 2 slide in & image scale up
    tl.to(".panel.panel1", { height: "5vh", y: "0%", duration: 1 });
    tl.to(".panel.panel1 .panel-image", { scale: 0.5, duration: 1 }, "<");
    tl.fromTo(".panel.panel2", { y: "100%" }, { y: "0%", duration: 1 }, "<");
    tl.fromTo(
      ".panel.panel2 .panel-image",
      { scale: 0.5 },
      { scale: 1, duration: 1 },
      "<"
    );

    // // Transition: Panel 2 shrink & Panel 3 slide in with image scale changes
    tl.to(".panel.panel2", { height: "5vh", y: "0%", duration: 1 });
    tl.to(".panel.panel2 .panel-image", { scale: 0.5, duration: 1 }, "<");
    tl.fromTo(".panel.panel3", { y: "100%" }, { y: "0%", duration: 1 }, "<");
    tl.fromTo(
      ".panel.panel3 .panel-image",
      { scale: 0.5 },
      { scale: 1, duration: 1 },
      "<"
    );

    // Transition: Panel 3 -> Panel 4
    tl.to(".panel.panel3", { height: "5vh", y: "0%", duration: 1 });
    tl.to(".panel.panel3 .panel-image", { scale: 0.5, duration: 1 }, "<");
    tl.fromTo(".panel.panel4", { y: "100%" }, { y: "0%", duration: 1 }, "<");
    tl.fromTo(
      ".panel.panel4 .panel-image",
      { scale: 0.5 },
      { scale: 1, duration: 1 },
      "<"
    );

    // Transition: Panel 4 -> Panel 5
    tl.to(".panel.panel4", { height: "5vh", y: "0%", duration: 1 });
    tl.to(".panel.panel4 .panel-image", { scale: 0.5, duration: 1 }, "<");
    tl.fromTo(".panel.panel5", { y: "100%" }, { y: "0%", duration: 1 }, "<");
    tl.fromTo(
      ".panel.panel5 .panel-image",
      { scale: 0.5 },
      { scale: 1, duration: 1 },
      "<"
    );

    // Transition: Panel 5 -> Panel 6
    tl.to(".panel.panel5", { height: "5vh", y: "0%", duration: 1 });
    tl.to(".panel.panel5 .panel-image", { scale: 0.5, duration: 1 }, "<");
    tl.fromTo(".panel.panel6", { y: "100%" }, { y: "0%", duration: 1 }, "<");
    tl.fromTo(
      ".panel.panel6 .panel-image",
      { scale: 0.5 },
      { scale: 1, duration: 1 },
      "<"
    );

    // Transition: Panel 6 -> Panel 7
    tl.to(".panel.panel6", { height: "5vh", y: "0%", duration: 1 });
    tl.to(".panel.panel6 .panel-image", { scale: 0.5, duration: 1 }, "<");
    tl.fromTo(".panel.panel7", { y: "100%" }, { y: "0%", duration: 1 }, "<");
    tl.fromTo(
      ".panel.panel7 .panel-image",
      { scale: 0.5 },
      { scale: 1, duration: 1 },
      "<"
    );

    // Transition: Panel 7 -> Panel 8
    tl.to(".panel.panel7", { height: "5vh", y: "0%", duration: 1 });
    tl.to(".panel.panel7 .panel-image", { scale: 0.5, duration: 1 }, "<");
    tl.fromTo(".panel.panel8", { y: "100%" }, { y: "0%", duration: 1 }, "<");
    tl.fromTo(
      ".panel.panel8 .panel-image",
      { scale: 0.5 },
      { scale: 1, duration: 1 },
      "<"
    );

    // Transition: Panel 8 -> Panel 9
    tl.to(".panel.panel8", { height: "5vh", y: "0%", duration: 1 });
    tl.to(".panel.panel8 .panel-image", { scale: 0.5, duration: 1 }, "<");
    tl.fromTo(".panel.panel9", { y: "100%" }, { y: "0%", duration: 1 }, "<");
    tl.fromTo(
      ".panel.panel9 .panel-image",
      { scale: 0.5 },
      { scale: 1, duration: 1 },
      "<"
    );

    // Transition: Panel 9 -> Panel 10
    tl.to(".panel.panel9", { height: "5vh", y: "0%", duration: 1 });
    tl.to(".panel.panel9 .panel-image", { scale: 0.5, duration: 1 }, "<");
    tl.fromTo(".panel.panel10", { y: "100%" }, { y: "0%", duration: 1 }, "<");
    tl.fromTo(
      ".panel.panel10 .panel-image",
      { scale: 0.5 },
      { scale: 1, duration: 1 },
      "<"
    );

    // If desired, you can also animate the last panel to shrink:
    tl.to(".panel.panel10", { height: "65vh", y: "0%", duration: 1 });
    // tl.to(".panel.panel10 .panel-image", { scale: 0.5, duration: 1 }, "<");
  }, []);

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          /* Section with 8vh height */
          section.slider {
            overflow: hidden;
            position: relative;
          }
          /* Slider wrapper with duplicated content for seamless looping */
          .slider-wrapper {
            display: flex;
            width: 200%;
            animation: marquee 20s linear infinite;
          }
          /* Each slide takes full width of the section */
          .slide {
            display: inline-flex;
            align-items: center;
            white-space: nowrap;
            width: 100%;
          }
          /* Text style */
          .slide span {
            font-size: 2.2rem;
            margin-right: 10px;
          }
          /* Rotating SVG style */
          .rotating-svg {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            animation: rotate 4s linear infinite;
          }
          /* Marquee animation for continuous left-to-right sliding */
          @keyframes marquee {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          /* SVG rotation animation */
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <div className="kdjff" style={{ position: "fixed", top: "5%", fontSize: "225px",}}>
            <span style={{  fontWeight: "bold" }}>Our Activities</span>
        </div>
        <div className="stack-container">
          <div className="small-section ">
            <div className="articles_header w-100 text-center">
            <section className="slider">
              <div className="slider-wrapper">

                <div className="slide">
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                </div>
                <div className="slide">
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                  <span>Design Lives in Yuccabe Originals</span>
                  <img className="rotating-svg" src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.avif" alt="" />
                </div>
              </div>
            </section>
            </div>
          </div>
          {sections.map(({ s_id, id, title, content, imageUrl }) => (
            <div className={"panel p-0 "+id} key={id}>
              <div className="container-fluid">
                <div className="row px-1">
                  <div className="panel-body col-12" style={{ paddingTop: "25px" }}>
                    <div className="d-flex">
                      <div className="panel-text-div col-8">
                        <span style={{ color: "#000" }}>Panel 1</span>
                      </div>
                      <div className="panel-image-div col-4 overflow-hidden"> 
                        <img
                          className="panel-image"
                          src="./img/YP.jpg"
                          alt="Image 1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default ScrollSections;