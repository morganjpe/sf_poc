// Deal of the Day ends midnight, Deal of the Day ends 11pm, Deal of the Week, Deal of the Weekend

const dealType = (dealImage) => {
  if (dealImage === 'Deal of the Week') {
    return 'week';
  }
  return 'day';
};

const DotdBanner = ({ dealImage }) => {
  const type = dealType(dealImage);

  return (
    <div className="banner__wrapper" title={dealImage}>
      <div className="dotd-cont">
        <div className="dotd-inner">
          <a href="/" className={`banner banner--var6 dot--${type}`}>
            <div
              className="banner__wrapper"
              title="Deal of the Day ends midnight - Hozelock 2-in-1 Compact Reel with Hose 25m"
            >
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
                      Hozelock 2-in-1 Compact Reel with Hose 25m
                    </p>
                  </div>
                </div>
              </div>
              <div className="banner__img-align ">
                <img
                  src="//web.archive.org/web/20180306083723/https://www.screwfix.com/images/general/assets/gfx/dod/dodwk06/dod_sfx_tue_lg.png"
                  className="banner__img swap"
                  //   data-src-large="//web.archive.org/web/20180306083723/https://www.screwfix.com/images/general/assets/gfx/dod/dodwk06/dod_sfx_tue_lg.png"
                  //   data-src-medium="//web.archive.org/web/20180306083723/https://www.screwfix.com/images/general/assets/gfx/dod/dodwk06/dod_sfx_tue_md.png"
                  //   data-src-small="//web.archive.org/web/20180306083723/https://www.screwfix.com/images/general/assets/gfx/dod/dodwk06/dod_sfx_tue_sm.png"
                  alt="Hozelock 2-in-1 Compact Reel with Hose 25m"
                />
              </div>

              <span className="banner__save-flag">
                <span className="banner__save-flag-text">Save</span>
                <span className="banner__save-flag-price">
                  34<sup>%</sup>
                </span>
              </span>

              <div className="price-point pp--pound">
                <div className="pp__tmsg">ONLY</div>
                <div className="pp__price">
                  <sup className="pp__pnd">£</sup>
                  <span className="pp_numbs">
                    32<span className="pp_vat">INC VAT</span>
                  </span>
                  <sup className="pp__pnc">.99</sup>
                </div>

                <div className="pp__bmsg">Was £49.99</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DotdBanner;
