import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./StackedSections.css"; // Make sure this file contains your CSS

const ScrollSections = () => {

  const sections = Array.from({ length: 10 }, (_, i) => ({
    s_id: i + 1,
    id: `panel${i + 1}`,
    title: `Section ${i + 1}`,
    content: `This is the content for section ${i + 1}.`,
    imageUrl: `https://source.unsplash.com/random/300x300?sig=${i + 1}`,
    dataCategory: `cat${i + 1}`,
  }));
  useEffect(() => {
    const btn = document.getElementById('expand-btn');
    const btnIcon = document.getElementById('btn-icon');
    const content = document.getElementById('contents');

    let isExpanded = false;

    btnIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent button click interference
        if (!isExpanded) {
            // Step 1: Expand vertically
            btn.style.height = 'calc(70vh - 40px)';
            
            // Step 2: Expand horizontally
            setTimeout(() => {
                btn.style.width = 'calc(100vw - 40px)';
                btn.style.borderRadius = '12px';
                
                // Step 3: Show content
                setTimeout(() => {
                    content.style.display = 'block';
                    setTimeout(() => {
                        content.style.opacity = '1';
                    }, 100);
                }, 1500); // Wait for horizontal expansion
            }, 1500); // Wait for vertical expansion
            isExpanded = true;
        } else {
            // Step 1: Fade out content
            content.style.opacity = '0';
            
            setTimeout(() => {
                content.style.display = 'none';
                
                // Step 2: Shrink horizontally
                btn.style.width = '50px';
                btn.style.borderRadius = '8px';
                
                // Step 3: Shrink vertically
                setTimeout(() => {
                    btn.style.height = '50px';
                    isExpanded = false;
                }, 1500); // Wait for horizontal shrink
            }, 1500); // Wait for content fade-out
        }
    });
  });

  useEffect(() => {
    const el = document.querySelector('.k8nd8');
    const elWidth = el.clientWidth;
    const screenWidth = window.innerWidth;
    const leftOffset = (screenWidth - elWidth) / 2;
    el.style.left = `${leftOffset}px`;

    var url = new URL(window.location.href);
    var c = url.searchParams.get('tags') || "all";

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
      if (c === filter || filter === c) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

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
    });
    tl1.to(".k8nd8", {
      left: 0,
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
        start: "top 50%",
        end: "+=100",
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
        if (i < lastPanel) {
          tl.to(panel, { height: "5vh", y: "0%", duration: 1 });
          tl.to(panel.querySelector(".panel-image"), { scale: 0.5, duration: 1 }, "<");
        }
      });
    }
    setupTimeline();

    if (c !== 'all') {
      ScrollTrigger.refresh();
      const div = document.querySelector('.small-section');
      const distanceFromDocumentTop = div.offsetTop;
      window.scrollBy(0, distanceFromDocumentTop);
    } else {
      ScrollTrigger.refresh();
    }

    // New slider logic
    const imageSections = document.querySelectorAll('.image-section');
    const imageHeight = 205.33; // Height of each image (616px / 3)
    const containerHeight = 616; // Section height

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
      if (initialActiveImage) {
        centerActiveImage(initialActiveImage);
      }
    });

    // Cleanup event listeners
    return () => {
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
  }, []);

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
            animation: marquee 20s linear infinite;
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
            height: 616px;
            width: 100%;
            background-color: #f8f9fa;
            display: flex;
            justify-content: flex-start;
          }
          .left-images {
            height: 100%;
            width: 25%;
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
            height: 205.33px;
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
            width: 616px;
            height: 616px;
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

      <div style={{ position: "relative" }}>
        <div className="stack-container">
          <div style={{ position: "fixed", transform: "translate(0px, 21vh)", zIndex: '2', width: "100%", lineHeight: "1", height: "85px" }}>
            <div className="w-100 d-flex h-100">
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
                  <button className="btn btn_style" data-filter="cat1">
                    <div className="btn_icon">
                      <img src="./svg/icon2.svg" className="w-100 btn_icon_1" />
                      <img src="./svg/icon-1.svg" className="w-100 btn_icon_2" />
                    </div> Geometrical
                  </button>
                  <button className="btn btn_style" data-filter="cat2">
                    <div className="btn_icon">
                      <img src="./svg/icon4.svg" className="w-100 btn_icon_1" />
                      <img src="./svg/icon-1.svg" className="w-100 btn_icon_2" />
                    </div> Geometrical
                  </button>
                  <button className="btn btn_style" data-filter="cat3">
                    <div className="btn_icon">
                      <img src="./svg/icon2.svg" className="w-100 btn_icon_1" />
                      <img src="./svg/icon-1.svg" className="w-100 btn_icon_2" />
                    </div> Geometrical
                  </button>
                  <button className="btn btn_style" data-filter="cat4">
                    <div className="btn_icon">
                      <img src="./svg/icon2.svg" className="w-100 btn_icon_1" />
                      <img src="./svg/icon-1.svg" className="w-100 btn_icon_2" />
                    </div> Geometrical
                  </button>
                  <button className="btn btn_style" data-filter="cat5">
                    <div className="btn_icon">
                      <img src="./svg/icon4.svg" className="w-100 btn_icon_1" />
                      <img src="./svg/icon-1.svg" className="w-100 btn_icon_2" />
                    </div> Geometrical
                  </button>
                  <button className="btn btn_style" data-filter="cat6">
                    <div className="btn_icon">
                      <img src="./svg/icon2.svg" className="w-100 btn_icon_1" />
                      <img src="./svg/icon-1.svg" className="w-100 btn_icon_2" />
                    </div> Geometrical
                  </button>
                </div>
              </div>
            </div>
            <div className="container-fluid" id="newcolum" style={{ position: "fixed", transform: "translate(0px, 100px)" }}>
              <div className="w-100 h-100" style={{ overflow: "hidden" }}>
                <div className="row">
                  <div className="col-2 px-0">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/Geometrical1.png" />
                    </div>
                  </div>
                  <div className="col-2 px-0">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/Geometrical1.png" />
                    </div>
                  </div>
                  <div className="col-2 px-0">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/Geometrical1.png" />
                    </div>
                  </div>
                  <div className="col-2 px-0">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/Geometrical1.png" />
                    </div>
                  </div>
                  <div className="col-2 px-0">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/Geometrical1.png" />
                    </div>
                  </div>
                  <div className="col-2 px-0">
                    <div className="card w-100 p-0 border-0">
                      <img className="card-img-top" alt="" src="./img/Geometrical1.png" />
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
          
          {sections.map(({ s_id, id, title, content, imageUrl, dataCategory }) => (
            <div className={"panel p-0 " + id} key={id} data-category={dataCategory}>
              <div className="container-fluid">
                <div className="row px-1">
                  <div className="panel-body col-12" style={{ paddingTop: "25px" }}>
                    <div className="d-flex">
                      <div className="panel-text-div col-8">
                        <span style={{ color: "#000" }}>Panel {s_id}</span>
                      </div>
                      <div className="panel-image-div col-4 overflow-hidden">
                        <div className="image-section">
                          <div className="row h-100 no-gaps">
                            <div className="col-md-6 left-images">
                              <div className="slider">
                                <img src="./img/YP.jpg" alt="Man adjusting necklace" className="clickable active" />
                                <img src="./img/YP.jpg" alt="Woman with braids" className="clickable" />
                                <img src="./img/YP.jpg" alt="Model in embellished dress" className="clickable" />
                                <img src="./img/YP.jpg" alt="Woman in jacket" className="clickable" />
                                <img src="./img/YP.jpg" alt="Man in suit" className="clickable" />
                                <img src="./img/YP.jpg" alt="Woman in scarf" className="clickable" />
                                <img src="./img/YP.jpg" alt="Man in hat" className="clickable" />
                              </div>
                            </div>
                            <div className="col-md-6 right-image">
                              <img className="main-image panel-image" src="./img/YP.jpg" alt="Main Image" />
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
          <button className="expand-btn" id="expand-btn">
            <span className="btn-icon" id="btn-icon">+</span>
            <div className="contents" id="contents">
                <h2>Expanded Content</h2>
                <p>This is the content inside the expanded button.</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ScrollSections;