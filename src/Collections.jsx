import React, { useEffect,useRef,useState } from "react";
import gsap from "gsap";
import lenis  from './LenisWrapper'
import ScrollTrigger from "gsap/ScrollTrigger";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./StackedSections.css"; // Make sure this file contains your CSS
import AnimatedTypingText from "./AnimatedTypingText";
gsap.registerPlugin(ScrollTrigger);

const Image = ({ imageData }) => {
  return (
    <>
      {
        imageData.map((d) => (
          <img
            key={d.Entry_ID + "s"}
            src={d.Image_Link}
            alt="Man adjusting necklace"
            className={`clickable ${d.Entry_ID == 1 ? 'active' : ''}`}
          />
        ))
      }
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
    const elWidth = el?.clientWidth;
    const screenWidth = window.innerWidth;
    const leftOffset = (screenWidth - elWidth) / 1.15;
    if (el) el.style.left = `${leftOffset}px`;
  
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
  
        const sliderHeight = totalImages * imageHeight;
        let offset = index * imageHeight + imageHeight / 2 - containerHeight / 2;
        offset = Math.max(0, Math.min(offset, sliderHeight - containerHeight));
        slider.style.transform = `translateY(-${offset}px)`;
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
  
    // GSAP timelines
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
      fontSize: "80px",
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
        start: "top 40%",
        end: "+=160",
        scrub: true,
      }
    });
  
    tl3.to("#newcolum .card", {
      y: "400px",
      duration: 1,
      stagger: {
        each: 0.4,
        from: "start"
      }
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
      }
    });
  
    tlMain.fromTo(".small-section", { y: "100vh" }, { y: "0", duration: 0.5 });
  
    panels.forEach((panel, i) => {
      let lastPanel = panels.length - 1;
      tlMain.fromTo(panel, { y: "100%" }, { y: "0%", duration: 1 }, "<");
      if (i < lastPanel) {
        tlMain.to(panel, { height: "5vh", y: "0%", duration: 1 });
        tlMain.to(panel.querySelector(".panel-image"), { scale: 0.5, filter: "blur(6px)", duration: 1 }, "<");
      }
    });
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
      setSections(JSON.parse(result[0]['json_result'])[0]['product']);
      setFilterData(JSON.parse(result[0]['json_result'])[0]['cat']);
      setLoading(true);
    }).catch((err) => {
      setLoading(false);
      console.error('API Error:', err);
      alert('Failed to load collections. Please try again later.');
    });
  }, []);
 
  
  if(show){
    lenis.stop()
  }else{
    lenis.start()
  }
  return (
    <>
    
      <style>
        {`
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
          <div style={{ position: "fixed", transform: "translate(0px, 12vh)", zIndex: '2', width: "100%", lineHeight: "1", height: "85px" }}>
            <div className="w-100 d-flex h-100 justify-content-center">
              <div className="kdjff" style={{ width: "30%", position: "relative", lineHeight: "1" }}>
                <span className="k8nd8" style={{ position: "absolute", fontSize: "225px", fontWeight: "bold", backgroundColor: "rgb(255, 255, 255)", zIndex: 1 }}>Collections</span>
              </div>
              <div className="sdsss" style={{ overflow: "hidden", width: "fit-content" }}>
                <div className="d-flex gap-2 h84gf" style={{ transform: "translate(-930px, 20px)", position: "relative" }}>
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
                  <div className="col-2 px-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/6.png" />
                    </div>
                  </div>
                  <div className="col-2 px-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/7.png" />
                    </div>
                  </div>
                  <div className="col-2 px-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/8.png" />
                    </div>
                  </div>
                  <div className="col-2 px-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/6.png" />
                    </div>
                  </div>
                  <div className="col-2 px-1 z-n1">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/7.png" />
                    </div>
                  </div>
                  <div className="col-2 px-1 z-n1">
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
                    <div className="d-flex justify-content-between">
                      <div className="panel-text-div col-5 justify-content-start">
                        <div className="d-flex flex-column" style={{fontFamily: '"Poppins", sans-serif'}}>
                          <span style={{ color: "#000", fontWeight:"700", fontSize:"50px", lineHeight:0.9 }}>{Product_Name}</span>
                          <span style={{ color: "rgb(118 118 118)", fontSize:"25px", fontStyle:"italic",  }}>{Product_Subtitle}</span>
                          <span className="pt-3" style={{ color: "#000", fontSize:"20px", fontWeight:"200" }}>{Product_Description}</span>
                        </div>
                        <div className="pt-4 col-12">
                          <img src={Sizes_Image_Link} alt="" className="w-100"/>
                        </div>
                        <div className="col-12 pt-5">
                          <div className="d-flex justify-content-start">
                            <Button variant="primary" onClick={handleShow} className="new_style fs-5">Explore Variants</Button>
                          </div>
                        </div>
                      </div>
                      <div className="panel-image-div col-7 overflow-hidden">
                        <div className="image-section" >
                          <div className="row h-100 no-gaps justify-content-center w-100">
                            <div className="col-md-3 left-images">
                              <div className="slider">
                                <Image key={Entry_ID} imageData={Images} />
                              </div>
                            </div>
                            <div className="col-md-8 right-image">
                              <img className="main-image" src={Images[0]['Image_Link']} alt="Main Image" />
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
    </>
  );
};

export default Collections;