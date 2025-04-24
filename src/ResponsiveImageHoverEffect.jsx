import React,{ useState }  from "react";
import css from "./ResponsiveImageHoverEffect.css?raw";




const ResponsiveImageHoverEffect = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Array of image sources
    const images = [
      "https://videos.pexels.com/video-files/3770018/3770018-hd_1920_1080_25fps.mp4",
      "https://videos.pexels.com/video-files/10614143/10614143-hd_2560_1440_30fps.mp4",
      "https://videos.pexels.com/video-files/10614137/10614137-hd_2560_1440_30fps.mp4"
    ];
  return (
    <>
    <style>{css}</style>
        <div className="containers px-2 py-3">
        {images.map((src, index) => (
            <div
            key={index}
            className={`box ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
            >
            <video src={src} alt={`Image ${index + 1}`}  autoPlay muted loop />
            </div>
        ))}
        </div>
    </>
  );
};

export default ResponsiveImageHoverEffect;