import Link from 'next/link';
import ResponsiveImage from '../../responsiveImage';

interface CategoryBlockProps {
  containerColor: string;
  desktopImage: string;
  tabletImage: string;
  mobileImage: string;
  displayName: string;
  textColor: string;
  categoryText: string;
  destinationUrl: string;
  // children: React.ReactNode;
}

const CategoryBlock = ({
  containerColor,
  desktopImage,
  tabletImage,
  mobileImage,
  displayName,
  textColor,
  categoryText,
  destinationUrl,
}: // children,
CategoryBlockProps): JSX.Element => (
  <div
    className="mt__item"
    style={{
      backgroundColor: containerColor.length ? containerColor : '',
    }}
  >
    <div className="cat-link" title={`View all ${displayName}`}>
      <Link href={destinationUrl}>
        <div className="container">
          <div className="mt__item-img">
            <ResponsiveImage
              images={[desktopImage, tabletImage, mobileImage]}
              alt={displayName}
              className="fill"
            />
          </div>
          <div className="mt__item-title">
            {/* {children} */}
            <div
              style={{ color: textColor.length ? textColor : '' }}
              className="h3"
            >
              {categoryText}
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
);

export default CategoryBlock;
