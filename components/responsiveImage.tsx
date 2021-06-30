import useResponsiveBreakpoint from './useResponsiveBreakpoint';

interface ResponsiveImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  images: string[];
}

const ResponsiveImage = ({
  images,
  alt,
  ...rest
}: ResponsiveImageProps): JSX.Element => {
  const breakpoint = useResponsiveBreakpoint();

  if (breakpoint !== null || breakpoint !== undefined) {
    return <img src={images[breakpoint]} alt={alt} {...rest} />;
  }

  return <div />;
};

export default ResponsiveImage;
