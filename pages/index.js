import axios from 'axios';
import { Page, bloomreachProps } from '../components/cms/page';

const Home = ({ configuration, page }) => (
  <Page page={page} configuration={{ ...configuration, httpClient: axios }}>
    <h2>Main page content goes here</h2>
  </Page>
);

export default Home;

Home.getInitialProps = async (ctx) => bloomreachProps(ctx);
