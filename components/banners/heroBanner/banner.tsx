/* eslint no-nested-ternary: "off" */
import { useEffect, useState } from 'react';
import axios from 'axios';

// types
import { HeroBannerTypeProps } from './types';
import { ProductAttributes } from '../../useProductApi';

// components
import ResponsiveImage from '../../responsiveImage';
import BannerTitle from './bannerTitle';

interface ProductState {
  data: {
    main: ProductAttributes | false;
    roundel: ProductAttributes | false;
  };
  loading: boolean;
  error: string | false;
}

const apiPath =
  'https://int2.dev.screwfix.com/v2/api/products/SFUK/byIds?Persona=screwfix&Id=';

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
  skuInfo,
  skuInfoDropdown,
  skuRoundel,
  hideWasPrice,
  hideBorder,
  // override props
  freeTypePoundInc,
  freeTypePoundEx,
  freeTypePercent,
  template,
  pricePoint,
  halfWidth,
}: HeroBannerTypeProps): JSX.Element => {
  const [product, setProduct] = useState<ProductState>({
    data: {
      main: false,
      roundel: false,
    },
    loading: false,
    error: false,
  });

  const { main: mainData, roundel: roundelData } = product.data;

  const handleProductLoad = () =>
    setProduct({
      ...product,
      loading: true,
    });

  const handleProductError = (error: string) =>
    setProduct({
      ...product,
      loading: false,
      error,
    });

  useEffect(() => {
    (async () => {
      if (skuInfo) {
        try {
          handleProductLoad();
          const { data: response } = await axios.get(
            `${apiPath}${skuInfo},${skuRoundel}`
          );
          const { data } = response;
          // there are products
          if (data.length) {
            const main = data.filter(
              ({ id }: { id: string }) => id === skuInfo
            )[0].attributes;

            const roundel = data.filter(
              ({ id }: { id: string }) => id === skuRoundel
            )[0].attributes;

            setProduct({
              loading: false,
              error: false,
              data: {
                main,
                roundel,
              },
            });
          } else {
            handleProductError('There has been an error');
          }
        } catch (error) {
          handleProductError('There has been an error');
        }
      }
    })();
  }, []);

  const freeTypeContent = freeType
    .replace(/<p>/g, '<span>')
    .replace(/<\/p>/g, '</span>');

  return (
    <div className="tmshp_carousel">
      <a
        href={destinationUrl}
        className={`banner ${
          halfWidth ? 'banner--half' : ''
        } banner--var${getBannerVariant(bannerType)} ${
          !hideBorder ? 'banner--border' : ''
        }`}
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

                <BannerTitle
                  type={skuInfoDropdown}
                  skuPrice={
                    mainData
                      ? incVat
                        ? mainData.price
                        : mainData.exVatPrice
                      : undefined
                  }
                  skuWasPrice={
                    mainData
                      ? incVat
                        ? mainData.priceWas
                        : mainData.priceWasExVat
                      : undefined
                  }
                  freeTypePound={incVat ? freeTypePoundInc : freeTypePoundEx}
                  freeTypePercent={freeTypePercent}
                />
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

          {roundelData && (
            <div className="price-point pp--pound">
              <div className="pp__tmsg">
                {pricePoint === 'fromOnly' ? 'FROM ONLY' : 'ONLY'}
              </div>
              <div className="pp__price">
                <sup className="pp__pnd">£</sup>
                <span className="pp_numbs">
                  {incVat
                    ? roundelData.price.toString().split('.')[0]
                    : roundelData.exVatPrice.toString().split('.')[0]}
                  <span className="pp_vat">
                    {incVat ? 'INC VAT' : 'EX VAT'}
                  </span>
                </span>
                <sup className="pp__pnc">
                  .
                  {incVat
                    ? roundelData.price.toString().split('.')[1]
                    : roundelData.exVatPrice.toString().split('.')[1]}
                </sup>
              </div>
              {!hideWasPrice && (
                <div className="pp__bmsg">
                  Was £
                  {incVat ? roundelData.priceWas : roundelData.priceWasExVat}
                </div>
              )}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default fullWidth;
