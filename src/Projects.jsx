import React, { useEffect, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import css from './Projects.css?raw'
import Footer from "./Footer"

gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
    const containerRef = useRef(null);
    const spacerRef = useRef(null);
    const arrowRef = useRef([]);
   
    useEffect(() => {
        const container = containerRef.current;
        const panels = container.querySelectorAll(".parallax-item");
        const totalPanels = panels.length;
        if (spacerRef.current) {
            spacerRef.current.style.height = `${container.scrollWidth}px`;
        }
        // Main horizontal scroll
        gsap.to(container, {
            xPercent: -(8 * (totalPanels - 1)),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: () => `+=${container.scrollWidth} bottom`,
            },
        });
    
        // Background parallax effect
        panels.forEach((panel, index) => {
            const bg = panel.querySelector(".parallax-img");

            if (bg) {
                gsap.to(bg, {
                    x: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: panel,
                        containerAnimation: ScrollTrigger.getById("horizontalScroll"),
                        start: "left 10%",
                        end: "+=3800",
                        scrub: true,
                    },
                });
            }
        });
        // gsap.to('.scroll-down', {
        //     bottom: "-200%",
        //     ease: "none",
            
        //     scrollTrigger: {
        //         trigger: container,
        //         scrub: 1,
        //         markers:true,
        //         start:"top top",
        //         end: () => `+=${container.scrollWidth}`,
        //     },
        // });
        arrowRef.current.forEach((arrow, index) => {
            gsap.to(arrow, {
                y: 12,
                duration: 0.8,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                delay: index * 0.35, // stagger each arrow animation by 0.3s
            });
        });
    
        ScrollTrigger.refresh();
    }, []);

    return (
        <>
            <style>{css}</style>
            <div className="parallax-slider-wrapper">
                <div className="parallax-slider" ref={containerRef} >
                    <div className="parallax-slider-inner">
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="/parliament-of-india">
                                <div className="parallax-content">
                                    <span>India Parliament</span>
                                    <h4>Greens of Governance</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("/img/Project_1.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                        {/* <div className="parallax-item not-hide-cursor d-none" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="/jamnagar">
                                <div className="parallax-content">
                                    <span>Jamnagar</span>
                                    <h4>Desert Bloom | Jamnagar Installation</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/Project_1.jpg")',
                                    }}
                                />
                            </a>
                        </div> */}
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="/indira-gandhi-international-airport-t1">
                                <div className="parallax-content">
                                    <span>Indira Gandhi International Airport T1</span>
                                    <h4>Terminal Tranquility</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/Outer/IGI.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                        {/* <div className="parallax-item not-hide-cursor d-none" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="/residential-space">
                                <div className="parallax-content">
                                    <span>Residential Space</span>
                                    <h4>A Home in Harmony</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/Outer/Max.jpg")',
                                    }}
                                />
                            </a>
                        </div> */}
                       <div className="parallax-item not-hide-cursor " data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="/max-estate">
                                <div className="parallax-content">
                                    <span>Max Estate</span>
                                    <h4></h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/Outer/Max.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="scroll-down" style={{ textAlign: "center", paddingTop: 50 }}>
                        <p className="poppins-regular" style={{ color: "#000" }}>Scroll Down</p>
                        <div className="arrows">
                            <div
                                ref={(el) => (arrowRef.current[0] = el)}
                                className="arrow"
                                style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    transform: "translate3d(0px, 8.2398px, 0px) rotate(45deg)"
                                }}
                            />
                            <div
                                className="arrow"
                                ref={(el) => (arrowRef.current[1] = el)}
                                style={{
                                    translate: "none",
                                    rotate: "none",
                                    scale: "none",
                                    transform: "translate3d(0px, 6.302px, 0px) rotate(45deg)"
                                }}
                            />
                        </div>
                    </div>
                </div>
                
            </div>
            <div ref={spacerRef}></div>
            <style>{`.footer-bg-color { background-color: #d9d4c5!important; margin-bottom:20px; }`}</style>
            <Footer />
        </>
    )
}
