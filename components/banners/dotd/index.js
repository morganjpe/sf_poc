import axios from 'axios';
import { useEffect, useState } from 'react';

// components
import PromoIcon from './promoIcon';

import { useVat } from '../../../state/vat';
import ResponsiveImage from '../../responsiveImage';

const dealType = (dealImage) => {
  if (dealImage === 'Deal of the Week') {
    return 'week';
  }
  return 'day';
};

const DotdBanner = ({
  dealImage = '',
  productDescription,
  desktopImage = '',
  tabletImage = '',
  mobileImage = '',
  sku,
  fromOnly = '',
  roundelIncVatManual = '',
  roundelExVatManual = '',
  turnOffWasPrice = 'false',
  wasPriceIncVatManual = '',
  wasPriceExVatManual = '',
  promoIcon = '',
}) => {
  const type = dealType(dealImage);
  const { incVat } = useVat();
  const [product, setProduct] = useState(null);

  const createPrice = () => {
    if (incVat) {
      if (roundelIncVatManual.length) {
        return parseFloat(roundelIncVatManual).toFixed(2).split('.');
      }

      if (product && product.price) {
        return parseFloat(product.price).toFixed(2).split('.');
      }
    }

    if (roundelExVatManual.length) {
      return parseFloat(roundelExVatManual).toFixed(2).split('.');
    }

    if (product && product.exvatprice) {
      return parseFloat(product.exvatprice).toFixed(2).split('.');
    }

    return ['00', '00'];
  };

  const [pounds, pence] = createPrice();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/product`, {
          params: {
            sku,
          },
        });
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="dotd-cont" style={{ minHeight: 'initial' }}>
      <div className="dotd-inner" style={{ minHeight: 'initial' }}>
        <a href="/" className={`banner banner--var6 dot--${type}`}>
          <div className="banner__wrapper" title={dealImage}>
            <div className="banner__content-wrapper">
              <div className="banner__content">
                <div className="clear-flow">
                  <div
                    data-testid="dotd-heading-image"
                    className="dot-header"
                  />
                </div>

                <div className="banner__product-panel">
                  <p className="banner__prod-title">
                    {productDescription.length
                      ? productDescription
                      : product && product.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="banner__img-align">
              <ResponsiveImage
                images={[mobileImage, tabletImage, desktopImage]}
                className="banner__img"
                alt={
                  productDescription.length
                    ? productDescription
                    : product && product.description
                }
              />
            </div>
            <PromoIcon promoIcon={promoIcon} />
            <div className="price-point pp--pound">
              <div className="pp__tmsg">
                {fromOnly ? fromOnly.toUpperCase() : 'ONLY'}
              </div>
              <div className="pp__price">
                <sup className="pp__pnd">£</sup>

                <span className="pp_numbs">
                  {pounds}
                  <span className="pp_vat">
                    {incVat ? 'INC VAT' : 'EX VAT'}
                  </span>
                </span>

                <sup className="pp__pnc">.{pence}</sup>
              </div>

              {turnOffWasPrice !== 'true' && (
                <div className="pp__bmsg">
                  Was £
                  {incVat
                    ? wasPriceIncVatManual || (product && product.priceWas)
                    : wasPriceExVatManual || (product && product.priceWasExVat)}
                </div>
              )}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default DotdBanner;
