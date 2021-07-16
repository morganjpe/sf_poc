import { BrProps } from '@bloomreach/react-sdk';

// utils
import { Page } from '@bloomreach/spa-sdk';
import HeroBanner from 'components/banners/heroBanner';
import { getProductGalleryData } from '../utils';

import ProductGallery from '../../cards/product';

const HalfGridInterpreter = ({
  space,
  page,
}: {
  space: string;
  page: Page;
}) => {
  const data = page.getContent(space);

  if (data && data?.getData) {
    const { contentType } = data.getData();

    if (contentType === 'brxsaas:ProductGallery') {
      return (
        <ProductGallery
          isPreview={page.isPreview()}
          page={page}
          products={getProductGalleryData(space, page)}
        />
      );
    }

    if (contentType === 'brxsaas:heroBanner') {
      return (
        <HeroBanner {...(data.getData() as any)} content={data} halfWidth />
      );
    }
  }

  return page.isPreview() ? <div>invalid document for component</div> : <div />;
};

const HalfGrid = ({ component, page }: BrProps): JSX.Element => {
  const { left, right } = component.getParameters();

  return (
    <div className={page.isPreview() ? 'has-edit-button row' : 'row'}>
      <div className="row-wrp--mod">
        <div className="lg-12 md-24 sm-24 cols">
          <div className="row">
            <HalfGridInterpreter space={left} page={page} />
          </div>
        </div>
        <div className="lg-12 md-24 sm-24 cols">
          <HalfGridInterpreter space={right} page={page} />
        </div>
      </div>
    </div>
  );
};

export default HalfGrid;
