
import React from "react";
import './Explore'
import Card from './Card'
import ResponsiveImageHoverEffect from './ResponsiveImageHoverEffect'
import ResponsiveCard from './ResponsiveCard'
import ScrollingTextSection from './ScrollingTextSection'
import VideoReelsSection from './VideoReelsSection'
import './Explore.css'
import { a } from "framer-motion/client";
const cards = [
  { text: "About", icon:"🪴", desc:"Rooted in vision, grown with craftsmanship—this is the Yuccabe story.", link:"/about", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "Services",icon:"🛠️", desc:"From design consultation to custom planters, we shape green experiences.", link:"/services", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "Projects", icon:"🏗️", desc:"See how Yuccabe transforms spaces—one planter at a time.", link:"/projects", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "Collections", icon:"🌿", desc:"Explore curated pieces that merge form, function, and finesse.", link:"/collections", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "Blogs", icon:"✍️", desc:"Green ideas, design tips, and planter stories—all in one place.", link:"/blogs", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "Contact", icon:"✉️", desc:"Have a vision? Let’s grow it together—reach out to us.", link:"/contact", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
];

const Work = () => {
    
  return (
    <>
      <div className="p-4 pt-5 update-card">
        <div style={{ width:"100%", gap:20 }} className="d-flex justify-content-center align-items-center px-2">
          {cards.map((card, index) => (
            // <Card  text={card.text} img={card.img} link={card.link}/>
            <div className="card-0 p-4" key={index}>
              <div className='text-center'>
                  {/* <div className="debdj mx-auto"> */}
                    <div className="fs-2">{card.icon}</div>
                    <div className="cell_h4 mx-auto">
                      <h4 className="h-h7 is-big" style={{fontSize:40}}>  {card.text}</h4>
                    </div>
                    <div className="pt-3 body_17" style={{height:70}}>{card.desc} </div>
                  {/* </div> */}
              </div>
            </div>
          ))}
        </div>
        <ResponsiveImageHoverEffect />
        <ResponsiveCard />
        <ScrollingTextSection />
        <VideoReelsSection />
      </div>
    </>
  );
};

export default Work;

// Inline CSS styles
