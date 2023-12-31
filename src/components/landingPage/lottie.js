// LottieAnimation.js
import React from 'react';
import Lottie from 'react-lottie';
import animationDataHome3 from '../../assets/HomePart1/HomePart2.json';
import { Box } from '@mui/material';

function LottieAnimation ({ animationData, loop = true, autoplay = true }) {
  const defaultOptions = {
    loop,
    autoplay,
    animationData,
  };
  const defaultOptions2 = {
    loop: false,
    autoplay: false,
    animationData: animationDataHome3,
  };

  return(
<>

<Lottie   options={defaultOptions} width="100%" 


/>

</>

  )
};

export default LottieAnimation;
