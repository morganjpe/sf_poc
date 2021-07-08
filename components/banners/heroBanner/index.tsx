import { useVat } from '../../../state/vat';

import Banner from './banner';

// types
import { HeroBannerProps, HeroBannerTypeProps } from './types';
import { SelectionTypes } from '../../types';

interface HeroBannerPropsGroup extends HeroBannerProps {
  halfWidth: boolean;
}

const getSelectionKey = (object: SelectionTypes) =>
  object.selectionValues[0].key;

const HeroBanner = ({
  responsiveImage,
  template,
  skuInfoDropdown,
  bannerType,
  pricePoint,
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
    skuInfoDropdown: getSelectionKey(skuInfoDropdown),
    bannerType: getSelectionKey(bannerType),
    pricePoint: getSelectionKey(pricePoint),
    incVat,
  } as HeroBannerTypeProps;

  return <Banner {...props} />;
};

export default HeroBanner;
