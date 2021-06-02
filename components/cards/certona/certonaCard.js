import useProductApi from './useProductApi';

const savingProps = (price, sale) => ({
  percentage: ((price - sale) / price) * 100,
  total: price - sale,
});

const CertonaTile = ({ description, sku, keyProp }) => {
  const { product, isLoading, isError } = useProductApi(sku);

  if (isLoading || isError || !product) {
    return <div />;
  }

  const { percentage, total } = savingProps(product.price, product.sale_price);

  return (
    <div
      key={keyProp}
      style={{ float: 'none' }}
      className="lg-4 md-8 sm-24 cols"
    >
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
                  src={product.thumb_image}
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
                    <span className="ct__price">{product.sale_price}</span>
                    <span className="ct__price-vat">
                      Inc
                      <br />
                      vat
                    </span>
                  </div>

                  <div className="ct__price-before">
                    {product.price !== undefined && (
                      <span className="ct__price-was">
                        Was £{product.price}
                      </span>
                    )}

                    <span className="ct__price-save">
                      Save £{total.toFixed(2)}({Math.floor(percentage)}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertonaTile;
