import axios from 'axios';
import CmsPage, { bloomreachProps } from '../components/cms/page';

const Home = ({ configuration, page, document }) => (
  <CmsPage page={page} configuration={{ ...configuration, httpClient: axios }}>
    <h2>Main page content goes here</h2>
  </CmsPage>
);

export default Home;

export const getServerSideProps = async (ctx) => bloomreachProps(ctx);
