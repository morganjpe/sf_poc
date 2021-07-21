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
        <div className="row">
          <ProductGallery
            isPreview={page.isPreview()}
            page={page}
            products={getProductGalleryData(space, page)}
          />
        </div>
      );
    }

    if (contentType === 'brxsaas:heroBanner') {
      const { destinationUrl, internalUrl } = data.getData();

      const internal = page.getContent(internalUrl?.$ref);
      const newUrl = internal ? internal.getUrl() : destinationUrl;

      return (
        <HeroBanner
          {...(data.getData() as any)}
          content={data}
          halfWidth
          destinationUrl={newUrl}
        />
      );
    }
  }

  return page.isPreview() ? <div>invalid document for component</div> : <div />;
};

const HalfGrid = ({ component, page }: BrProps): JSX.Element => {
  const { left, right } = component.getParameters();

  return (
    <div className="row">
      <div className={page.isPreview() ? 'has-edit-button row' : ''}>
        <div className="row-wrp--mod">
          <div className="lg-12 md-24 sm-24 cols">
            <HalfGridInterpreter space={left} page={page} />
          </div>
          <div className="lg-12 md-24 sm-24 cols">
            <HalfGridInterpreter space={right} page={page} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfGrid;
