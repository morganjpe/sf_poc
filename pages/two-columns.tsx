import axios from 'axios';
import { NextPageContext } from 'next';

import { Page, Document } from '@bloomreach/spa-sdk';

import CmsPage, { bloomreachProps } from '../components/cms/page';

interface TwoColumnsProps {
  page: Page;
  configuration: any;
  document: Document;
}

const TwoColumns = ({
  configuration,
  page,
  document,
}: TwoColumnsProps): JSX.Element => (
  <>
    <CmsPage
      page={page}
      configuration={{ ...configuration, httpClient: axios }}
    />
  </>
);

export default TwoColumns;

TwoColumns.getInitialProps = async (ctx: NextPageContext) =>
  bloomreachProps(ctx);
