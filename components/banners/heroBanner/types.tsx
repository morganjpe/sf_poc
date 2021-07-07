import { SelectionTypes, ResponsiveImage } from '../../types';

export interface HeroBannerProps {
  template: SelectionTypes;
  freeTypePoundInc: string;
  freeTypePoundEx: string;
  webIcon: string;
  sku: string;
  skuDropdown: SelectionTypes;
  freeType: string;
  hoverOver: string;
  destinationUrl: string;
  altTagDescription: string;
  responsiveImage: ResponsiveImage;
  hideBorder: boolean;
  bannerType: SelectionTypes;
  backgroundImage: string;
}

export interface HeroBannerTypeProps
  extends Omit<
    HeroBannerProps,
    'template' | 'skuDropdown' | 'bannerType' | 'responsiveImage'
  > {
  template: 'from' | 'save' | 'saveUpTo' | 'under'; // roundel?
  skuDropdown: 'mainPrice' | 'savePercent' | 'savePound'; // required for sku
  bannerType: 'chevronClear' | 'chevronRed' | 'topBar'; // complete
  images: [string, string, string];
  incVat: boolean;
}
