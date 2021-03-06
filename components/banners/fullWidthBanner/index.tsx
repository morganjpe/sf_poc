import Link from 'next/link';
import styled from 'styled-components';
import { BrManageContentButton } from '@bloomreach/react-sdk';
import { Content } from '@bloomreach/spa-sdk';
import ResponsiveImage from '../../responsiveImage';

interface FullWidthBannerProps {
  url: string;
  images: string[];
  isFullWidth: boolean;
  content: Content | undefined;
}

const FullWidthBanner = ({
  images,
  url,
  isFullWidth,
  content,
}: FullWidthBannerProps): JSX.Element => (
  <FullWidthBanner.Container>
    <div
      className={
        isFullWidth
          ? 'full_width_banner paint-dec-deals display-f-width'
          : 'full_width_banner paint-dec-deals'
      }
    >
      <BrManageContentButton content={content} />
      <div className="full_width_wrp">
        <div className="full_width_banner">
          <div className="header-container">
            <div className="flex-container">
              <Link href={url}>
                <ResponsiveImage style={{ width: '100%' }} images={images} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </FullWidthBanner.Container>
);

FullWidthBanner.Container = styled.div`
  cursor: pointer;

  .display-f-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    img {
      width: 100%;
    }
  }
`;

export default FullWidthBanner;
