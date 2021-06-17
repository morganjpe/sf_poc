import ReactHtmlParser from 'react-html-parser';

const HTMLContent = ({ component, page }) => {
  const params = component.getParameters();

  if (params.document1 === '') {
    return <div />;
  }

  const { html } = page.getContent(params.document1).getData();

  return <div>{ReactHtmlParser(html)}</div>;
};

export default HTMLContent;
