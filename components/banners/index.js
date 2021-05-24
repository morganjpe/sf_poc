import { BrManageContentButton } from '@bloomreach/react-sdk';
import Preview from '../cms/preview';

const Banner = ({ component, page }) => {
  const { image, price, subheading, heading } = component.getParameters();

  return (
    <Preview preview={page.isPreview()}>
      {page.isPreview() && <BrManageContentButton />}
      <div className="cat-banner-1">
        <a
          href="/"
          className="banner banner--freetype banner--var2"
          title="Drayton TRV£4.16Screwfix worth £34.83 with any Acova Column Radiator"
          tabIndex="0"
        >
          <div className="banner__wrapper">
            <div className="banner__content-wrapper">
              <div className="banner__content">
                <p className="banner__deal">
                  <span className="banner__text--small">{heading}</span>

                  <span className="banner__deal-value">
                    <sup>£</sup>
                    {price}
                    <sup />
                  </span>
                </p>
                <p className="banner__text">
                  <span>{subheading}</span>
                  <span />
                  <span />
                </p>
              </div>
            </div>
            <div
              className="banner__img-align"
              style={{
                left: '540px',
              }}
            >
              <img src={image} alt="" className="banner__img swap" />
            </div>
          </div>
        </a>
      </div>
    </Preview>
  );
};
export default Banner;
