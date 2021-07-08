import { useEffect, useState } from 'react';

// hooks
import useProductApi from '../../useProductApi';
// types
import { HeroBannerTypeProps } from './types';

import ResponsiveImage from '../../responsiveImage';

const getBannerVariant = (type: 'chevronClear' | 'chevronRed' | 'topBar') => {
  switch (type) {
    case 'chevronClear':
      return '2';
    case 'chevronRed':
      return '1';
    case 'topBar':
      return '3';
    default:
      return '1';
  }
};

const fullWidth = ({
  incVat,
  destinationUrl,
  hoverOver,
  images,
  webIcon,
  bannerType,
  backgroundImage,
  freeType,
  sku,
  skuDropdown,
  // override props
  freeTypePoundInc,
  freeTypePoundEx,
  template,
}: HeroBannerTypeProps): JSX.Element => {
  const { product, isError, isLoading } = useProductApi(sku);

  const [[pound, pence], setPrice] = useState<[string, string]>(['00', '00']);

  useEffect(() => {
    if (incVat) {
      const [one, two] = freeTypePoundInc.split('.');
      setPrice([one, two]);
    } else {
      const [one, two] = freeTypePoundEx.split('.');
      setPrice([one, two]);
    }
  }, [incVat]);

  const freeTypeContent = freeType
    .replace(/<p>/g, '<span>')
    .replace(/<\/p>/g, '</span>');

  return (
    <div className="tmshp_carousel">
      <a
        href={destinationUrl}
        className={`banner banner--var${getBannerVariant(bannerType)}`}
        title={hoverOver}
      >
        <div
          className="banner__wrapper"
          style={{
            background: `url(${backgroundImage}) no-repeat`,
          }}
        >
          <div className="banner__content-wrapper">
            <div className="banner__content">
              <p className="banner__deal">
                {template === 'saveUpTo' ? (
                  <span className="banner__deal-text">
                    save
                    <span className="banner__deal-up-to">up to</span>
                  </span>
                ) : (
                  <span className="banner__deal-save">{template}</span>
                )}

                <span className="banner__deal-value">
                  {skuDropdown}
                  <sup>£</sup>
                  {pound}
                  <sup>.{pence}</sup>
                </span>
              </p>
              <p
                className="banner__text"
                dangerouslySetInnerHTML={{ __html: freeTypeContent }}
              />
            </div>
          </div>
          <div className="banner__img-align">
            <ResponsiveImage
              images={images}
              alt={hoverOver}
              className="banner__img"
            />
          </div>

          <img src={webIcon} className="banner__promo-icon" alt="" />

          {product && (
            <div className="price-point pp--pound">
              <div className="pp__tmsg">ONLY</div>
              <div className="pp__price">
                <sup className="pp__pnd">£</sup>
                <span className="pp_numbs">
                  {pound}
                  <span className="pp_vat">
                    {incVat ? 'INC VAT' : 'EX VAT'}
                  </span>
                </span>
                <sup className="pp__pnc">.{pence}</sup>
              </div>
              <div className="pp__bmsg">
                Was £{incVat ? product.priceWas : product.priceWasExVat}
              </div>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default fullWidth;
