const Fuds = () => (
  <div className="fuds-container">
    <div className="headerblock4">
      <div className="fudwrap">
        <div className="row">
          <div className="sm-24 fudmain">
            <div className="lg-9 md-8 sm-24 cols fudblock1">
              <a href="//www.screwfix.com/help/delivery/">
                FREE DELIVERY OVER £50 <span className="textgrey"> </span>
              </a>
            </div>

            <div className="lg-8 md-8 sm-24 cols fudblock2">
              <a href="//www.screwfix.com/help/clickandcollect/">
                CLICK &amp; COLLECT{' '}
              </a>
            </div>

            <div className="lg-7 md-6 sm-24 cols fudblock4">
              <a href="https://www.screwfixgiftcards.com/">
                Screwfix Gift Cards{' '}
                <span className="textgrey">a perfect gift</span>
              </a>
            </div>

            <div className="lg-7 md-8 sm-24 cols fudblock3">
              <a href="//www.screwfix.com/help/disruption">
                {' '}
                COVID-19 – SERVICE UPDATES
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section className="fuds-smart-container bg-sfx-red">
      <div className="fud-app" id="mobile-app-fud" style={{ display: 'none' }}>
        <a
          href="https://play.google.com/store/apps/details?id=com.screwfix.shoppingapp"
          className="fud-app-link"
        >
          <div className="fud-app-flex">
            <img
              className="fud-app-logo"
              src="https://cdn-fsly.yottaa.net/581cc04c2bb0ac43a7000001/www.screwfix.com/v~4b.31f/images/general/Screwfix_App_Icon.svg?yocs=n_"
              alt=""
            />
            <h4 className="fud-app-title">
              Our NEW and IMPROVED App is here!{' '}
              <span className="display-inline-block">
                <strong>DOWNLOAD NOW!</strong>
              </span>
            </h4>
          </div>
        </a>
      </div>

      <div id="desktop-tablet-fud" className="bg-sfx-red">
        <a
          href="/help/disruption/"
          className="text-decoration-none"
          title="Delivery Information"
        >
          <h4 className="text-18 text-small-up-20 line-height-1 screwfix-regular text-white text-centre margin-0 padding-15 margin-lg-auto">
            Order online or in store today!{' '}
            <strong>
              <span className="display-inline-block">
                Latest delivery information <span className="arrow-right" />
                <span className="arrow-right" />
                <span className="arrow-right" />
              </span>
            </strong>
          </h4>
        </a>
      </div>
    </section>
  </div>
);

export default Fuds;
