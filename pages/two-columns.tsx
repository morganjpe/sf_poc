import axios from 'axios';
import { GetServerSideProps } from 'next';

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

export const getServerSideProps: GetServerSideProps = async (ctx) =>
  bloomreachProps(ctx);
