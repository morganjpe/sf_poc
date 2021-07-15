import axios from 'axios';
import { BrComponent, BrPage } from '@bloomreach/react-sdk';

import { AppProps, AppContext } from 'next/app';

import { initialize, TYPE_CONTAINER_ITEM_UNDEFINED } from '@bloomreach/spa-sdk';

import DotdAssortment from 'components/compound/dotdAssortment';
import HTMLContent from 'components/custom';
import HalfGrid from 'components/compound/halfGrid';
import FullGrid from 'components/compound/fullGrid';
// fallback

import Header from 'components/layout/header';
import Fuds from 'components/layout/fuds';
import Footer from 'components/layout/footer';

// styles
import '../styles/business.min.css';
import '../styles/sfx.min.css';
import '../styles/fuds.css';

// state
import VatProvider from '../state/vat';

interface MyAppProps {
  pageProps: {
    configuration: { [name: string]: string };
    page: Record<string, any>;
  };
}

const Fallback = () => <div>component requires mapping</div>;

const mapping = {
  HTMLComponent: HTMLContent,
  DotdAssortment,
  HalfGrid,
  FullGrid,
  [TYPE_CONTAINER_ITEM_UNDEFINED]: Fallback,
};

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { configuration, page } = pageProps;

  return (
    <BrPage
      mapping={mapping}
      configuration={{ ...configuration, httpClient: axios }}
      page={page}
    >
      <VatProvider>
        <BrComponent path="menu">
          <Header />
        </BrComponent>
        <Fuds />
        <Component />
        <BrComponent path="footer">
          <Footer />
        </BrComponent>
      </VatProvider>
    </BrPage>
  );
};

MyApp.getInitialProps = async ({ ctx }: AppContext): Promise<MyAppProps> => {
  // const configuration = {
  //   path: '',
  //   endpoint: 'http://127.0.0.1:3000/api/dewalt',
  //   endpointQueryParameter: 'endpoint',
  // };

  const configuration = {
    path: ctx.pathname,
    endpoint:
      'https://screwfix.bloomreach.io/delivery/site/v1/channels/brxsaas/pages',
    endpointQueryParameter: 'endpoint',
  };

  const page = await initialize({
    ...configuration,
    request: ctx.req,
    httpClient: axios,
  });

  return {
    pageProps: {
      configuration,
      page: page.toJSON(),
    },
  };
};

export default MyApp;
