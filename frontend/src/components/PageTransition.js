import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTransition, animated } from '@react-spring/web';

const PageTransition = ({ children }) => {
  const location = useLocation();

  const transitions = useTransition(location.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reset: true,
  });

  return (
    <>
      {transitions((style, item) => (
        <animated.div style={style}>
          {children}
        </animated.div>
      ))}
    </>
  );
};

export default PageTransition;
