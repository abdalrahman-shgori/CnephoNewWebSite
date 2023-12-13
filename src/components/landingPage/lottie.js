// LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';

function LottieAnimation ({ animationData, loop = true, autoplay = true }) {
  const defaultOptions = {
    loop,
    autoplay,
    animationData,
  };

  return(
<>
<Lottie options={defaultOptions} height={400} width={400} />;
</>
  )
};

export default LottieAnimation;
