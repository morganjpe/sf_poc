import axios from 'axios';
import { Page, bloomreachProps } from '../components/cms/page';

const Search = ({ configuration, page }) => (
  <Page page={page} configuration={{ ...configuration, httpClient: axios }}>
    <h2>Search result page content goes here</h2>
  </Page>
);

export default Search;

Search.getInitialProps = async (ctx) => bloomreachProps(ctx);
