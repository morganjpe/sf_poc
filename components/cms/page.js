// import Head from "next/head";
import axios from 'axios';
import { BrComponent, BrPageContext, BrPage } from '@bloomreach/react-sdk';
import { initialize } from '@bloomreach/spa-sdk';

import Banner from '../banners';
import Certona from '../cards/Certona';

import Header from '../layout/header';
import Fuds from '../layout/fuds';
import Footer from '../layout/footer';

const mapping = {
  BannerFullWidthh: Banner,
  'Certona Card': Certona,
};

export const Page = ({ configuration, page, children }) => (
  <BrPage configuration={{ ...configuration }} page={page} mapping={mapping}>
    <BrComponent path="menu">
      <Header />
    </BrComponent>
    <Fuds />

    <BrPageContext.Consumer>
      {(data) => console.log(data)}
    </BrPageContext.Consumer>
    <div id="container-main" className="wrp">
      <div className="inner">
        <BrComponent path="main" />
        {children}
      </div>
    </div>
    <BrComponent path="footer">
      <Footer />
    </BrComponent>
  </BrPage>
);

export const bloomreachProps = async (context) => {
  const configuration = {
    endpoint:
      'https://screwfix.bloomreach.io/delivery/site/v1/channels/brxsaas/pages',
    endpointQueryParameter: 'endpoint',
    request: { path: context.asPath || '' },
  };

  const page = await initialize({
    ...configuration,
    httpClient: axios,
    request: {
      ...configuration.request,
    },
    connection: context.req?.connection,
    headers: context.req?.headers['x-forwarded-for']
      ? { 'x-forwarded-for': context.req?.headers['x-forwarded-for'] }
      : undefined,
  });

  return {
    configuration,
    page,
  };
};
