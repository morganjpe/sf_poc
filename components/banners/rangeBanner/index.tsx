import * as React from 'react';

interface RangeBannerProps {
  productDescription: string;
  sku: string;
  destinationUrl: string;
  turnOffSavingWasPrice: 'true' | 'false';
  image: string;
  pricePoint: 'only' | 'fromOnly';
}

const RangeBanner = ({
  productDescription,
  sku,
  destinationUrl,
  turnOffSavingWasPrice,
  image,
  pricePoint,
}: RangeBannerProps): JSX.Element => {
  return <div>hello world</div>;
};

export default RangeBanner;
