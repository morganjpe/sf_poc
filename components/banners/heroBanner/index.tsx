import FullWidthBanner from './fullWidth';
import HalfWidthBanner from './halfWidth';

// types
import HeroBannerProps from './types';

interface HeroBannerPropsGroup extends HeroBannerProps {
  halfWidth: boolean;
}

const HeroBanner = ({
  halfWidth = false,
  ...rest
}: HeroBannerPropsGroup): JSX.Element => {
  console.log(rest);

  return (
    <div>
      {halfWidth ? (
        <HalfWidthBanner {...rest} />
      ) : (
        <FullWidthBanner {...rest} />
      )}
    </div>
  );
};

export default HeroBanner;

// template,
// freeTypePoundInc,
// freeTypePoundEx,
// webIcon,
// sku,
// skuDropdown,
// freeType,
// hoverOverText,
// destinationUrl,
// altTagDescription,
// images,
// hideBorder,
// bannerType,
// halfWidth = false,
