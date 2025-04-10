
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import "./StackedSections.css"; // Make sure this file contains your CSS
const ScrollSections = () => {
  const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });
  
  const sections = Array.from({ length: 10 }, (_, i) => ({
    s_id: i + 1,
    id: `panel${i + 1}`,
    title: `Section ${i + 1}`,
    content: `This is the content for section ${i + 1}.`,
    imageUrl: `https://source.unsplash.com/random/300x300?sig=${i + 1}`,
    dataCategory: `cat${i + 1}`,
  }));
  useEffect(() => {
    // Get the current tag from URL
    var url = new URL(window.location.href);
    var c = url.searchParams.get('tags') || "all"; // default to 'all' if not present

    const filterButtons = document.querySelectorAll(".sdsss button");
    const productItems = document.querySelectorAll(".panel");

    // Add click events to each filter button
    filterButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        window.location.href = "?tags=" + filter;
      });
    });

    // Set active button class and filter items
    filterButtons.forEach(btn => {
      const filter = btn.getAttribute("data-filter");
      if (c === "all" || filter === c) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Show/hide items based on the filter
    productItems.forEach(item => {
      const category = item.getAttribute("data-category");
      if (c === "all" || category === c) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    });
    
    let tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".kdjff",
        start: "top 25%",
        end: "+=200",
        scrub: true, 
        
      },
    })
    tl1.to(".kdjff", { 
      fontSize: "80px",
      duration: 1 
    });
    const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:".sdsss",
        start:"top 8%",
        end: "+=100",
        scrub: true,
      }
    });
    tl2.to(".h84gf", { 
      x: 0,
      duration: 1 
    });
    const tl3 = gsap.timeline({
      scrollTrigger:{
        trigger:"#newcolum",
        start:"top 50%",
        end: "+=100",
        scrub: true,
      }
    });
    tl3.to("#newcolum .row", { 
      y: "400px",
      duration: 1 
    });
    
    let tl;
    function setupTimeline() {
      let panels = Array.from(document.querySelectorAll(".panel")).filter(p => getComputedStyle(p).display !== "none");
      let count = panels.length;
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".stack-container",
          start: "top top",
          end: "+=" + (count * 200),
          scrub: true,
          pin: true,
        }
      });
      tl.fromTo(".small-section",
        {
          y: "100vh"
        }, {
          y: "0",
          duration: 0.5
        }
      );
            
      panels.forEach((panel, i) => {
        let lastPanel = panels.length - 1;
        tl.fromTo(panel, { y: "100%" }, { y: "0%", duration: 1 }, "<");
        if(i < lastPanel){
          tl.to(panel, { height: "5vh", y: "0%", duration: 1 });
          tl.to(panel.querySelector(".panel-image"), { scale: 0.5, duration: 1 }, "<");
        }
       
      });
    }
    setupTimeline();
    ScrollTrigger.refresh();
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
      
      <div style={{  position: "relative" }}>
        
        <div className="stack-container">
          <div style={{ position: "fixed", transform: "translate(0px, 21vh)", zIndex:'2', width:"100%", lineHeight:"1", height:"85px"}}>
            <div className="w-100 d-flex h-100">
              <div className="kdjff" style={{ fontSize: "225px",width:"34%",position: "relative", lineHeight:"1"}}>
                <span style={{position:"absolute",  fontWeight: "bold", backgroundColor: "rgb(255, 255, 255)" }}>Collections</span>
              </div>
              <div className="sdsss" style={{ overflow:"hidden", width:"fit-content"}}>
                <div className="d-flex gap-2 h84gf" style={{ transform: "translate(-930px, 20px)",}}>
                  <button className="btn btn_style active" data-filter="all"> 
                    <div className="btn_icon">
                      <img src="./svg/icon2.svg" className="w-100" />
                    </div> Tesing
                  </button>
                  <button className="btn btn_style" data-filter="cat1"> 
                    <div className="btn_icon">
                      <img src="./svg/icon3.svg" className="w-100" />
                    </div> Tesing
                  </button>
                  
                  <button className="btn btn_style" data-filter="cat2"> 
                    <div className="btn_icon">
                      <img src="./svg/icon4.svg" className="w-100" />
                    </div> Tesing
                  </button>
                  <button className="btn btn_style" data-filter="cat3"> 
                    <div className="btn_icon">
                      <img src="./svg/icon2.svg" className="w-100" />
                    </div> Tesing
                  </button>
                  <button className="btn btn_style" data-filter="cat4"> 
                    <div className="btn_icon">
                      <img src="./svg/icon3.svg" className="w-100" />
                    </div> Tesing
                  </button>
                  <button className="btn btn_style" data-filter="cat5"> 
                    <div className="btn_icon">
                      <img src="./svg/icon4.svg" className="w-100" />
                    </div> Tesing
                  </button>
                  <button className="btn btn_style" data-filter="cat6"> 
                    <div className="btn_icon">
                      <img src="./svg/icon2.svg" className="w-100" />
                    </div> Tesing
                  </button>
                </div>
              </div>
            </div>
            <div className="container-fluid " id="newcolum"  style={{ position: "fixed", overflow: "hidden", transform: "translate(0px, 100px)", }}>
              <div className="row">
                {[...Array(6)].map((_, index) => (
                  <div className="col-2" key={index}>
                    <div className="card w-100 p-0" style={{ height: "200px", width: "300px" }}>
                      <img className="card-img-top" alt="" src="./img/YP.jpg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="small-section" >
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
          {sections.map(({ s_id, id, title, content, imageUrl, dataCategory}) => (
            <div className={"panel p-0 "+id} key={id} data-category={dataCategory}>
              <div className="container-fluid">
                <div className="row px-1">
                  <div className="panel-body col-12" style={{ paddingTop: "25px" }}>
                    <div className="d-flex">
                      <div className="panel-text-div col-8">
                        <span style={{ color: "#000" }}>Panel {s_id}</span>
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