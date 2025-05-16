import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import ScrollSections from "./ScrollSections";
import css from './new.css?raw';
import Carousel from './Carousel';
import Footer from './Footer';

// ..
import AOS from 'aos';
AOS.init();
gsap.registerPlugin( ScrollTrigger, ScrollToPlugin);

const CubeEffectSwiper = ({scrollToSection}) => {
    const { refs, setCurrentPage } = scrollToSection;
    const swiperRef = useRef(null);
    const targetRef = useRef(null);
    var i = 0;
    // const textEl = document.getElementById('.stagger1 h1');

    useEffect(() => {   
        // const tl1 = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: ".stagger", // Element that triggers the animation
        //         start: "top top",     // When the top of `.start-class` hits the center of the viewport/ Element that defines the end point
        //         end: "bottom bottom",    // When the bottom of `.end-class` hits the center of the viewport
        //         scrub: true,
        //         markers: true,
        //         toggleActions: "play none none none"
        //     }
        // });
        // tl1.to(".stagger1 h1", {
        //     opacity: 1,
        //     transform: "none",
        //     transitionDuration : '.8s',
        //     stagger: 0.05,
        //     duration: .8,
        //     ease: "power2.inOut",
        // });

        const lt = gsap.timeline({
            scrollTrigger: {
                trigger: ".YUCCABE", // Element that triggers the animation
                start: "top top",     // When the top of `.start-class` hits the center of the viewport/ Element that defines the end point
                end: "bottom bottom",    // When the bottom of `.end-class` hits the center of the viewport
                scrub: true,
            }
        });

        lt.to(".textsdsdd", {
            position: "fixed",
            right: 100,
            top:"-4%",
            duration: 10,
            onComplete: function () {
                document.querySelector(".textsdsdd").style.top = "73.6%";
                document.querySelector(".textsdsdd").style.position = "absolute";
            },
        });
        gsap.set('.sdf-img', {scale: 2.5})
        gsap.to(".sdf-img", {
            scale: 1,
            scrollTrigger: {
                trigger: ".sdf", 
                start: "top top",     
                end: "+1000px",    
                // pin: true,
                scrub: true,
            }
        });
        const ismobile = () => {
            document.querySelector(".sdf-img").src = "/II.jpg";
        }

        const istablet = () => {
            document.querySelector(".sdf-img").src = "/1.jpg";
        }

        const isDesktops = () => {
            document.querySelector(".sdf-img").src = "/1.jpg";
        }

        function getDeviceType() {
            if (window.matchMedia("(max-width: 480px)").matches) {
                ismobile();
                return "Mobile";
            } else if (window.matchMedia("(min-width: 480px) and (max-width: 768px)").matches) {
                istablet();
                return "Tablet";
            } else {
                isDesktops();
                return "Desktop";
            }
        }

        function detectDeviceTypeChange() {
            let currentDeviceType = getDeviceType();
            // Add event listener for window resize
            window.addEventListener("resize", function () {
                const newDeviceType = getDeviceType();
                if (newDeviceType !== currentDeviceType) {
                    currentDeviceType = newDeviceType; // Update the current device type
                }
            });
        }
        
        detectDeviceTypeChange();
       
    }, []);
    
    return (
        <>
            <style>{css}</style>
             <style
                dangerouslySetInnerHTML={{
                    __html:
                    `
                      .button-77 {
                        width:auto;
                        align-items: center;
                        appearance: none;
                        background-clip: padding-box;
                        background-color: initial;
                        background-image: none;
                        border-style: none;
                        box-sizing: border-box;
                        color: #fff;
                        cursor: pointer;
                        display: inline-block;
                        flex-direction: row;
                        flex-shrink: 0;
                        font-size: 16px;
                        font-weight: 700;
                        justify-content: center;
                        line-height: 24px;
                        margin: 0;
                        min-height: 64px;
                        outline: none;
                        overflow: visible;
                        padding: 19px 26px;
                        pointer-events: auto;
                        position: relative;
                        text-align: center;
                        text-decoration: none;
                        text-transform: none;
                        user-select: none;
                        -webkit-user-select: none;
                        touch-action: manipulation;
                        vertical-align: middle;
                        word-break: keep-all;
                        z-index: 0;
                        }
                        
                        @media (min-width: 768px) {
                        .button-77 {
                            padding: 19px 32px;
                        }
                        }
                        
                        .button-77:before,
                        .button-77:after {
                        border-radius: 80px;
                        }
                        
                        .button-77:before {

                            background: linear-gradient(270deg,#FFFEFE 0%, #D9D4C4 100%);
                            border: 10px solid;
                            content: "";
                            display: block;
                            height: 100%;
                            left: 0;
                            overflow: hidden;
                            position: absolute;
                            top: 0;
                            width: 100%;
                            z-index: -2;
                        }
                        
                        .button-77:after {
                        background-color: initial;
                        background: linear-gradient(270deg, #D9D4C4 0%, #86857F 100%);
                        bottom: 4px;
                        content: "";
                        display: block;
                        left: 4px;
                        overflow: hidden;
                        position: absolute;
                        right: 4px;
                        top: 4px;
                        transition: all 100ms ease-out;
                        z-index: -1;
                        }
                        
                        .button-77:hover:not(:disabled):after {
                        bottom: 0;
                        left: 0;
                        right: 0;
                        top: 0;
                        transition-timing-function: ease-in;
                        }
                        
                        .button-77:active:not(:disabled) {
                        color: #ccc;
                        }
                        
                        .button-77:active:not(:disabled):after {
                            background-image: linear-gradient(0deg, rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), linear-gradient(92.83deg, #D9D4C4 0, #86857F 100%);
                            bottom: 4px;
                            left: 4px;
                            right: 4px;
                            top: 4px;
                        }
                        
                        .button-77:disabled {
                            cursor: default;
                            opacity: .24;
                        }
                    `
                }}
            />
            <div className="scroll-container" style={{ width: "100vw", overflow: "hidden" }} >
                <Carousel data={{refs, setCurrentPage}} />
                <div style={{ zIndex: 1 }} className="h-100vh bg-color position-relative h-100vh stagger"  ref={refs.about}>
                    <div className='d-flex flex-column gap-5 align-items-center justify-content-center h-100 border-reduis'>
                        <div className="stagger1">
                            <h1 className='text-white secrion-3-font poppins-medium' data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="top-bottom">co-create </h1>
                            <h1 className='text-white secrion-3-font poppins-medium' data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="top-bottom">your green</h1>
                            <h1 className='text-white secrion-3-font poppins-medium' data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="top-bottom">spaces with us</h1>
                        </div>
                        <div className="">
                            <a className="button-77 poppins-regular " role="button" href="/services">
                                Design Your Space
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="YUCCABE overflow-hidden" style={{ position: 'relative',background: "linear-gradient(0deg,#d9d4c5 0%,#b0aca6 100%)"}}>
                    <div style={{ ...styles.rectStyle, fontSize: '800px', backgroundColor: "transparent", zIndex: 1, opacity: 0.2 }} className="textsdsdd h-100vh d-flex flex-column align-items-center justify-content-center poppins-bold">Yuccabe</div>
                    <ScrollSections refs={refs}/>
                </div>
                <div className="sdf overflow-hidden" ref={refs.clients}>
                    <div className='d-flex flex-column align-items-center justify-content-center h-100vh w-100' >
                        <img src="1.jpg" alt="" style={{ width: '40%', borderRadius:'20px', scale:2.5 }} className="sdf-img" />
                    </div>
                </div>
                <div style={{}} className="bg-color contact-us" ref={refs.contact}>
                    <div className="container h-100vh ">
                        <div className='row h-100 align-items-center'>
                            <div className="col-lg-6 col-md-6 col-sm-12 contact-us-info " style={{textAlign:"left"}}>
                                <div className='py-5'>
                                    <div className='text-white'>
                                        <h1 className="poppins-medium">Have a vision for your space?</h1>
                                    </div>
                                    <div className='text-white description'>
                                        <span className="poppins-medium">We’re here to make it a reality. Whether you’re looking for innovative planters, custom designs, or expert advice, we’re just a call or click away</span>
                                    </div>
                                </div>
                                <div className='text-white tagline'>
                                    <span className="poppins-medium">We collaborate with ambitious companies and aesthetes.</span>
                                </div>
                                <div className='text-white tagline'>
                                    <span className="poppins-medium">Are you one?</span>
                                </div>
                                <div className='text-white py-2 lastline'>
                                    <span className="poppins-medium">Making a change starts with one conversation.
                                        Let’s talk!
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 px-5 form">
                                <form action="https://yuccabeplanters.chaak.in/api/contact.php" method='POST'>
                                    <div className='px-5 poppins-medium' style={{textAlign:"left"}}>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="your-name" className="form-label">Your name<span>*</span></label>
                                            <input type="text" className="form-control" name="your-name" id="your-name" placeholder='Name you’d like us to remember.' required/>
                                        </div>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="email-address" className="form-label">Email Address<span>*</span></label>
                                            <input type="text" className="form-control" name="email-address" id="email-address" placeholder='We promise — no spam, just style.' required/>
                                        </div>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="contact-number" className="form-label">Contact Number<span>*</span></label>
                                            <input type="text" className="form-control" name="contact-number" id="contact-number" placeholder='Prefer a call? Share your number.' required/>
                                        </div>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="company" className="form-label">Company<span>*</span></label>
                                            <input type="text" className="form-control" name="company" id="company" placeholder='Tell us where creativity is brewing.' required/>
                                        </div>
                                        <div className="form-floatings mt-3 mb-3 form-group">
                                            <label htmlFor="message" className="form-label">Message<span>*</span></label>
                                            <input type="text" className="form-control" name="message" id="message" placeholder='Your thoughts, ideas, or questions...' required/>
                                        </div>
                                        <div>
                                            <button className='btn btn-white' style={{ borderRadius: '30px', padding: '10px 30px', fontSize:14 }}> Send your Message</button>
                                        </div>
                                    </div>
                                </form>
                                <style>
                                    {`
                                        .btn-white {
                                            background-color:#fff;
                                        }
                                        .btn-white:hover{
                                            background-color:blue!important;
                                            color:#fff!important;
                                        }
                                    `}
                                </style>

                            </div>
                            <Footer />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </>
    );
};

const styles = {
    slide: {
        width: "100%",
        height: "100%",
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2rem",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    },
    rectStyle: {
        color: "rgba(0, 0, 0, 0.2)",
        top: "2%",
        backgroundColor: "transparent",
        right: "-2500px",
        position: "absolute",
    }
};

export default CubeEffectSwiper;
