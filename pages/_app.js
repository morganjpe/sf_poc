import axios from "axios";
import { BrComponent, BrPageContext, BrPage } from "@bloomreach/react-sdk";

import "../styles/business.min.css";
import "../styles/sfx.min.css";
import "../styles/fuds.css";

import Header from "../components/layout/header";
import Fuds from "../components/layout/fuds";
import Footer from "../components/layout/footer";

const configuration = {
  endpoint:
    "https://screwfix.bloomreach.io/delivery/site/v1/channels/brxsaas/pages",
  endpointQueryParameter: "endpoint",
  httpClient: axios,
  path: `/`, // ${window.location.pathname}${window.location.search}
};

// const mapping = {
//   BannerCollection,
//   Content,
//   CtaBanner,
//   Images,
//   Map,
//   MultiBannerCarousel,
//   Navigation,
//   PageCatalog,
//   PathwaysRecommendations,
//   Product,
//   ProductGrid,
//   ProductHighlight,
//   ProductSearch,
//   SingleBannerCarousel,
//   SearchBar,
//   TitleAndText,
//   Video,
// };

function MyApp({ Component, pageProps }) {
  return (
    <BrPage configuration={configuration}>
      <BrComponent path="menu">
        <Header />
      </BrComponent>
      <Fuds />
      <main id="container-main" className="wrp">
        {/* <BrPageContext.Consumer>
            {(page) => (
              <BrComponent path="CtaBanner">
                <div>
                  CTA Banner
                  <BrComponent />
                </div>
              </BrComponent>
            )}
          </BrPageContext.Consumer> */}
        <Component {...pageProps} />;
      </main>
      <Footer />
    </BrPage>
  );
}

export default MyApp;
