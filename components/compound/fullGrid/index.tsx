/* eslint no-nested-ternary: "off" */

import { BrProps } from '@bloomreach/react-sdk';

// components
import ProductGallery from '../../cards/product';
import TextContent from '../../textContent';

// utils
import { getProductGalleryData } from '../utils';

const FullGrid = ({ component, page }: BrProps): JSX.Element => {
  const { content } = component.getParameters();

  if (page.isPreview() && content === '') {
    return <div className="has-edit-button" />;
  }

  const data = page.getContent(content)?.getData();

  return (
    <div className="row">
      {data?.contentType === 'brxsaas:ProductGallery' ? (
        <div className="row-wrp--mod">
          <ProductGallery
            page={page}
            isPreview={page.isPreview()}
            products={getProductGalleryData(content, page)}
          />
        </div>
      ) : data?.contentType === 'brxsaas:TextContent' ? (
        <TextContent page={page} data={{ ...data, ref: content }} />
      ) : page.isPreview() ? (
        'invalid document type'
      ) : (
        ''
      )}
    </div>
  );
};

export default FullGrid;
