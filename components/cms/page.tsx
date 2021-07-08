import axios from 'axios';

import { GetServerSideProps } from 'next';

import { BrComponent, BrPage } from '@bloomreach/react-sdk';
import { relevance } from '@bloomreach/spa-sdk/lib/express';

import {
  initialize,
  Page,
  TYPE_CONTAINER_ITEM_UNDEFINED,
} from '@bloomreach/spa-sdk';

import HTMLContent from '../custom';
import DotdAssortment from '../compound/dotdAssortment';
import HalfGrid from '../compound/halfGrid';
import FullGrid from '../compound/fullGrid';
// fallback
import Fallback from './fallback';

import Header from '../layout/header';
import Fuds from '../layout/fuds';
import Footer from '../layout/footer';

export interface Configuration {
  endpoint: string | undefined;
  endpointQueryParameter: string;
  request: { path: string };
}

interface CmsPageProps {
  configuration: Configuration;
  page: Page;
  children?: React.ReactNode;
}

const mapping = {
  HTMLComponent: HTMLContent,
  DotdAssortment,
  HalfGrid,
  FullGrid,
  [TYPE_CONTAINER_ITEM_UNDEFINED]: Fallback,
};

const CmsPage = ({
  configuration,
  page,
  children,
}: CmsPageProps): JSX.Element => (
  <BrPage
    configuration={{ ...configuration, httpClient: axios }}
    page={page}
    mapping={mapping}
  >
    <BrComponent path="menu">
      <Header />
    </BrComponent>
    <Fuds />

    <div id="container-main" className="wrp">
      <div className="inner">
        {children}
        <BrComponent path="main" />
        <BrComponent path="right" />
      </div>
    </div>
    <BrComponent path="footer">
      <Footer />
    </BrComponent>
  </BrPage>
);

CmsPage.defaultProps = {
  children: <></>,
};

export default CmsPage;

export const bloomreachProps: GetServerSideProps = async ({
  req: request,
  res: response,
  resolvedUrl: path,
}) => {
  relevance(request, response);

  const configuration = {
    path,
    endpoint:
      'https://screwfix.bloomreach.io/delivery/site/v1/channels/brxsaas/pages',
    endpointQueryParameter: 'endpoint',
  };

  const page = await initialize({
    ...configuration,
    request,
    httpClient: axios,
  });

  return { props: { configuration, page: page.toJSON() } };
};
