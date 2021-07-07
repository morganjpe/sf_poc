import { useVat } from '../../../state/vat';

import FullWidthBanner from './fullWidth';
import HalfWidthBanner from './halfWidth';

// types
import { HeroBannerProps, HeroBannerTypeProps } from './types';
import { SelectionTypes } from '../../types';

interface HeroBannerPropsGroup extends HeroBannerProps {
  halfWidth: boolean;
}

const getSelectionKey = (object: SelectionTypes) =>
  object.selectionValues[0].key;

const HeroBanner = ({
  halfWidth = false,
  responsiveImage,
  template,
  skuDropdown,
  bannerType,
  ...rest
}: HeroBannerPropsGroup): JSX.Element => {
  const { incVat } = useVat();

  const { desktopImage, tabletImage, mobileImage } = responsiveImage;

  const images: [string, string, string] = [
    mobileImage,
    tabletImage,
    desktopImage,
  ];

  const props = {
    ...rest,
    images,
    template: getSelectionKey(template),
    skuDropdown: getSelectionKey(skuDropdown),
    bannerType: getSelectionKey(bannerType),
    incVat,
  } as HeroBannerTypeProps;

  return (
    <div>
      {halfWidth ? (
        <HalfWidthBanner {...props} />
      ) : (
        <FullWidthBanner {...props} template="under" />
      )}
    </div>
  );
};

export default HeroBanner;
