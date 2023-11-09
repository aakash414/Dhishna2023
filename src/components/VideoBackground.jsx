import React from 'react';
import robo from '../../public/robo.mp4'

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="video-bg " className='z-[-5]'>
        <source src={robo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
