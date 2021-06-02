import ReactHtmlParser from 'react-html-parser';
import DOMPurify from 'dompurify';

const HTMLContent = ({ component, page }) => {
  const params = component.getParameters();

  if (params.document1 === '') {
    return <div />;
  }

  const { html } = page.getContent(params.document1).getData();

  return <div>{ReactHtmlParser(DOMPurify.sanitize(html))}</div>;
};

export default HTMLContent;
