
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
export default function ResponsiveCard() {
    const headings = [
        "Craft Detail", 
        "Durability Fact", 
        "Material Insight",
        "Sustainability Fact", 
        "Design Insight",
        "Style Fact",
        "Shape Insight", 
        "Trust Factor", 
        "Custom Fact", 
        "Legacy Note"
      ];
      const lines = [
        "Every planter is uniquely handcrafted, ensuring no two pieces are exactly alike.",
        "Designed to endure all seasons—ideal for both indoor elegance and outdoor toughness.", 
        "High-grade FRP and ceramics make each planter strong yet easy to handle.",
        "Manufactured with materials and methods that reduce environmental impact.", 
        "Built to enhance both visual appeal and plant health through intelligent design.",
        "Choose from matte, glossy, textured, or natural stone finishes.",
        "From sculptural centerpieces to sleek corner fits, there’s a shape for all aesthetics.", 
        "A favorite among design professionals for residential, retail, and hospitality spaces.", 
        "Get planters tailored to your brand, theme, or project dimensions.", 
        "Years of expertise meet modern trends to create timeless planter solutions."
      ];
    
      const [heading, setHeading] = useState('');
      const [line, setLine] = useState('');
      const [fading, setFading] = useState(false);
      const idxRef = useRef(0);
    
      useEffect(() => {
        let cancelled = false;
        const typeSpeed = 100;
        const pauseAfter = 2000;
        const fadeDuration = 1000;
    
        const typeText = (text, setter) =>
          new Promise(async resolve => {
            let current = '';
            for (let i = 0; i < text.length; i++) {
              if (cancelled) return;
              current += text[i];
              setter(current);
              await new Promise(r => setTimeout(r, typeSpeed));
            }
            resolve();
          });
    
        const run = async () => {
          while (!cancelled) {
            const i = idxRef.current;
            await typeText(headings[i], setHeading);
            await typeText(lines[i], setLine);
    
            // pause before fade
            await new Promise(r => setTimeout(r, pauseAfter));
    
            // trigger fade
            setFading(true);
            await new Promise(r => setTimeout(r, fadeDuration));
    
            // reset
            if (cancelled) break;
            setHeading('');
            setLine('');
            setFading(false);
            idxRef.current = (i + 1) % headings.length;
          }
        };
    
        run();
        return () => { cancelled = true; };
      }, []);
    
    return (
       <>
        <div className='w-100'>
            <div className="row m-0 p-0 ">
                <style>
                    {
                        `
                            .typing::after {
                                content: '|';
                                animation: blink 0.7s infinite;
                            }
                            @keyframes blink {
                                50% { opacity: 0; }
                            }

                            /* fade out before clearing */
                            .fade-out {
                                animation: fadeOut 1s forwards;
                            }
                            @keyframes fadeOut {
                                to { opacity: 0; }
                            }
                            @media (max-width: 768px) {
                                .introduction {
                                    margin:10px 0px 
                                }
                                .introduction .card-100{
                                    padding:30px 0px;
                                }
                            }
                        `
                    }
                </style>
                <div className="col-lg-5 ">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                        
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1}
                                freeMode={true}
                                loop={true} // <-- Enables infinite scroll
                                autoplay={{
                                    delay: 1500,       // 1.5 seconds delay between scrolls
                                    disableOnInteraction: true,
                                }}
                                modules={[FreeMode, Autoplay]}
                                className="mySwiper"
                            >
                
                                <SwiperSlide>
                                    <div className="card-300">
                                        <img src="/img/Photu4/1.jpg" alt="" className='w-100' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-300">
                                        <img src="/img/Photu4/2.jpg" alt="" className='w-100' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-300">
                                        <img src="/img/Photu4/3.jpg" alt="" className='w-100' />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="card-300">
                                        <img src="/img/Photu4/4.jpg" alt="" className='w-100' />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card-300">
                                <div className='text-center'>
                                    <div className="cell_eyebrow mx-auto"><div className="eyebrow_14-4"><strong>FEATURED</strong></div></div>
                                    <div className="cell_h4 mx-auto">
                                        <h4  className={`typing-heading h-h4 is-big ${fading ? 'fade' : ''}`}> {heading}
                                            {heading && <span className="cursor" />}
                                        </h4>
                                    </div>
                                    <div className="cell_text-2 mx-auto">
                                        <div className={`typing-line body_17 ${fading ? 'fade' : ''}`} >
                                            {line}
                                            {line && <span className="cursor" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-12">
                            <div className="card-300">
                                <video src="/videos/videoplayback.mp4" muted autoPlay loop className='w-10'></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 introduction">
                    <div className='w-100 h-100 radius'>
                        <div className="card-100 mx-auto" >
                            <div className="cell_desc-wrap">
                                <div className="cell_desc-eyebrow">
                                    <div className="eyebrow_22-5">The Introduction</div>
                                </div>
                                <div className="cell_desc-row">
                                    <div className="cell_slant">
                                        <div className="slant-7">the</div>
                                    </div>
                                    <div className="cell_des">
                                        <h2 className="h-h2">Journey<br/></h2>
                                    </div>
                                    <div className="cell_slant is-right">
                                        <div className="slant-7">of</div>
                                    </div>
                                </div>
                                <div className="cell_desc-row">
                                    <div className="cell_desc-row">
                                        <h2 className="h-h2">Every Planter</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="cell_desc-text-2">
                                <h6 className="h-h6">At Yuccabe, every planter is more than a product—it’s a statement of design, purpose, and nature working in harmony. The Explore page is your window into this world—where timeless craftsmanship meets modern aesthetics. Discover our finest collections, see how our planters transform real spaces, and experience the artistry, innovation, and intention behind every piece. This is where green living begins, beautifully.</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
