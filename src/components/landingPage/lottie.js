import React from 'react';
import Lottie from 'lottie-react';

const LottieAnimation = ({ animationData, loop = true, autoplay = true }) => {
  // Check if animation data is provided
  if (!animationData) {
    console.error("Animation data is not provided.");
    return <div>Error: Animation data is required.</div>;
  }

  return (
    <Lottie 
      animationData={animationData} 
      loop={loop} 
      autoplay={autoplay} 
      style={{ width: '100%' }} // Style can be adjusted as needed
    />
  );
};

export default LottieAnimation;
