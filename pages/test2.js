import axios from 'axios';
import { Page, bloomreachProps } from '../components/cms/page';

const Test = ({ configuration, page }) => (
  <Page
    hasMainContent
    page={page}
    configuration={{ ...configuration, httpClient: axios }}
  />
);

export default Test;

Test.getInitialProps = async (ctx) => bloomreachProps(ctx);
