import axios from 'axios';
import { Page, bloomreachProps } from '../components/cms/page';

const Home = ({ configuration, page }) => (
  <Page page={page} configuration={{ ...configuration, httpClient: axios }} />
);

export default Home;

Home.getInitialProps = async (ctx) => bloomreachProps(ctx);
