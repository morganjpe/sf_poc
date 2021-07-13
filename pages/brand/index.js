import axios from 'axios';
import CmsPage, { bloomreachProps } from 'components/cms/page';

const Brand = ({ configuration, page }) => {
  console.log(configuration, page);
  return (
    <CmsPage
      hasMainContent
      page={page}
      configuration={{ ...configuration, httpClient: axios }}
    />
  );
};

export default Brand;

export const getServerSideProps = async (ctx) => bloomreachProps(ctx);
