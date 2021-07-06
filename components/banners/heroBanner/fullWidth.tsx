// types
import HeroBannerProps from './types';

// style="background: url(https://screwfix.scene7.com/is/image/ae235?layer=0&amp;fmt=jpg&amp;op_sharpen=1&amp;scl=1&amp;src=ae235/ShowersBGD) no-repeat"

import ResponsiveImage from '../../responsiveImage';

const fullWidth = ({
  destinationUrl,
  hoverOverText,
  images,
  webIcon,
}: HeroBannerProps): JSX.Element => (
  <div className="landingpage_masonrypaints tmshp_carousel">
    <a
      href={destinationUrl}
      className="banner banner--var2"
      title={hoverOverText}
    >
      <div className="banner__wrapper" style={{}}>
        <div className="banner__content-wrapper">
          <div className="banner__content">
            <p className="banner__deal">
              <span className="banner__deal-save">Save</span>

              <span className="banner__deal-value">
                <sup>£</sup>50<sup>.00</sup>
              </span>
            </p>
            <p className="banner__text">
              <span>on this Screwfix </span>
              <span>Banner</span>
              <span />
            </p>
          </div>
        </div>
        <div className="banner__img-align">
          <ResponsiveImage
            images={images}
            alt={hoverOverText}
            className="banner__img"
          />
        </div>

        <img src={webIcon} className="banner__promo-icon" alt="Clearance" />

        <div className="price-point pp--pound">
          <div className="pp__tmsg">ONLY</div>
          <div className="pp__price">
            <sup className="pp__pnd">£</sup>
            <span className="pp_numbs">
              149<span className="pp_vat">INC VAT</span>
            </span>
            <sup className="pp__pnc">.99</sup>
          </div>

          <div className="pp__bmsg">Was £199.99</div>
        </div>
      </div>
    </a>
  </div>
);

export default fullWidth;
