
import React from "react";
import './Explore'
import Card from './Card'
import ResponsiveImageHoverEffect from './ResponsiveImageHoverEffect'
import ResponsiveCard from './ResponsiveCard'
import ScrollingTextSection from './ScrollingTextSection'
import VideoReelsSection from './VideoReelsSection'
import './Explore.css'
const cards = [
  { text: "About", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "Services", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "Projects", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "Collections", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/667a25f57c4d9fe714639b49_THE_CONVERT_ALT_3.webp" },
  { text: "Blogs", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
  { text: "Contact", img: "https://cdn.prod.website-files.com/64edd229801d8ebadf19ed58/65e172641da90916052bafbd_SCI_FI.webp" },
];

const Work = () => {
    
  return (
    <>
      <div className="p-4 pt-5 update-card">
        <div style={{ width:"100%",gap: '20px' }} className="d-flex justify-content-center align-items-center">
            {cards.map((card, index) => (
                <Card key={index} text={card.text} img={card.img} />
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
