import { useState, useEffect } from 'react';

const getBreakpoint = (width) => {
  if (width <= 640) {
    return 0;
  }

  if (width > 640 && width < 1024) {
    return 1;
  }

  return 2;
};

const useResponsiveBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(
    getBreakpoint(typeof window !== 'undefined' ? window.innerWidth : 0)
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        const breakpointValue = getBreakpoint(window.innerWidth);
        setBreakpoint(breakpointValue);
      });
    }
  }, []);

  return breakpoint;
};

export default useResponsiveBreakpoint;
