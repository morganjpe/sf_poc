import axios from 'axios';
import CmsPage, { bloomreachProps } from 'components/cms/page';

const Search = ({ configuration, page, query }) => {
  return (
    <CmsPage
      page={page}
      configuration={{ ...configuration, httpClient: axios }}
    >
      <h2>Search result page content goes here</h2>
      Search query{' '}
      <b>
        <span data-content="query">{query?.search}</span>
      </b>
    </CmsPage>
  );
};

export default Search;

export const getServerSideProps = async (ctx) =>  {
  const query = ctx.query;
  const brResult = await bloomreachProps(ctx);
  return { ...brResult, query };
}
