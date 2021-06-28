import { BrProps, BrManageContentButton } from '@bloomreach/react-sdk';
import { Page } from '@bloomreach/spa-sdk';

import ProductGallery from '../../cards/product';

const getProductGalleryData = (ref: string, page: Page): any => {
  const content = page.getContent(ref);

  if (content) {
    const data = content.getData();

    return [...Array(3)].map((_, index) => {
      const docRef = data[`product${index + 1}`].$ref;
      return {
        ...page.getContent(docRef)?.getData(),
        docRef,
      };
    });
  }

  return null;
};

const HalfGrid = ({ component, page }: BrProps): JSX.Element => {
  const { left } = component.getParameters();

  return (
    <div className={page.isPreview() ? 'has-edit-button row' : 'row'}>
      <div className="row-wrp--mod">
        <div className="lg-12 md-24 sm-24 cols">
          <div className="row">
            {page.getContent(left)?.getData().contentType ===
              'brxsaas:ProductGallery' && (
              <ProductGallery
                isPreview={page.isPreview()}
                page={page}
                products={getProductGalleryData(left, page)}
              />
            )}
          </div>
        </div>
        <div className="lg-12 md-24 sm-24 cols">right</div>
      </div>
    </div>
  );
};

export default HalfGrid;
