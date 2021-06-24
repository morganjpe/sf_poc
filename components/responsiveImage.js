// import Image from 'next/image';
import useResponsiveBreakpoint from './useResponsiveBreakpoint';

const ResponsiveImage = ({ images, alt, ...rest }) => {
  const breakpoint = useResponsiveBreakpoint();

  console.log(breakpoint);
  //   return <Image layout="fill" src={images[breakpoint]} {...rest} />;
  return <img src={images[breakpoint]} alt={alt} {...rest} />;
};

export default ResponsiveImage;
