import Link from 'next/link';

import CmsPage from '../components/cms/page';

const Home = (): JSX.Element => (
  <CmsPage>
    <h1>homepage</h1>
    <Link href="/test2">link to test 2</Link>
  </CmsPage>
);

export default Home;
