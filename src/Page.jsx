
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
  }));
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".stack-container",
        start: "top top",
        end: "+=2000", // Adjust scroll distance as needed
        scrub: true,
        pin: true,
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
      <header>
        <h1>Header Section</h1>
      </header>
      <section className="intro">
        <h2>Welcome to My Webpage</h2>
        <p>Yahan par kuch text aur image dikh rahi hai.</p>
        <img src="https://via.placeholder.com/400x300" alt="Placeholder" />
      </section>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <div className="stack-container">
          <div className="small-section">
            <ul className="articles_header">
              <li className="articles_header_i font-en-df">No.</li>
              <li className="articles_header_i font-en-df">Title</li>
              <li className="articles_header_i font-en-df">Category</li>
              <li className="articles_header_i font-en-df">Date</li>
            </ul>
          </div>
          {sections.map(({ s_id, id, title, content, imageUrl }) => (
            <div className={"panel "+id} key={id}>
              <div className="row">
                <div className="panel-text">
                  <div className="articles_li_header" >
                    <p className="articles_li_num font-en-df">00{s_id}</p>
                    <h2 className="articles_li_title font-en-df">〔column〕街中の家・自然の中の家</h2>
                    <p className="articles_li_cat font-en-df">Articles</p>
                    <p className="articles_li_date font-en-df">
                        <time dateTime="2025-02-13">2025.02.13</time>
                    </p>
                  </div>
                </div>
                <div className="panel-body row">
                  <div className="panel-text-div">
                    <span>Panel 1</span>
                  </div>
                  <div className="panel-image-div overflow-hidden"> 
                    <img
                      className="panel-image"
                      src="./img/YP.jpg"
                      alt="Image 1"
                    />
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