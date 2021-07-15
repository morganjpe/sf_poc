import Banner from './banner';

import type { ResponsiveImage } from '../../types';

interface FullWidthBannerProps {
  responsiveImage: ResponsiveImage;
  externalUrl: string;
  internalUrl: string;
}

const FullWidthBanner = () => (
  <div>
    <Banner />
  </div>
);

export default FullWidthBanner;
