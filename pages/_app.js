import axios from 'axios';
import { BrComponent, BrPage } from '@bloomreach/react-sdk';

import '../styles/business.min.css';
import '../styles/sfx.min.css';
import '../styles/fuds.css';

import Header from '../components/layout/header';
import Fuds from '../components/layout/fuds';
import Footer from '../components/layout/footer';

function MyApp({ Component, pageProps }) {
  const configuration = {
    endpoint:
      'https://screwfix.bloomreach.io/delivery/site/v1/channels/brxsaas/pages',
    endpointQueryParameter: 'endpoint',
    httpClient: axios,
    // path: router.asPath, // ${window.location.pathname}${window.location.search}
  };

  return (
    <BrPage configuration={configuration}>
      <BrComponent path="menu">
        <Header />
      </BrComponent>
      <Fuds />
      <main id="container-main" className="wrp">
        <Component {...pageProps} />;
      </main>
      <Footer />
    </BrPage>
  );
}

export default MyApp;
