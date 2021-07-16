// hooks
import useProductApi from '../../useProductApi';
import { useVat } from '../../../state/vat';

// components
import WasPrice from './wasPrice';

export interface CardProps {
  productDescription: string;
  sku: string;
  destinationUrl: string;
  turnOffSavingWasPrice: boolean;
  image: string;
  pricePoint: 'only' | 'fromOnly';
}

const Card = ({
  productDescription,
  sku,
  destinationUrl,
  turnOffSavingWasPrice,
  image,
  pricePoint,
}: CardProps): JSX.Element => {
  const { product, isLoading, isError } = useProductApi(sku);
  const { incVat } = useVat();

  if (isError) return <div />;

  return (
    <div className="ct__pt">
      <div
        className="certona-tile__container ct__pt__e"
        title={productDescription || product?.name}
      >
        <a
          href={destinationUrl}
          title={`View all  ${productDescription || product?.name}`}
        >
          <div className="certona-tile">
            <div className="ct__product-thumb">
              <img
                style={{ maxWidth: '100%' }}
                src={image || product?.image}
                alt={productDescription || product?.name}
              />
            </div>

            <div className="ct__product-info">
              <p className="ct__product-desc">
                <span className="ct__product-desc__txt">
                  {productDescription || product?.name}
                </span>
              </p>

              <div className="ct__price-row">
                <div className="ct__price-from">
                  {/* pricePoint */}from Only:
                </div>
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

export default Card;
