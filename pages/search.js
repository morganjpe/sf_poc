import axios from 'axios';
import CmsPage, { bloomreachProps } from '../components/cms/page';

const Search = ({ configuration, page }) => (
  <CmsPage page={page} configuration={{ ...configuration, httpClient: axios }}>
    <h2>Search result page content goes here</h2>
  </CmsPage>
);

export default Search;

export const getServerSideProps = async (ctx) => bloomreachProps(ctx);
