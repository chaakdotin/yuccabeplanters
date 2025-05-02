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
            xPercent: -(9 * (totalPanels - 1)),
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
                            <a className="cursor-hide" href="#">
                                <div className="parallax-content">
                                    <span>branding</span>
                                    <h4>Brand some</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("https://html.hixstudio.net/liko-prev/liko/assets/img/home-12/portfolio/port-1.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="#">
                                <div className="parallax-content">
                                    <span>Digital</span>
                                    <h4>Digital Thinker</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("https://html.hixstudio.net/liko-prev/liko/assets/img/home-12/portfolio/port-2.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="#">
                                <div className="parallax-content">
                                    <span>Markus</span>
                                    <h4>Markus Erickson</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("https://html.hixstudio.net/liko-prev/liko/assets/img/home-12/portfolio/port-3.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="#">
                                <div className="parallax-content">
                                    <span>Emko</span>
                                    <h4>Emko Furniture</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("https://html.hixstudio.net/liko-prev/liko/assets/img/home-12/portfolio/port-4.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="#">
                                <div className="parallax-content">
                                    <span>branding</span>
                                    <h4>Brand some</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("https://html.hixstudio.net/liko-prev/liko/assets/img/home-12/portfolio/port-5.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="#">
                                <div className="parallax-content">
                                    <span>Craig</span>
                                    <h4>Craig Reynolds</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("https://html.hixstudio.net/liko-prev/liko/assets/img/home-12/portfolio/port-6.jpg")',
                                    }}
                                />
                            </a>
                        </div>
                        <div className="parallax-item not-hide-cursor" data-cursor="View<br>Demo">
                            <a className="cursor-hide" href="#">
                                <div className="parallax-content">
                                    <span>Green</span>
                                    <h4>Green Reel</h4>
                                </div>
                                <div
                                    className="parallax-img"
                                    style={{
                                        backgroundImage:
                                            'url("https://html.hixstudio.net/liko-prev/liko/assets/img/home-12/portfolio/port-7.jpg")',
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
