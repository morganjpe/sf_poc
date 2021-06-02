import axios from 'axios';
import { Page, bloomreachProps } from '../../components/cms/page';

const Brand = ({ configuration, page }) => {
  console.log(configuration, page);
  return (
    <Page
      hasMainContent
      page={page}
      configuration={{ ...configuration, httpClient: axios }}
    />
  );
};

Brand.getInitialProps = async (ctx) => bloomreachProps(ctx);

export default Brand;
