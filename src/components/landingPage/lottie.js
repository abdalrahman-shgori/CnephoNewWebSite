import React, { Component } from 'react';
import Lottie from 'react-lottie';

class LottieAnimation extends Component {
  componentDidUpdate(prevProps) {
    // Perform data fetching or side effects here based on props or state changes
    // You can use this.props and this.state to access current props and state
    // and prevProps and prevState to access previous props and state
  }

  render() {
    const { animationData, loop = true, autoplay = true } = this.props;

    const defaultOptions = {
      loop,
      autoplay,
      animationData,
    };

    return (
      <>
        <Lottie options={defaultOptions} width="100%" />
      </>
    );
  }
}

export default LottieAnimation;
