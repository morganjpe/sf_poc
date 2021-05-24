import axios from 'axios';
import { useEffect, useState } from 'react';

import Preview from '../cms/preview';

const CertonaTile = ({ component, page }) => {
  const { sku, description } = component.model.meta.paramsInfo;

  const [productData, setProductData] = useState({
    data: {},
    error: null,
    status: 'idle',
  });

  const setError = () =>
    setProductData({
      ...productData,
      error: 'sku could not be found',
      status: 'idle',
    });

  useEffect(() => {
    (async () => {
      setProductData({
        ...productData,
        status: 'pending',
      });

      try {
        const { data } = await axios.get(
          `https://www.screwfix.com/product/api/${sku}`
        );

        if (data) {
          setProductData({
            status: 'idle',
            error: null,
            data,
          });
        } else {
          setError();
        }
      } catch (error) {
        setError();
      }
    })();
  }, []);

  if (Object.keys(productData.data).length === 0) {
    return <div />;
  }

  return (
    <Preview preview={page.isPreview()}>
      <div style={{ float: 'none' }} className="lg-4 md-8 sm-24 cols">
        <div style={{ float: 'none' }} className="ct__pt">
          <div
            className="certona-tile__container ct__pt__e"
            title={description}
            style={{ float: 'none' }}
          >
            <a href="/" title={description}>
              <div className="certona-tile">
                <div className="ct__product-thumb">
                  <img
                    src={productData.data.productMediaObjects[0].contentUrl}
                    alt={description}
                    className="fill"
                  />
                </div>

                <div className="ct__product-info">
                  <p className="ct__product-desc">
                    <span className="ct__product-desc__txt">{description}</span>
                  </p>

                  <div className="ct__price-row">
                    <div className="ct__price-from">Only:</div>

                    <div className="ct__price-now">
                      <span className="ct__price">
                        {productData.data.currentPrice.incVat.price}
                      </span>
                      <span className="ct__price-vat">
                        Inc
                        <br />
                        vat
                      </span>
                    </div>

                    <div className="ct__price-before">
                      {productData.data.currentPrice.incVat.wasPrice !==
                        undefined && (
                        <span className="ct__price-was">
                          Was £{productData.data.currentPrice.incVat.wasPrice}
                        </span>
                      )}

                      {productData.data.currentPrice.incVat.saveAmount !==
                        undefined && (
                        <span className="ct__price-save">
                          {' '}
                          Save £
                          {productData.data.currentPrice.incVat.saveAmount.toFixed(
                            2
                          )}{' '}
                          ($
                          {productData.data.currentPrice.incVat.savePercentage}
                          0%)
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Preview>
  );
};

export default CertonaTile;
