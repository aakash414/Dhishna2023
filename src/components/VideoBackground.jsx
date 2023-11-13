import React from 'react';
// import robo from '/robo.mp4'

const VideoBackground = () => {
  return (
    <div className="video-background top-5">
      <video autoPlay muted loop id="video-bg " className='z-[-2]'>
        <source src="/robo.webm" type="video/webm" />
      </video>
    </div>
  );
};

export default VideoBackground;
