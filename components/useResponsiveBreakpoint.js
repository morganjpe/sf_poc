import { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

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
  const width = useWindowWidth();
  const [breakpoint, setBreakpoint] = useState(width);

  useEffect(() => {
    const breakpointIndex = getBreakpoint(width);

    setBreakpoint(breakpointIndex);
  }, [width, setBreakpoint]);

  return breakpoint;
};

export default useResponsiveBreakpoint;
