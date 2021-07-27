import { BrManageContentButton } from '@bloomreach/react-sdk';
import { Page } from '@bloomreach/spa-sdk';

interface TextContentProps {
  page: Page;
  data: any;
}

const TextContent = ({ data, page }: TextContentProps): JSX.Element => {
  const { title, titleColor, content, ref } = data;

  return (
    <div
      style={{ position: 'relative' }}
      className={
        page.isPreview()
          ? 'row-wrp--mod--h2fix has-edit-button'
          : 'row-wrp--mod--h2fix'
      }
    >
      <BrManageContentButton content={page.getContent(ref)} />
      <span
        className="row-title"
        style={{
          borderBottom: '1px solid #636363',
          display: 'block',
          margin: '20px 0 20px',
          position: 'relative',
        }}
      >
        <h2 style={{ color: titleColor }}>{title}</h2>
      </span>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default TextContent;
