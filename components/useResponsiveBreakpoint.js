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
    getBreakpoint(typeof window !== 'undefined' ? window.innerWidth : null)
  );

  //   console.log(breakpoint);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBreakpoint(getBreakpoint(window.innerWidth));

      window.addEventListener('resize', () => {
        const breakpointValue = getBreakpoint(window.innerWidth);
        setBreakpoint(breakpointValue);
      });
    }
  }, []);

  return breakpoint;
};

export default useResponsiveBreakpoint;
