import React, { useRef } from 'react';

const VideoBox = ({link}) => {
  return (
    // <div className="video-box">
      
    // </div>
    <video muted loop playsInline autoPlay>
    <source
      src={link}
      type="video/mp4"
    />
    Your browser does not support HTML5 video.
  </video>
  );
};

const VideoReelsSection = () => {
  return (
    <>
      {/* Inline styles */}
        <style>
            {`
                .video-row {
                  display: flex;
                  flex: 1;
                  gap: 10px;
                  margin: 20px auto;
                  padding: 0px 10px;
                  
                }
                .video-row video {
                  width: 16.2%;
                  height: 100%;
                  object-fit: cover;
                  display: block;
                  transition: transform 0.3s ease;
                  cursor: pointer;
                  border-radius: 15px;
                }
                .video-row video:hover {
                  transform: scale(1.1);
                  border:none;
                  z-index:9;
                }
                @media (max-width:  1024px) {
                  .video-row {
                    padding: 0px 20px;
                  }
                  .video-row video{
                    width: 16%;
                  } 
                }
                @media (max-width: 768px) {
                  .update-card{
                    padding:0px!important;
                  }
                  .video-row video{
                    width: 24%;
                  }
                  .video-row {
                    overflow: hidden;
                    padding: 0px 10px;
                  }
                }
                @media (max-width: 480px) {
                  .video-row video:hover {
                    transform: scale(1);
                  }
                  .video-row {
                    padding: 0px 20px;
                  }
                  .video-row  video{
                    width: 50%;
                  }
                }
            `}
        </style>
        <section className="video-row">
            <VideoBox link="/videos/1.mp4" />
            <VideoBox link="/videos/2.mp4" />
            <VideoBox link="/videos/3.mp4" />
            <VideoBox link="/videos/4.mp4" />
            <VideoBox link="/videos/5.mp4" />
            <VideoBox link="/videos/6.mp4" />
        </section>
    </>
  );
};

export default VideoReelsSection;