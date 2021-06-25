import axios from 'axios';
import { BrComponent, BrPage } from '@bloomreach/react-sdk';
import { initialize, TYPE_CONTAINER_ITEM_UNDEFINED } from '@bloomreach/spa-sdk';

// import { CertonaCollection } from '../cards/certona';
// import { CategoryCollection } from '../cards/category';
// import BrandCarousel from '../carousel/brand';
import HTMLContent from '../custom';
import DotdAssortment from '../compound/DotdAssortment';
// fallback
import Fallback from './fallback';

import Header from '../layout/header';
import Fuds from '../layout/fuds';
import Footer from '../layout/footer';

const mapping = {
  // certonaGroup: CertonaCollection,
  // BrandSlider: BrandCarousel,
  // CategoryBlockCollection: CategoryCollection,
  HTMLComponent: HTMLContent,
  DotdAssortment,
  [TYPE_CONTAINER_ITEM_UNDEFINED]: Fallback,
};

export const Page = ({ configuration, page, children, hasMainContent }) => (
  <BrPage configuration={{ ...configuration }} page={page} mapping={mapping}>
    <BrComponent path="menu">
      <Header />
    </BrComponent>
    <Fuds />
    <div id="container-main" className="wrp">
      <div className="inner">
        {hasMainContent && <BrComponent path="main" />}
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
