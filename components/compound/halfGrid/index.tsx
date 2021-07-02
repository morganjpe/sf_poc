import { BrProps } from '@bloomreach/react-sdk';

// utils
import { getProductGalleryData } from '../utils';

import ProductGallery from '../../cards/product';

const HalfGrid = ({ component, page }: BrProps): JSX.Element => {
  const { left } = component.getParameters();

  //   component.getModels();
  //   page.getDocument();

  return (
    <div className={page.isPreview() ? 'has-edit-button row' : 'row'}>
      <div className="row-wrp--mod">
        <div className="lg-12 md-24 sm-24 cols">
          <div className="row">
            {left &&
              page.getContent(left)?.getData().contentType ===
                'brxsaas:ProductGallery' && (
                <ProductGallery
                  isPreview={page.isPreview()}
                  page={page}
                  products={getProductGalleryData(left, page)}
                />
              )}
          </div>
        </div>
        <div className="lg-12 md-24 sm-24 cols">Right Side Content</div>
      </div>
    </div>
  );
};

export default HalfGrid;
