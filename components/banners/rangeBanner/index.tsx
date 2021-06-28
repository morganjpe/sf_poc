import Skeleton from 'react-loading-skeleton';
import useProductApi from '../../useProductApi';

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
              {isLoading ? (
                <Skeleton height={155} />
              ) : (
                <img
                  src={product?.image}
                  alt={productDescription}
                  className="fill"
                />
              )}
            </div>

            <div className="ct__product-info">
              <p className="ct__product-desc">
                <span className="ct__product-desc__txt">
                  {productDescription}
                </span>
              </p>

              <div className="ct__price-row">
                <div className="ct__price-from">{pricePoint}:</div>
                <div className="ct__price-now">
                  <span className="ct__price"> £20.83 </span>
                  <span className="ct__price-vat">
                    ex.
                    <br />
                    vat
                  </span>
                </div>
                {turnOffSavingWasPrice === 'false' && (
                  <div className="ct__price-before">
                    <span className="ct__price-was"> Was £29.99 </span>
                    <span className="ct__price-save"> Save £10.00 (33%) </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RangeBanner;
