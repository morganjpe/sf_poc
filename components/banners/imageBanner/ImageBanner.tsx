// import VisuallyHidden from "@reach/visually-hidden";
/* eslint no-nested-ternary: "off" */
import { Page } from '@bloomreach/spa-sdk';
import { BrManageContentButton } from '@bloomreach/react-sdk';

import ResponsiveImage from '../../responsiveImage';
import Styles from './ImageBanner.module.css';

interface BannerImageProps {
  h1: string;
  // pageRef: string;
  hoverOverText: string;
  destinationUrl: string;
  mobileImage: string;
  tabletImage: string;
  desktopImage: string;
  altTagDescription: string;
  fixedHeight: boolean;
  page: Page;
}

const BannerImage = ({
  h1,
  hoverOverText,
  destinationUrl,
  mobileImage,
  tabletImage,
  desktopImage,
  altTagDescription,
  fixedHeight,
  page,
}: // pageRef,
BannerImageProps): JSX.Element => (
  <div
    className={
      page.isPreview()
        ? fixedHeight
          ? `has-edit-button ${Styles['banner-mg-wrap']}`
          : Styles['banner-mg-wrap']
        : 'ib--border'
    }
  >
    {/* <BrManageContentButton content={page.getContent(pageRef)} /> */}
    <h1 className="ib-title">{h1}</h1>

    <div className={fixedHeight ? '' : 'ib'}>
      <a href={destinationUrl} title={hoverOverText}>
        <ResponsiveImage
          images={[mobileImage, tabletImage, desktopImage]}
          className="banner__img"
          alt={altTagDescription}
        />
      </a>
    </div>
  </div>
);

export default BannerImage;
