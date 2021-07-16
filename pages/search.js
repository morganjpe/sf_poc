const Search = ({ query }) => (
  <>
    <h2>Search result page content goes here</h2>
    Search query
    <b>
      <span data-content="query">{query?.search}</span>
    </b>
  </>
);

export default Search;

export const getServerSideProps = async (ctx) => {
  const { query } = ctx;
  return {
    props: {
      query,
    },
  };
};
