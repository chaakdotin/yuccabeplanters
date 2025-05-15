import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import css from "./Services.css?raw";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper/modules';
const Services = () => {

  useEffect(() => {
    const tracking = document.querySelector('.cursor-track');
    tracking.addEventListener('mousemove', function (e) {
      const x = e.clientX - 150;
      const y = e.clientY - 100;
      gsap.to('#tracker', {
        x: x,
        y: y,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out'
      });
    });
  });
  return (
    <>
      <style>
        {
          `
            .new_style {
              --bg: #d9d4c5;
              --hover-bg: #000;
              --hover-text: #fff;
              color: #000;
              cursor: pointer;
              border: 1px solid var(--bg);
              border-radius: 4px;
              padding: 0.8em 2em;
              background: var(--bg);
              transition: 0.2s;
            }
            .new_style:hover {
              color: var(--hover-text);
              transform: translate(-0.25rem, -0.25rem);
              background: var(--hover-bg);
              box-shadow: 0.25rem 0.25rem var(--bg);
            }
          `
        }
      </style>
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
                                  border: 10px solid;
                                  border-image-source: radial-gradient(18.55% 50% at 50% 50%, #FFFEFE 0%, #D9D4C4 100%);
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
      <div className='cursor-track position-relative w-100 h-100vh'>
        <div
          id="tracker"
          style={{
            position: "absolute",
            top: "-20%",
            left: "-0%",
            background: "radial-gradient(circle, rgba(235, 205, 141, 1) 10%, rgba(235, 205, 141, .1) 70%, transparent 100%)",
            opacity: .5,
            color: "#fff",
            padding: 5,
            width: 500,
            height: 500,
            borderRadius: "100%",
            zIndex: -1,
            boxShadow: "rgb(225 255 0 / 75%) 0px 0px 20px 2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* <div style={{width:100, height:100,borderRadius:"100%", background: "#0000FF",}}></div> */}
        </div>

        <div className='container' style={{ paddingTop: 220 }}>
          <div className='d-flex flex-column justify-content-center col-12 pb-5'>
            <div className='text-center'>
              <span className="main-title" style={{ fontSize: '7vw', fontWeight: 600, fontFamily: "Markpro", letterSpacing: -3 }}>Tailored by Yuccabe</span>
            </div>
            <div className='d-flex justify-content-center pt-2' style={{}}>
              <p className="main-subtitle" style={{ fontSize: 'max(1.043vw, 12px)', width: "calc((2.0848vw - 2.777vw*2/48)*22)", color: "#3e3e3e", fontFamily: "PPMori,Noto Sans JP,Noto Sans SC,sans-serif", fontWeight: 100, lineHeight: 1.2,  textAlign:"center" }}>
                Every space tells a story—let’s make yours unforgettable. At Yuccabe, we go beyond just offering planters. Our design service is built to help you visualize, plan, and transform your space using customized planter layouts, shapes, sizes, and finishes that suit your interiors or exteriors perfectly.
              </p>
            </div>
            <div class="col-12 pt-4">
              <div class="d-flex justify-content-center">
                <a className="button-77 poppins-regular " role="button" href="https://calendly.com/praveenpatkuwal29/30min">
                  Book a Design Call
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="video-section" style={{ width: "100vw", height: "100vh", margin: "100px 0px" }} >
        <video src="videos/12656960_2560_1440_25fps.mp4" autoPlay muted loop className="w-100 object-fit-cover"></video>
      </div>
      <div className="ab-2-hero-area  position-relative " style={{paddingBottom:300}}>
        <div className="ab-2-hero-social-wrap d-none ">
          {/* d-lg-block */}
          <div className="ab-2-hero-social d-none">
            <a href="#">
              <span>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.61267 4.38788C10.7765 4.38788 11.8926 4.85019 12.7155 5.67311C13.5384 6.49603 14.0007 7.61215 14.0007 8.77594V13.8953H11.0754V8.77594C11.0754 8.38801 10.9213 8.01597 10.6469 7.74166C10.3726 7.46736 10.0006 7.31325 9.61267 7.31325C9.22474 7.31325 8.8527 7.46736 8.57839 7.74166C8.30409 8.01597 8.14998 8.38801 8.14998 8.77594V13.8953H5.22461V8.77594C5.22461 7.61215 5.68692 6.49603 6.50984 5.67311C7.33276 4.85019 8.44888 4.38788 9.61267 4.38788Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M2.92537 5.11932H0V13.8954H2.92537V5.11932Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M1.46269 2.92537C2.27051 2.92537 2.92537 2.27051 2.92537 1.46269C2.92537 0.654867 2.27051 0 1.46269 0C0.654867 0 0 0.654867 0 1.46269C0 2.27051 0.654867 2.92537 1.46269 2.92537Z"
                    fill="currentcolor"
                  />
                </svg>
              </span>
            </a>
            <a href="#">
              <span>
                <svg
                  width={14}
                  height={12}
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 0.00639908C13.3906 0.436248 12.7159 0.765014 12.0018 0.980036C11.6186 0.539361 11.1092 0.227021 10.5427 0.0852612C9.9761 -0.0564989 9.37968 -0.0208401 8.83405 0.187415C8.28842 0.39567 7.81992 0.766473 7.4919 1.24967C7.16388 1.73287 6.99217 2.30516 7 2.88913V3.52549C5.88168 3.55449 4.77354 3.30646 3.77428 2.8035C2.77502 2.30054 1.91566 1.55826 1.27273 0.642763C1.27273 0.642763 -1.27273 6.37004 4.45455 8.91549C3.14397 9.80511 1.58274 10.2512 0 10.1882C5.72727 13.37 12.7273 10.1882 12.7273 2.87004C12.7267 2.69278 12.7096 2.51596 12.6764 2.34185C13.3258 1.70135 13.7842 0.892671 14 0.00639908Z"
                    fill="currentcolor"
                  />
                </svg>
              </span>
            </a>
            <a href="#">
              <span>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1H4C2.34315 1 1 2.34315 1 4V10C1 11.6569 2.34315 13 4 13H10C11.6569 13 13 11.6569 13 10V4C13 2.34315 11.6569 1 10 1Z"
                    stroke="currentcolor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.39611 6.62194C9.47016 7.12128 9.38487 7.63127 9.15237 8.07934C8.91987 8.52742 8.552 8.89078 8.10109 9.11774C7.65018 9.3447 7.13918 9.42369 6.64078 9.34349C6.14239 9.2633 5.68197 9.02799 5.32502 8.67103C4.96806 8.31408 4.73275 7.85366 4.65255 7.35526C4.57236 6.85687 4.65135 6.34587 4.87831 5.89496C5.10527 5.44405 5.46862 5.07618 5.9167 4.84368C6.36478 4.61118 6.87477 4.52589 7.37411 4.59994C7.88347 4.67547 8.35502 4.91281 8.71913 5.27692C9.08323 5.64103 9.32058 6.11258 9.39611 6.62194Z"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.2974 3.69983H10.3074"
                    stroke="currentcolor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
            <a href="#">
              <span>
                <svg
                  width={8}
                  height={16}
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0H5.81818C4.85376 0 3.92883 0.383116 3.24688 1.06507C2.56493 1.74702 2.18182 2.67194 2.18182 3.63636V5.81818H0V8.72727H2.18182V15.6234H5.09091V8.72727H7.27273L8 5.81818H5.09091V3.63636C5.09091 3.44348 5.16753 3.25849 5.30392 3.1221C5.44031 2.98571 5.6253 2.90909 5.81818 2.90909H8V0Z"
                    fill="currentcolor"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="ab-2-hero-social-text d-none">
            <span>Follow us</span>
          </div>
        </div>
        <div className="container d-none">
          <div className="ab-2-hero-main ">
            <div className="row">
              <div className="col-xl-7">
                <div className="ab-2-hero-title-box position-relative">
                  <span
                    className="ab-2-hero-subtitle"
                    data-stagger="0.05"
                    data-on-scroll={0}
                    data-delay="0.6"
                  >
                    What's up
                  </span>
                  <h4
                    className="ab-2-hero-title tp-char-animation"
                    data-stagger="0.05"
                    data-on-scroll={0}
                    data-delay="0.6"
                    style={{ perspective: 300 }}
                  >
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        G
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        e
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        t
                      </div>
                    </div>{" "}
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        t
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        o
                      </div>
                    </div>{" "}
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        k
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        n
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        o
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        w
                      </div>
                    </div>{" "}
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        m
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        e
                      </div>
                    </div>
                  </h4>
                  <a className="tp-btn-white background-black" href="#">
                    Download CV
                    <span>
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 0C12 3.0432 9.53292 5.5102 6.48975 5.5102C6.48975 2.46701 8.95677 0 12 0Z"
                          fill="currentcolor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.0231934 0.0231209C3.06639 0.0231209 5.5334 2.49015 5.5334 5.53333C2.4902 5.53333 0.0231934 3.0663 0.0231934 0.0231209Z"
                          fill="currentcolor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.48975 6.4898C9.53294 6.4898 12 8.95682 12 12C8.95675 12 6.48975 9.53297 6.48975 6.4898Z"
                          fill="currentcolor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.5102 6.48981C5.5102 9.533 3.04318 12 0 12C0 8.95681 2.46703 6.48981 5.5102 6.48981Z"
                          fill="currentcolor"
                        />
                      </svg>
                    </span>
                  </a>
                  <div className="ab-2-hero-shape-1">
                    <img
                      src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/hero/hero-2-shape-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ab-2-hero-shape-2">
                    <img
                      className="tp-zoom-in-out"
                      src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/hero/hero-2-shape-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-10 offset-xl-2">
                <div className="ab-2-hero-thumb-wrap position-relative">
                  <img
                    src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/hero/hero-2-1.jpg"
                    alt=""
                    data-speed="0.9"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, -64.7px)",
                      willChange: "transform"
                    }}
                    data-lag={0}
                  />
                  <h4
                    className="ab-2-hero-title tp-char-animation"
                    data-stagger="0.05"
                    data-on-scroll={0}
                    data-delay="0.6"
                    style={{ perspective: 300 }}
                  >
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        —
                      </div>
                    </div>{" "}
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        a
                      </div>
                    </div>{" "}
                    <div style={{ position: "relative", display: "inline-block" }}>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        l
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        i
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        t
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        t
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        l
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        e
                      </div>
                    </div>{" "}
                    <br />{" "}
                    <div style={{ position: "relative", display: "inline-block" }}>
                      {" "}
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        b
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        e
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        t
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        t
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        e
                      </div>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          opacity: 1,
                          visibility: "inherit",
                          transform: "translate(0px, 0px)"
                        }}
                      >
                        r
                      </div>
                    </div>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-about-area ab-about-mt pb-90 z-index-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div
                className="ab-about-content position-relative tp_fade_bottom"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  opacity: 1,
                  transform: "translate(0px, 0px)"
                }}
              >
                <span>
                  <svg
                    width={41}
                    height={46}
                    viewBox="0 0 41 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    
                  >
                    <path
                      d="M20.2573 44.0238C18.1761 44.6511 15.9722 44.4264 14.0462 43.3853C12.1202 42.3442 10.7078 40.6126 10.071 38.51C9.97643 38.2014 9.64869 38.0224 9.34016 38.117C9.03163 38.2116 8.85256 38.5393 8.94717 38.8479C9.67222 41.2447 11.2902 43.2269 13.486 44.413C15.6922 45.6031 18.2126 45.8664 20.5992 45.1374C20.9005 45.0459 21.0868 44.715 20.9922 44.4065C20.8904 44.1011 20.5658 43.9292 20.2573 44.0238ZM37.6132 22.6896C37.311 22.7985 37.1526 23.1342 37.2615 23.4363L38.2557 26.2265C39.2905 29.1269 39.0625 32.3414 37.6261 35.0506C36.2696 37.6131 33.9997 39.4875 31.234 40.3255C28.4684 41.1634 25.5401 40.8678 22.9896 39.4804L11.3416 33.1806C11.0583 33.0245 10.7037 33.1311 10.5476 33.4144C10.3915 33.6977 10.4981 34.0522 10.7814 34.2083L22.4294 40.5081C25.2569 42.0373 28.5088 42.3684 31.5687 41.4422C34.6072 40.5255 37.1523 38.4431 38.6545 35.5934C40.2439 32.5937 40.4907 29.0372 39.3542 25.8315L38.3599 23.0413C38.2511 22.7392 37.9154 22.5807 37.6132 22.6896ZM19.4432 41.3502C16.603 42.2127 13.5811 40.5734 12.713 37.7015C12.6184 37.3929 12.2906 37.2139 11.9821 37.3085C11.6736 37.4031 11.4945 37.7308 11.5891 38.0394C12.6464 41.5283 16.3207 43.5187 19.7851 42.4637C20.0865 42.3723 20.2727 42.0414 20.1781 41.7328C20.0866 41.4315 19.7518 41.2556 19.4432 41.3502ZM25.3749 0.522791C25.0664 0.617395 24.8873 0.945141 24.9819 1.25367C25.0765 1.5622 25.4043 1.74127 25.7128 1.64666C30.0171 0.346022 34.5897 2.8173 35.9062 7.15732C36.0008 7.46585 36.3285 7.64492 36.6371 7.55031C36.9385 7.45889 37.1247 7.12796 37.0301 6.81944C35.5212 1.85522 30.2963 -0.967056 25.3749 0.522791ZM27.7399 8.08209C26.9214 8.39518 26.4635 9.24906 26.652 10.1144L28.1973 17.2348L14.2749 9.70684C12.6671 8.82337 10.6168 9.46252 9.76828 11.0719C9.38242 11.7996 9.29014 12.6104 9.46278 13.3631L5.93535 11.4528C4.31647 10.5828 2.27337 11.2188 1.41768 12.8313C0.55802 14.4541 1.17336 16.4893 2.79542 17.3664L3.45091 17.7246C2.70699 18.013 2.09889 18.5489 1.72413 19.2631C0.864475 20.8859 1.47664 22.914 3.09869 23.7911L5.19531 24.9273C4.45139 25.2157 3.84329 25.7516 3.46853 26.4658C2.61205 28.0958 3.22739 30.131 4.84627 31.0009L8.3737 32.9113C8.657 33.0673 9.01153 32.9608 9.16763 32.6775C9.32372 32.3942 9.21719 32.0397 8.93388 31.8836L5.40646 29.9733C4.34783 29.4012 3.94556 28.0751 4.51048 27.0196C5.05717 25.9809 6.38725 25.5683 7.42842 26.1396L17.3044 31.4751C17.5877 31.6312 17.9494 31.5215 18.0983 31.2414C18.2544 30.9581 18.1479 30.6035 17.8646 30.4474L3.65888 22.7634C2.60025 22.1913 2.19798 20.8652 2.76291 19.8098C3.3096 18.771 4.63967 18.3584 5.68084 18.9297L19.8866 26.6137C20.1699 26.7698 20.5244 26.6633 20.6805 26.38C20.8366 26.0967 20.73 25.7421 20.4467 25.586L17.555 24.0085L6.23467 17.8877L3.35242 16.3316C2.2938 15.7595 1.89153 14.4334 2.45645 13.378C3.00314 12.3392 4.33322 11.9266 5.37439 12.4979L19.5801 20.1819L22.4655 21.7452C22.7488 21.9013 23.1105 21.7916 23.2595 21.5115C23.4155 21.2281 23.309 20.8736 23.0257 20.7175L11.6991 14.5825C10.6404 14.0104 10.2382 12.6843 10.8031 11.6289C11.3498 10.5901 12.6799 10.1775 13.721 10.7488L28.1934 18.5707C28.1427 18.7643 28.0715 18.9499 27.9764 19.1206C27.0668 20.8426 26.5493 22.7921 26.4863 24.7444C26.4233 26.6967 26.8173 28.6765 27.6149 30.468L27.723 30.7107C27.8533 31.0033 28.204 31.138 28.4966 31.0077C28.7893 30.8774 28.9239 30.5267 28.7936 30.234L28.6856 29.9913C27.9539 28.3672 27.6044 26.5642 27.6596 24.7864C27.7148 23.0087 28.1856 21.2425 29.0183 19.6744C29.4383 18.8888 29.5598 17.9708 29.3752 17.0952L27.8101 9.8725C27.7464 9.57585 27.9025 9.29254 28.1801 9.18606C29.1088 8.83244 30.1219 8.86033 31.0265 9.2786C31.9486 9.69764 32.6416 10.4667 32.9833 11.4263L36.3555 20.8635C36.4643 21.1657 36.8 21.3241 37.1022 21.2152C37.4043 21.1063 37.5628 20.7707 37.4539 20.4685L34.0818 11.0314C33.6312 9.76953 32.7174 8.77375 31.5113 8.21607C30.3019 7.65124 28.9676 7.61245 27.7399 8.08209ZM26.1787 3.19248C25.8701 3.28708 25.6911 3.61483 25.7857 3.92336C25.8803 4.23188 26.208 4.41095 26.5165 4.31635C29.3639 3.45059 32.3858 5.08993 33.254 7.96187C33.3486 8.27039 33.6763 8.44946 33.9848 8.35486C34.2862 8.26343 34.4724 7.93251 34.3778 7.62398C33.3173 4.12786 29.6391 2.14783 26.1787 3.19248Z"
                      fill="currentcolor"
                      stroke="currentcolor"
                      strokeWidth="0.2"
                    />
                  </svg>
                  Hi!
                </span>
                <p className="tp-dropcap">
                  I’m really glad you’re here.
                  You have a space—something personal, something you’re shaping—and you want it to feel alive, thoughtful, and beautifully balanced. That’s exactly where I come in.
                </p>
                <div class="col-12 pt-4">
                  <div class="d-flex justify-content-start">
                    <a className="button-77 poppins-regular " role="button" href="https://calendly.com/praveenpatkuwal29/30min">
                      Book a Design Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                  <div
                    className="ab-about-category-title-box tp_fade_bottom ab-2-about-title-style position-relative"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 1,
                      transform: "translate(0px, 0px)"
                    }}
                  >
                    <h4 className="ab-about-category-title">
                      Crafted<br />
                      <span>With Purpose</span>
                    </h4>
                    <img
                      className="ab-about-shape-1 d-none d-md-block"
                      src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/about/shape-1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-8">
                  <div className="row">
                    <div
                      className="col-xl-6 col-lg-6 col-md-6 mb-40 tp_fade_bottom"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate(0px, 0px)"
                      }}
                    >
                      <div className="ab-about-category-list category-space-1">
                        <span className="ab-about-category-title mb-30">
                          What We’ll Do
                        </span>
                        <ul>
                          <li>Understand your space and style</li>
                          <li>Recommend the right planters</li>
                          <li>Create a layout for placement</li>
                          <li>Suggest ideal plants</li>
                          <li>Support you till setup is done</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      className="col-xl-6 col-lg-6 col-md-6 mb-40 tp_fade_bottom"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate(0px, 0px)"
                      }}
                    >
                      <div className="ab-about-category-list category-space-2">
                        <span className="ab-about-category-title mb-30">Why Custom Matters</span>
                        <ul>
                          <li>Perfectly tailored to your space</li>
                          <li>Reflects your unique style</li>
                          <li>Ideal size, shape & proportion</li>
                          <li>Choice of materials & finishes</li>
                          <li>Creates a cohesive design flow</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ab-2-portfolio-area pb-115">
        <div className="container-fluid ab-2-portfolio-thumb-wrap">
          <div className="row gx-5">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 1500,       // 1.5 seconds delay between scrolls
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1440:{
                slidesPerView: 3,
              }
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="ab-2-portfolio-thumb fix">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/portfolio/portfolio-1.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ab-2-portfolio-thumb fix">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/portfolio/portfolio-2.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ab-2-portfolio-thumb fix">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/portfolio/portfolio-3.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ab-2-portfolio-thumb fix">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/portfolio/portfolio-1.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ab-2-portfolio-thumb fix">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/portfolio/portfolio-2.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="ab-2-portfolio-thumb fix">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/portfolio/portfolio-3.jpg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </div>
      <div className="ab-2-work-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="ab-2-work-title-box position-relative">
                <h4
                  className="ab-2-work-title tp_title_anim"
                  style={{ perspective: 400 }}
                >
                  <div
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "160.641px 30px",
                      transform: "translate3d(0px, 0px, 0px)",
                      opacity: 1
                    }}
                  >
                   Our
                  </div>
                  <div
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "160.641px 30px",
                      transform: "translate3d(0px, 0px, 0px)",
                      opacity: 1
                    }}
                  >
                    {" "}
                    Process
                  </div>
                </h4>
                <span
                  className="ab-2-work-subtitle tp_title_anim"
                  style={{ perspective: 400 }}
                >
                  <div
                    style={{
                      display: "block",
                      textAlign: "start",
                      position: "relative",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "160.641px 10px",
                      transform: "translate3d(0px, 0px, 0px)",
                      opacity: 1
                    }}
                  >
                    Vision to Verdant Reality
                  </div>
                </span>
                <img
                  className="ab-2-work-shape d-none d-lg-block"
                  src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-about/about/shape-1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div
                className="ab-2-work-item tp_fade_bottom"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  opacity: 1,
                  transform: "translate(0px, 0px)"
                }}
              >
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>01</i>Space Discovery
                    </span>
                    <h4 className="sv-service-title">Understand Your Space</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>
                      We begin by understanding your layout, lifestyle, and the feeling you want your space to hold—laying the foundation for a meaningful design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ab-2-work-item tp_fade_bottom"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  opacity: 1,
                  transform: "translate(0px, 0px)"
                }}
              >
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>02</i> Design Curation
                    </span>
                    <h4 className="sv-service-title">Curate & Design</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>
                      We handpick the right planters, finishes, and placements that align with your aesthetic and create visual harmony in your space.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="ab-2-work-item tp_fade_bottom"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  opacity: 1,
                  transform: "translate(0px, 0px)"
                }}
              >
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>03</i> Final Execution
                    </span>
                    <h4 className="sv-service-title">Deliver the Experience</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>
                      From coordination to placement, we ensure each detail is executed with care—bringing your space to life, just as envisioned.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-brand-4-area pt-120 pb-120 d-none">
        <div className="container">
          <div className="row gx-0">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="tp-brand-4-item position-relative">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/home-04/brand/brand-1.png" alt="" />
                <div className="tp-brand-4-line-text d-flex align-items-center">
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="tp-brand-4-item position-relative">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/home-04/brand/brand-2.png" alt="" />
                <div className="tp-brand-4-line-text d-flex align-items-center">
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="tp-brand-4-item position-relative">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/home-04/brand/brand-3.png" alt="" />
                <div className="tp-brand-4-line-text d-flex align-items-center">
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="tp-brand-4-item position-relative">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/home-04/brand/brand-4.png" alt="" />
                <div className="tp-brand-4-line-text d-flex align-items-center">
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="tp-brand-4-item position-relative">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/home-04/brand/brand-5.png" alt="" />
                <div className="tp-brand-4-line-text d-flex align-items-center">
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="tp-brand-4-item position-relative">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/home-04/brand/brand-6.png" alt="" />
                <div className="tp-brand-4-line-text d-flex align-items-center">
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="tp-brand-4-item position-relative">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/home-04/brand/brand-7.png" alt="" />
                <div className="tp-brand-4-line-text d-flex align-items-center">
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="tp-brand-4-item position-relative">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/home-04/brand/brand-8.png" alt="" />
                <div className="tp-brand-4-line-text d-flex align-items-center">
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                  <span>TopoChico.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-line-text-wrap tp-line-text-wrap-2 pt-120 pb-120">

          <Swiper
            spaceBetween={20}
            slidesPerView={'auto'}
            loop={true}
            speed={3000} // slow transition speed (in ms)
           
            autoplay={{
              delay: 0,       // 1.5 seconds delay between scrolls
              reverseDirection: true, 
            }}
            
            modules={[ Autoplay]}
            className="mySwiper tp-img-slide "
          >
            <SwiperSlide >
              <div className="sv-port-thumb port-thumb-2">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-service/portfolio/port-4.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="sv-port-thumb port-thumb-1">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-service/portfolio/port-2.jpg" alt="" />
              </div>
              </SwiperSlide>
              <SwiperSlide >
              <div className="sv-port-thumb port-thumb-2">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-service/portfolio/port-1.jpg" alt="" />
              </div>
              </SwiperSlide>
              <SwiperSlide >
              <div className="sv-port-thumb port-thumb-1">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-service/portfolio/port-2.jpg" alt="" />
              </div>
              </SwiperSlide>
              <SwiperSlide >
              <div className="sv-port-thumb port-thumb-2">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-service/portfolio/port-2.jpg" alt="" />
              </div>
              </SwiperSlide>
              <SwiperSlide >
              <div className="sv-port-thumb port-thumb-1">
                <img src="https://html.hixstudio.net/liko-prev/liko/assets/img/inner-service/portfolio/port-3.jpg" alt="" />
              </div>
              </SwiperSlide>
          </Swiper>
      </div>

      <style>{`.footer-bg-color { background-color: #d9d4c5!important; margin-bottom:20px; }`}</style>
      <Footer />
    </>
  );
};

export default Services;
