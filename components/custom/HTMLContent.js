import ReactHtmlParser from 'react-html-parser';
import { BrManageContentButton } from '@bloomreach/react-sdk';

const HTMLContent = ({ component, page }) => {
  const { document1 } = component.getParameters();
  const pageData = page.getContent(document1);

  if (pageData) {
    const { html } = pageData.getData();
    return (
      <div
        className={page.isPreview() ? 'has-edit-button' : ''}
        style={{ position: 'relative' }}
      >
        <BrManageContentButton content={pageData} />
        {ReactHtmlParser(html)}
      </div>
    );
  }

  return <div />;
};

export default HTMLContent;
