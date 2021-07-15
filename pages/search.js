import CmsPage from 'components/cms/page';

const Search = ({ query }) => (
  <CmsPage>
    <h2>Search result page content goes here</h2>
    Search query{' '}
    <b>
      <span data-content="query">{query?.search}</span>
    </b>
  </CmsPage>
);

export default Search;

export const getStaticProps = async (ctx) => {
  const { query } = ctx;
  return { query };
};
