// hooks
import useProductApi from '../../useProductApi';
import { useVat } from '../../../state/vat';

// components
import WasPrice from './wasPrice';

interface RangeBannerProps {
  productDescription: string;
  sku: string;
  destinationUrl: string;
  turnOffSavingWasPrice: 'true' | 'false';
  image: string;
  pricePoint: 'only' | 'fromOnly';
}

const RangeBanner = ({
  productDescription,
  sku,
  destinationUrl,
  turnOffSavingWasPrice,
  image,
  pricePoint,
}: RangeBannerProps): JSX.Element => {
  const { product, isLoading, isError } = useProductApi(sku);
  const { incVat } = useVat();

  if (isError) return <div />;

  return (
    <div className="ct__pt">
      <div
        className="certona-tile__container ct__pt__e"
        title={productDescription}
      >
        <a href={destinationUrl} title={`View all  ${productDescription}`}>
          <div className="certona-tile">
            <div className="ct__product-thumb">
              <img
                style={{ maxWidth: '100%' }}
                src={image}
                alt={productDescription}
              />
            </div>

            <div className="ct__product-info">
              <p className="ct__product-desc">
                <span className="ct__product-desc__txt">
                  {productDescription}
                </span>
              </p>

              <div className="ct__price-row">
                <div className="ct__price-from">{pricePoint}:</div>
                {!isLoading && (
                  <div className="ct__price-now">
                    <span className="ct__price">
                      &pound;{incVat ? product?.price : product?.exVatPrice}
                    </span>
                    <span className="ct__price-vat">
                      {incVat ? (
                        <>
                          inc.
                          <br />
                          vat
                        </>
                      ) : (
                        <>
                          ex.
                          <br />
                          vat
                        </>
                      )}
                    </span>
                  </div>
                )}
                <WasPrice
                  product={product}
                  incVat={incVat}
                  turnOffSavingWasPrice={turnOffSavingWasPrice}
                />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RangeBanner;
