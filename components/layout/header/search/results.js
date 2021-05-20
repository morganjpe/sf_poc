/* eslint-disable camelcase */
const Results = ({ searchResults }) => (
  <>
    {searchResults.map(({ short_description, _imageurl, secondId }) => (
      <div
        className="certona-tile__container"
        title={short_description}
        key={secondId}
      >
        <a href="/">
          <div className="certona-tile">
            <div className="ct__product-thumb">
              <img className="fill" src={_imageurl} alt={short_description} />
            </div>

            <div className="ct__product-info">
              <p className="ct__product-desc">
                <span className="ct__product-desc__txt">
                  {short_description}
                </span>
                <span className="ct__product-sku">({secondId})</span>
              </p>
              <div className="sf__rating-stars--sm">
                <dl className="rating-stars">
                  <dt className="rating-stars__title accessibility">
                    Product rating
                  </dt>
                  <dd className="rating-stars__content">
                    <span
                      title="Product rating 4.8 stars out of 5"
                      className="rating-stars__rated rating-stars__rated--2-5"
                    >
                      <span>4.8</span>out of 5 stars
                    </span>
                  </dd>
                </dl>
                <span className="pr__view">(175)</span>
              </div>
              <div className="ct__price-row">
                <div className="ct__price-now">
                  <span className="ct__price">£7.49</span>
                  <span className="ct__price-vat">
                    inc.
                    <br />
                    vat
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    ))}
  </>
);

export default Results;
