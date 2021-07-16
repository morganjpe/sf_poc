import ReactHtmlParser from 'react-html-parser';

const HTMLContent = ({ component, page }) => {
  const { document1 } = component.getParameters();
  const pageData = page.getContent(document1);

  if (pageData) {
    const { html } = pageData.getData();
    return <div>{ReactHtmlParser(html)}</div>;
  }

  return <div />;
};

export default HTMLContent;
