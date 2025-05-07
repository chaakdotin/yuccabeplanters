
import React from "react";
import Card from './Card'
import ResponsiveImageHoverEffect from './ResponsiveImageHoverEffect'
import ResponsiveCard from './ResponsiveCard'
import ScrollingTextSection from './ScrollingTextSection'
import VideoReelsSection from './VideoReelsSection'
import './Explore.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import Footer from "./Footer";
import { a, div } from "framer-motion/client";
const cards = [
  { text: "About", icon:"🪴", desc:"Rooted in vision, grown with craftsmanship—this is the Yuccabe story.", link:"/about-us", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "Services",icon:"🛠️", desc:"From design consultation to custom planters, we shape green experiences.", link:"/services", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "Projects", icon:"🏗️", desc:"See how Yuccabe transforms spaces—one planter at a time.", link:"/projects", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "Collections", icon:"🌿", desc:"Explore curated pieces that merge form, function, and finesse.", link:"/collections", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "Blogs", icon:"✍️", desc:"Green ideas, design tips, and planter stories—all in one place.", link:"/blogs", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "Contact", icon:"✉️", desc:"Have a vision? Let’s grow it together—reach out to us.", link:"/contact", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
];

const Work = () => {
    
  return (
    <>

      <div className="p-4 mt-4 update-card">
        {/* <div style={{ width:"100%", gap:20 }} className="d-flex justify-content-center align-items-center px-2 d-none">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            freeMode={true}
            loop={true} // <-- Enables infinite scroll
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
            className="mySwiper"
          >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
               <a href={card.link} className="text-dark">
                <div className="card-0 p-4">
                  <div className='text-center'>
                      <div className="fs-2">{card.icon}</div>
                      <div className="cell_h4 mx-auto">
                        <h4 className="h-h7 is-big" style={{fontSize:40}}>  {card.text}</h4>
                      </div>
                      <div className="pt-3 body_17" style={{height:70}}>{card.desc} </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
          </Swiper>
          
        </div> */}
        <div style={{ width:"100%", gap:20 }} className="jkskdfd d-flex px-2">
          <div className="d-none d-lg-flex col-lg-3 px-2 py-2 justify-content-start poppins-bold" style={{borderRadius:15, textTransform:"uppercase",backgroundColor:"#d9d4c5"}}>
            <Swiper
              spaceBetween={1}
              slidesPerView={1}
              loop={true}
              speed={6000}
              autoplay={{
                delay:0,
                disableOnInteraction: true,
              }}
              allowTouchMove={false}
              modules={[ Autoplay]}
              className="mySwiper2 text-dark" >
               <SwiperSlide>
                  <div className="py-1 ">Lorem Ipsum es simplemente el texto de.</div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="py-1 ">Lorem Ipsum es simplemente el texto de.</div>
                </SwiperSlide>
            </Swiper>
          </div>
          <div className="d-flex col-lg-6 col-md-12 col-sm-12 px-2 py-2 justify-content-center" style={{borderRadius:15, backgroundColor:"#d9d4c5"}}>
            <Swiper
              spaceBetween={5}
              slidesPerView={4}
              freeMode={true}
              loop={true} // <-- Enables infinite scroll
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView:2,
                  spaceBetween:0
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 4,
                },
              }}
              modules={[FreeMode, Autoplay]}
              className="mySwiperjdf" >
              {cards.map((card, index) => (
                <SwiperSlide  key={index+"sdfdsf"} style={{width:"auto"}} >
                  <a href={card.link} className="btns btn--bg btn--yellow-blue justify-content-between" >
                    <span>{card.text}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" class="btn__arrow"><path stroke="currentColor" stroke-width="1.5" d="M17.868 8.073v9.795H8.073"></path><path stroke="currentColor" stroke-width="1.5" d="M17.868 17.868 8.073 8.073"></path><path stroke="currentColor" stroke-width="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path><path stroke="currentColor" stroke-width="1.5" d="M24.97 12.97c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12 0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12Z"></path></svg>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="d-none d-lg-flex col-lg-3 px-2 py-2 justify-content-start poppins-bold" style={{borderRadius:15, textTransform:"uppercase", backgroundColor:"#d9d4c5"}}>
            <Swiper
              spaceBetween={1}
              slidesPerView={1}
              loop={true}
              speed={6000}
              autoplay={{
                delay:0,
                disableOnInteraction: true,
                reverseDirection: true
              }}
              allowTouchMove={false}
              modules={[Autoplay]}
              className="mySwiper2 text-dark " >
                <SwiperSlide >
                  <div className="py-1 ">Lorem Ipsum es simplemente el texto de relleno de.</div>
                </SwiperSlide>
                <SwiperSlide >
                  <div className="py-1 ">Lorem Ipsum es simplemente el texto de relleno de.</div>
                </SwiperSlide>
                
            </Swiper>
          </div>
        </div>
       
        <ResponsiveImageHoverEffect />
        <ResponsiveCard />
        <ScrollingTextSection />
        <VideoReelsSection />
      </div>
      <style>{`.footer-bg-color { background-color: #d9d4c5!important; margin-bottom:20px; }`}</style>
      <Footer />
    </>
  );
};

export default Work;

// Inline CSS styles
