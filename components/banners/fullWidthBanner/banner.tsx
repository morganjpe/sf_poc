import ResponsiveImage from 'components/responsiveImage';
import Link from 'next/link';

interface Banner {
  images: string[];
  url: string;
  isFullWidth: boolean;
}

const FullWidthBanner = ({ images, url, isFullWidth }: Banner): JSX.Element => (
  <div className="full_width_banner paint-dec-deals">
    <div className="full_width_wrp">
      <div className="full_width_banner">
        <div className="header-container">
          <div className="flex-container">
            <Link href={url}>
              <ResponsiveImage images={images} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FullWidthBanner;
