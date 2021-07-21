import axios from 'axios';
import { BrComponent, BrPage } from '@bloomreach/react-sdk';

import { AppProps, AppContext } from 'next/app';

import { initialize, TYPE_CONTAINER_ITEM_UNDEFINED } from '@bloomreach/spa-sdk';

import Header from 'components/layout/header';
import Footer from 'components/layout/footer';

// styles
import '../styles/business.min.css';
import '../styles/sfx.min.css';
import '../styles/fuds.css';

// components
import DotdAssortment from 'components/compound/dotdAssortment';
import HTMLContent from 'components/custom';
import HalfGrid from 'components/compound/halfGrid';
import FullGrid from 'components/compound/fullGrid';
import Spacer from 'components/layout/spacer';
import VatProvider from '../state/vat';

const mapping = {
  HTMLComponent: HTMLContent,
  DotdAssortment,
  HalfGrid,
  FullGrid,
  [TYPE_CONTAINER_ITEM_UNDEFINED]: () => <div />,
  Spacer,
};

interface MyAppProps {
  pageProps: {
    configuration: { [name: string]: string } | false;
    page: Record<string, any> | false;
  };
}

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { configuration, page } = pageProps;

  if (!configuration) {
    return (
      <div id="container-main" className="wrp">
        <div className="inner">
          <Component {...pageProps} />
        </div>
      </div>
    );
  }

  const BrMapping = {
    mapping,
    page,
    configuration: {
      ...configuration,
      httpClient: axios,
    },
  };

  return (
    <VatProvider>
      <BrPage {...BrMapping}>
        <BrComponent path="menu">
          <Header />
        </BrComponent>
        <div id="container-main" className="wrp">
          <div className="inner">
            <BrComponent path="main" />
            <br />
            <Component {...pageProps} />
          </div>
        </div>
        <BrComponent path="footer">
          <Footer />
        </BrComponent>
      </BrPage>
    </VatProvider>
  );
};

MyApp.getInitialProps = async ({ ctx }: AppContext): Promise<MyAppProps> => {
  // const configuration = {
  //   path: '',
  //   endpoint: 'http://127.0.0.1:3000/api/dewalt',
  //   endpointQueryParameter: 'endpoint',
  // };

  const configuration = {
    path: `${ctx.asPath}`,
    endpoint:
      'https://screwfix.bloomreach.io/delivery/site/v1/channels/brxsaas/pages',
    endpointQueryParameter: 'endpoint',
  };

  try {
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
  } catch (error) {
    return {
      pageProps: {
        configuration: false,
        page: false,
      },
    };
  }
};

export default MyApp;
