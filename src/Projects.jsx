import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import css from './Projects.css?raw'
import Footer from "./Footer"

gsap.registerPlugin(ScrollTrigger);
export default function Projects() {
    const containerRef = useRef(null);
    const spacerRef = useRef(null);
    // Set scroll spacer height
   
    useEffect(() => {
        const container = containerRef.current;
        const panels = container.querySelectorAll(".parallax-item");
        const totalPanels = panels.length;
        if (spacerRef.current) {
            spacerRef.current.style.height = `${container.scrollWidth}px`;
        }
        // Main horizontal scroll
        gsap.to(container, {
            xPercent: -(11 * (totalPanels - 1)),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                pin: true,
                scrub: 1,
                end: () => `+=${container.scrollWidth} bottom`,
            },
        });
    
        // Background parallax effect
        // Animate each image inside the panels
        // Animate each image inside the panels
        // Animate each image inside the panels
        // Animate each image inside the panels
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
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
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
                        </div>
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
                                            'url("img/Project_1.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="/residential-space">
                                <div className="parallax-content">
                                    <span>Residential Space</span>
                                    <h4>A Home in Harmony</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/Project_1.jpg")',
                                    }}
                                />
                            </a>
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
