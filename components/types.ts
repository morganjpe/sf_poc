export interface SelectionTypes {
  selectionValues: {
    key: string;
    label: string;
  }[];
}

export interface ResponsiveImage {
  desktopImage: string;
  mobileImage: string;
  tabletImage: string;
}

export interface ImagePosition {
  mobile: {
    x: number;
    y: number;
  };
  tablet: {
    x: number;
    y: number;
  };
  desktop: {
    x: number;
    y: number;
  };
}
