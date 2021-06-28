import { BrManageContentButton } from '@bloomreach/react-sdk';

import getEffectiveMultipleDocumentParameters from '../../utils';
import CertonaCard from './certonaCard';

const CertonaGroup = ({ component, page }) => {
  const models = component.getModels();
  const docParams = getEffectiveMultipleDocumentParameters(page, models, 6);

  return (
    <div
      className={page.isPreview() ? 'has-edit-button' : ''}
      style={{
        display: 'flex',
        padding: '20px 0',
      }}
    >
      {docParams.map(({ document }) => {
        const { description, sku } = document.getData();

        return (
          <div
            key={`${Date.now()}_${sku}`}
            style={{ float: 'none' }}
            className="lg-4 md-8 sm-24 cols"
          >
            <BrManageContentButton
              content={document}
              documentTemplateQuery="new-banner-document"
              folderTemplateQuery="new-banner-folder"
              parameter="document"
              root="banners"
              relative
            />
            <CertonaCard description={description} sku={sku} />
          </div>
        );
      })}
    </div>
  );
};

export default CertonaGroup;
