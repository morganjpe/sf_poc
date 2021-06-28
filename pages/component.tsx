import RangeBanner from '../components/banners/rangeBanner';

const Component = () => (
  <div id="container-main" className="wrp">
    <div className="inner">
      <div className="lg-4 md-8 sm-24 cols">
        <RangeBanner
          productDescription="product description"
          sku="qdqwdqwd"
          destinationUrl="/"
          turnOffSavingWasPrice="true"
          image=""
          pricePoint="only"
        />
      </div>
    </div>
  </div>
);

export default Component;
