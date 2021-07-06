interface SelectionValues {
  selectionValues: {
    key: string;
    label: string;
  }[];
}

export default interface heroBannerProps {
  template: SelectionValues;
  freeTypePoundInc: string;
  freeTypePoundEx: string;
  webIcon: string;
  sku: string;
  skuDropdown: SelectionValues;
  freeType: string;
  hoverOverText: string;
  destinationUrl: string;
  altTagDescription: string;
  images: [string, string, string];
  hideBorder: boolean;
  bannerType: SelectionValues;
}
