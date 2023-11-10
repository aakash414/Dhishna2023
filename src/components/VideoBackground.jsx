import React from 'react';
// import robo from '/robo.mp4'

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="video-bg " className='z-[-2]'>
        <source src="/robo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
