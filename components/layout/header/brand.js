import { useState } from "react";

const Header = ({ isResponsiveNav, setIsResponsiveNav }) => {
  const [search, setSearch] = useState("");
  isResponsiveNav;
  return (
    <header
      className="sh-wrapper js--site-header"
      role="banner"
      style={
        isResponsiveNav
          ? {
              boxShadow: "none",
              zIndex: 50,
            }
          : {}
      }
    >
      <div className="sh-0" style={{ display: "none" }}>
        <div className="sh-resize">
          <h2>
            Welcome please select your location{" "}
            <a href="#" className="btn-close-location">
              close X
            </a>
          </h2>
          <ul className="n">
            <li>
              <span className="flag rg--ie"></span>
              <span className="flag--content">
                <a href="#">Visit Screwfix.ie</a> -{" "}
                <span id="flag1-prod-num">19,000.00</span>Available online,
                delivery in 2-3 working days
              </span>
            </li>
            <li>
              <span className="flag rg--eu"></span>
              <span className="flag--content">
                <a href="#">Visit Screwfix.eu</a> -{" "}
                <span id="flag1-prod-num">19,000.00</span>Available online,
                delivery in 2-3 working days
              </span>
            </li>
            <li>
              <span className="flag rg--de"></span>
              <span className="flag--content">
                <a href="#">Visit Screwfix.de</a> -{" "}
                <span id="flag1-prod-num">19,000.00</span>Available online,
                delivery in 2-3 working days
              </span>
            </li>
            <li>
              <span className="flag rg--uk"></span>
              <span className="flag--content">
                <a href="#">Visit Screwfix.com</a> -{" "}
                <span id="flag1-prod-num">19,000.00</span>Available online,
                delivery in 2-3 working days
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="sh-top">
        <div className="sh-resize">
          <a href="tel:03330112112" className="sh-top--callus">
            Call 24/7 on:&nbsp;03330 112 112
          </a>
          <a href="tel:03330112112" className="sh-top--callus-mob">
            Call 24/7:&nbsp;03330 112 112
          </a>

          <a
            id="quickshop_page_link"
            href="https://www.screwfix.com/jsp/quickshop/quickShopPage.jsp"
            className="sh-top--shop icon-catalogue"
          >
            Shop by <span className="md-hide">Product </span>Code
          </a>

          <a
            href="https://www.screwfix.com/help/helphome"
            className="sh-top--help"
          >
            Need Help<span className="icon-help-circled"></span>
          </a>

          <div className="sh-top--vat">
            <a id="Inc_VAT_toggle" href="" className="inc">
              INC VAT
            </a>

            <a href="" className="toggle"></a>

            <a id="Ex_VAT_toggle" href="" className="ex">
              EX VAT
            </a>
          </div>
        </div>
      </div>

      <div className="sh-header">
        <div className="sh-resize">
          <div className="sh-logo">
            <div className="logo">
              <a
                id="branding-logo"
                href="https://www.screwfix.com/"
                title="Return to the screwfix.com homepage"
              >
                <img
                  src="//cdn-fsly.yottaa.net/581cc04c2bb0ac43a7000001/www.screwfix.com/v~4b.31f/assets/gfx/branding/screwfix-logo.svg?yocs=n_"
                  data-alt-src="branding/screwfix-logo-small.png"
                  className="logo__screwfix svg-swapper"
                  alt="Screwfix logo"
                />
              </a>
            </div>
          </div>

          <div
            onClick={() => setIsResponsiveNav(!isResponsiveNav)}
            className={isResponsiveNav ? "btn-browse open" : "btn-browse"}
          >
            <div className="icon-menu"></div>
            <div className="btn-text">
              Browse <span className="sm-hide">store</span>
            </div>
            <div className="arrow-icon icon-down-dir"></div>
          </div>

          <div className="sh-right">
            <div className="sh-user">
              <ul className="sh-user__ul">
                <li
                  className="search"
                  style={{
                    //   "border-left-width: 1px;"
                    borderLeftWidth: "1px",
                  }}
                >
                  <a href="#">
                    <i className="icon icon-search"></i>
                    <span>Search</span>
                  </a>
                </li>

                <li className="acc">
                  <a
                    id="header_link_sign_in"
                    href="https://www.screwfix.com/loginpage"
                  >
                    <i className="icon icon-user"></i>
                    <span>Your Account</span>
                    <span className="user-name">Sign in / Register</span>
                  </a>
                  <script>var userSignin = false;</script>

                  <div className="sh-acc__bg"></div>
                  <div className="sh-acc__options">
                    <ul className="sh-acc__opt">
                      <li>
                        <a
                          className="sh-acc__link"
                          href="https://www.screwfix.com/jsp/account/orderHistoryPage.jsp"
                        >
                          Order History
                        </a>
                      </li>
                      <li>
                        <a
                          className="sh-acc__link"
                          href="https://www.screwfix.com/jsp/account/allPurchasesPage.jsp"
                        >
                          Previous Purchases
                        </a>
                      </li>
                      <li>
                        <a
                          className="sh-acc__link"
                          href="https://www.screwfix.com/jsp/account/savedListPage.jsp"
                          id="header_saved_list_page_link"
                        >
                          Saved List
                        </a>
                      </li>

                      <li>
                        <a
                          className="sh-acc__link"
                          href="https://www.screwfix.com/jsp/account/amendPersonalDetailsPage.jsp"
                        >
                          Personal Details
                        </a>
                      </li>

                      <li>
                        <a
                          className="sh-acc__link"
                          href="https://www.screwfix.com/jsp/account/changePasswordPage.jsp"
                        >
                          Set a New Password
                        </a>
                      </li>
                      <li>
                        <a
                          className="sh-acc__link"
                          href="https://www.screwfix.com/jsp/account/manageAddressBookPage.jsp"
                        >
                          Address Book
                        </a>
                      </li>
                      <li>
                        <a
                          className="sh-acc__link"
                          href="https://www.screwfix.com/jsp/account/managePaymentDetailsPage.jsp"
                        >
                          Payment Cards
                        </a>
                      </li>
                      <li>
                        <a
                          id="header_link_sign_out"
                          href="https://www.screwfix.com/?_DARGS=/presentation-web-sitebuilder/jsp/common/siteHeader.jsp_A&amp;_DAV=&amp;_dynSessConf=3883173513646559381"
                          className="btn btn--primary fill"
                        >
                          Log out
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="store">
                  <a
                    id="header_branch_locator_link"
                    href="https://www.screwfix.com/jsp/tradeCounter/tradeCounterPage.jsp"
                  >
                    <i className="icon icon-location">
                      <i className="dot"></i>
                    </i>

                    <span className="store-text replaced">Store locator</span>
                    <span className="store-location">Select a store</span>
                  </a>
                </li>

                <li className="checkout">
                  <a href="https://www.screwfix.com/jsp/trolley/trolleyPage.jsp">
                    <i className="icon icon-basket"></i>
                    <span>Checkout</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="sh-search" role="search">
              <input
                id="mainSearch-input"
                className="search-input"
                name="search"
                type="text"
                placeholder="What are you looking for?"
                autoComplete="off"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                tabIndex="1"
              />
              <i className="icon icon-search"></i>
              <input
                title="Search"
                className="search-btn  icon icon-search"
                type="submit"
                id="search_submit_button"
                // value=""
              />

              <div
                id="mainSearch-suggestions"
                className="sh-search__sugg"
                style={{ display: "none" }}
              >
                <ul className="sh-search__sl"></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
