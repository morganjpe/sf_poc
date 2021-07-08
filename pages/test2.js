import axios from 'axios';
import CmsPage, { bloomreachProps } from '../components/cms/page';

const Test = ({ configuration, page, pageModel }) => (
  <>
    {console.log(pageModel, '????')}
    <CmsPage
      hasMainContent
      page={page}
      configuration={{ ...configuration, httpClient: axios }}
    />
  </>
);

export default Test;

export const getServerSideProps = async (ctx) => bloomreachProps(ctx);
