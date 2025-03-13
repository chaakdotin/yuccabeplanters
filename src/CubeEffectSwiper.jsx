import React, { useRef, useState, useEffect } from "react";
import { gsap, ScrollTrigger, ScrollToPlugin } from "gsap/all";
import ScrollSections from "./ScrollSections";
import './new.css';
import Carousel from './Carousel';
gsap.registerPlugin( ScrollTrigger, ScrollToPlugin);
const CubeEffectSwiper = ({scrollToSection}) => {
    const { refs, setCurrentPage } = scrollToSection;
    const swiperRef = useRef(null);
    const targetRef = useRef(null);
    var i = 0;
    // const textEl = document.getElementById('.stagger1 h1');



    useEffect(() => {
     
        
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".stagger", // Element that triggers the animation
                start: "top top",     // When the top of `.start-class` hits the center of the viewport/ Element that defines the end point
                end: "bottom bottom",    // When the bottom of `.end-class` hits the center of the viewport
                scrub: true,
                markers: true,
                toggleActions: "play reverse play reverse",
            }
        });
        tl1.to(".stagger1 h1", {
            opacity: 1,
            transform: "none",
            transitionDuration : '.8s',
            stagger: 0.05,
            duration: 1,
        });
        
        const lt = gsap.timeline({
            scrollTrigger: {
                trigger: ".YUCCABE", // Element that triggers the animation
                start: "top bottom",     // When the top of `.start-class` hits the center of the viewport/ Element that defines the end point
                end: "bottom bottom",    // When the bottom of `.end-class` hits the center of the viewport
                scrub: true,
            }
        });

        // // tl.timeScale(0.5);
        lt.to(".textsdsdd", {
            position: "fixed",
            right: 100,
            top:"-5%",
            duration: 10,
            delay: 1,
            onComplete: function () {
                document.querySelector(".textsdsdd").style.top = "73.6%";
                document.querySelector(".textsdsdd").style.position = "absolute";
            },
        });
        gsap.to(".sdf-img", {
            scale: 2.5,
            scrollTrigger: {
                trigger: ".sdf", 
                start: "top top",     
                end: "+1000px",    
                pin: true,
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
                    // console.log(`Device changed to: ${newDeviceType}`);
                    currentDeviceType = newDeviceType; // Update the current device type
                }
            });
        }
        
        detectDeviceTypeChange();
       
    }, []);
    
    return (
        <div className="scroll-container" style={{ width: "100vw", overflow: "hidden" }} >
            <Carousel data={{refs, setCurrentPage}} />
            <div style={{ zIndex: 1 }} className="h-100vh bg-color position-relative h-100vh stagger"  ref={refs.about}>
                <div className='d-flex flex-column gap-5 align-items-center justify-content-center h-100 border-reduis'>
                    <div className="stagger1">
                        <h1 className='text-white secrion-3-font poppins-medium'>co-create </h1>
                        <h1 className='text-white secrion-3-font poppins-medium'>your green</h1>
                        <h1 className='text-white secrion-3-font poppins-medium'>spaces with us</h1>
                    </div>
                </div>
            </div>
            
            <div className="YUCCABE overflow-hidden" style={{ position: 'relative'}}>
                <div style={{ ...styles.rectStyle, fontSize: '800px', backgroundColor: "transparent", zIndex: 1, opacity: 0.2 }} className="textsdsdd h-100vh d-flex flex-column align-items-center justify-content-center poppins-bold">Yuccabe</div>
                <ScrollSections refs={refs}/>
            </div>
            <div className="sdf overflow-hidden" ref={refs.clients}>
                <div className='d-flex flex-column align-items-center justify-content-center h-100vh w-100' >
                    <img src="1.jpg" alt="" style={{ width: '40%', borderRadius:'20px' }} className="sdf-img" />
                </div>
            </div>
            <div style={{}} className="bg-color contact-us" ref={refs.contact}>
                <div className="container h-100vh ">
                    <div className='row h-100 align-items-center'>
                        <div className="col-lg-6 col-md-6 col-sm-12 contact-us-info ">
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
                            <div className='text-white tagline-1'>
                                <span className="poppins-medium">Are you one?</span>
                            </div>
                            <div className='text-white py-2 lastline'>
                                <span className="poppins-medium">Making a change starts with one conversation.
                                    Let’s talk!</span>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 px-5 form">
                            <div className='px-5 poppins-medium'>
                                <div className="form-floatings mt-3 mb-3">
                                    <input type="text" className="form-control" name="" id="your-name" placeholder='Your name' />
                                    {/* <label htmlFor="your-name">Your name</label> */}
                                </div>
                                <div className="form-floatings mt-3 mb-3">
                                    <input type="text" className="form-control" name="" id="email-addresse" placeholder='Email Addresse' />
                                    {/* <label htmlFor="email-addresse">Email Addresse</label> */}
                                </div>
                                <div className="form-floatings mt-3 mb-3">
                                    <input type="text" className="form-control" name="" id="contact-number" placeholder='Contact number' />
                                    {/* <label htmlFor="contact-number">Contact number</label> */}
                                </div>
                                <div className="form-floatings mt-3 mb-3">
                                    <input type="text" className="form-control" name="" id="company" placeholder='Company' />
                                    {/* <label htmlFor="company">Company</label> */}
                                </div>
                                <div className="form-floatings mt-3 mb-3">
                                    <input type="text" className="form-control" name="" id="message" placeholder='Message' />
                                    {/* <label htmlFor="message">Message</label> */}
                                </div>
                                <div>
                                    <button className='btn btn-primary' style={{ borderRadius: '2px', paddingRight: '60px' }}> Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        top: "-5%",
        backgroundColor: "transparent",
        right: "-3700px",
        position: "absolute",
    }
};

export default CubeEffectSwiper;
