import React from 'react';

const LottieBackground = () => {
  return (
    <lottie-player
      src="https://lottie.host/e95b165a-9a9e-4254-8ae2-bd7efe478858/QMu9zpGLbp.json"
      background="transparent"
      speed="1"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '130vw',
        height: '100vh',
        zIndex: -1
      }}
      loop
      autoplay
    ></lottie-player>
  );
};

export default LottieBackground;
