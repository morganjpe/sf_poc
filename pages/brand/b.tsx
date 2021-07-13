import axios from 'axios';
import CmsPage, { bloomreachProps } from 'components/cms/page';

const BrandsB = ({ configuration, page }) => {
  return (
    <CmsPage
      page={page}
      configuration={{ ...configuration, httpClient: axios }}
    >
      <h2>
        Brands starting with <strong>b</strong>
      </h2>
    </CmsPage>
  );
};

export default BrandsB;

BrandsB.getInitialProps = async () => bloomreachProps({});
