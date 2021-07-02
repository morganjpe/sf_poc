import axios from 'axios';

import { NextPageContext } from 'next';

import { BrComponent, BrPage } from '@bloomreach/react-sdk';

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

export const bloomreachProps = async (
  context: NextPageContext
): Promise<{
  configuration: Configuration;
  page: Page;
}> => {
  const configuration = {
    endpoint: process.env.PAGES_ENDPOINT,
    endpointQueryParameter: 'endpoint',
    request: { path: context.asPath || '' },
  };

  const page = await initialize({
    ...configuration,
    httpClient: axios,
    request: {
      ...configuration.request,
    },
  });

  return {
    configuration,
    page,
  };
};
