import { SelectionTypes, ResponsiveImage, ImagePosition } from '../../types';

export interface HeroBannerProps {
  template: SelectionTypes;
  freeTypePoundInc: string;
  freeTypePoundEx: string;
  freeTypePercent: string;
  webIcon: string;
  skuInfo: string;
  skuRoundel: string;
  skuInfoDropdown: SelectionTypes;
  freeType: string;
  hoverOver: string;
  destinationUrl: string;
  internalUrl: {
    $ref: string;
  };
  altTagDescription: string;
  responsiveImage: ResponsiveImage;
  hideBorder: boolean;
  bannerType: SelectionTypes;
  backgroundImage: string;
  hideWasPrice: boolean;
  pricePoint: SelectionTypes;
  halfWidth: boolean;
  imagePosition: ImagePosition;
  content: any;
}

export interface HeroBannerTypeProps
  extends Omit<
    HeroBannerProps,
    | 'template'
    | 'skuInfoDropdown'
    | 'bannerType'
    | 'responsiveImage'
    | 'pricePoint'
    | 'content'
  > {
  template: 'from' | 'save' | 'saveUpTo' | 'under'; // roundel?
  skuInfoDropdown: 'mainPrice' | 'savePercent' | 'savePound'; // required for sku
  bannerType: 'chevronClear' | 'chevronRed' | 'topBar'; // complete
  images: [string, string, string];
  incVat: boolean;
  pricePoint: 'only' | 'fromOnly';
}
