// import Image from 'next/image';
import useResponsiveBreakpoint from './useResponsiveBreakpoint';

const ResponsiveImage = ({ images, alt, ...rest }) => {
  const breakpoint = useResponsiveBreakpoint();

  if (breakpoint) {
    return <img src={images[breakpoint]} alt={alt} {...rest} />;
  }

  return '';
};

export default ResponsiveImage;
