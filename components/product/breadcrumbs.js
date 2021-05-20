import Link from 'next/link';

const Breadcrumbs = () => (
  <div className="wrp fw breadcrumb">
    <div className="inner">
      <div className="row">
        <div className="lg-24 md-24 sm-24 cols">
          <div id="sharedSites" className="share-container">
            <ul className="share__toggle n">
              <li className="toggle-state is-closed">
                <a className="toggler" href="/" data-toggle="share-toggle">
                  <span>Share this </span>
                  <span className="accessibility">
                    page in your favourite social networks.
                  </span>
                  <i className="icon icon-share" />
                </a>
              </li>
            </ul>

            <ul className="addthis_toolbox hide n" id="share-toggle">
              <li>
                {' '}
                <a
                  className="addthis_button_facebook"
                  title="Facebook"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.screwfix.com%2Fp%2Fdewalt-dcd776d2t-gb-18v-2-0ah-li-ion-xr-cordless-combi-drill%2F899cf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon icon-facebook" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                {' '}
                <a
                  className="addthis_button_twitter"
                  title="Twitter"
                  href="https://twitter.com/home?status=https%3A%2F%2Fwww.screwfix.com%2Fp%2Fdewalt-dcd776d2t-gb-18v-2-0ah-li-ion-xr-cordless-combi-drill%2F899cf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon icon-twitter" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                {' '}
                <a
                  className="addthis_button_pinterest"
                  title="Pinterest"
                  href="https://pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.screwfix.com%2Fp%2Fdewalt-dcd776d2t-gb-18v-2-0ah-li-ion-xr-cordless-combi-drill%2F899cf&amp;media=https%3A%2F%2Fmedia.screwfix.com%2Fis%2Fimage%2Fae235%2F%3F%24p%24%26wid%3D281%26hei%3D281%26op_sharpen%3D1%26layer%3D0%26size%3D281%2C281%26layer%3D1%26size%3D281%2C281%26src%3Dae235%2F899CF_P&amp;description=DeWalt%20DCD776D2T-%20GB%2018V%202.0Ah%20Li-Ion%20XR%20%20Cordless%20Combi%20Drill"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon icon-pinterest" />
                  <span>Pinterest</span>
                </a>
              </li>
              <li>
                {' '}
                <a
                  className="addthis_button_email"
                  title="Email"
                  href="mailto:?subject=Thought%20you%20might%20be%20interested%20in%20this&amp;body=I%20saw%20this%20%22DeWalt%20DCD776D2T-%20GB%2018V%202.0Ah%20Li-Ion%20XR%20%20Cordless%20Combi%20Drill%22%20and%20thought%20%20of%20you!%20https%3A%2F%2Fwww.screwfix.com%2Fp%2Fdewalt-dcd776d2t-gb-18v-2-0ah-li-ion-xr-cordless-combi-drill%2F899cf"
                >
                  <i className="icon icon-mail" />
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
          <ul
            className="n il bc__list"
            itemScope=""
            itemType="https://schema.org/BreadcrumbList"
          >
            <li
              className="bc__hm"
              itemScope=""
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <Link
                name="breadcrumb_item_"
                id="breadcrumb_item_home_"
                itemProp="item"
                href="/"
                className="bc__link bc__link--home"
              >
                <span>
                  <span className="icon-home-1" /> &nbsp;
                  <span className="bc__link--home__label" itemProp="name">
                    Home
                  </span>
                  <meta itemProp="position" content="1" />
                </span>
              </Link>
            </li>
            <li className="bc__md">
              <a href="/" className="bc__link" id="bcActivator">
                …
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Breadcrumbs;
