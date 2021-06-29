/* eslint no-nested-ternary: "off" */

import { BrProps } from '@bloomreach/react-sdk';

// components
import ProductGallery from '../../cards/product';
import TextContent from '../../textContent';
import ImageBanner from '../../banners/imageBanner';

// utils
import { getProductGalleryData } from '../utils';

const FullGrid = ({ component, page }: BrProps): JSX.Element => {
  const { content } = component.getParameters();

  if (page.isPreview() && content === '') {
    return <div className="has-edit-button" />;
  }

  const data = page.getContent(content)?.getData();

  console.log(data);

  if (data?.contentType === 'brxsaas:ProductGallery') {
    return (
      <div className="row">
        <div className="row-wrp--mod">
          <ProductGallery
            page={page}
            isPreview={page.isPreview()}
            products={getProductGalleryData(content, page)}
          />
        </div>
      </div>
    );
  }

  if (data?.contentType === 'brxsaas:BannerImage') {
    return (
      <div className="row" style={{ position: 'relative' }}>
        <ImageBanner
          pageRef={content}
          page={page}
          h1={data.h1}
          hoverOverText={data.hoverOverText}
          destinationUrl={data.destinationUrl}
          mobileImage={data.mobileImage}
          tabletImage={data.tabletImage}
          desktopImage={data.desktopImage}
          altTagDescription={data.altTagDescription}
          fixedHeight={data.fixedHeight}
        />
      </div>
    );
  }

  if (data?.contentType === 'brxsaas:TextContent') {
    return (
      <div className="row">
        <TextContent page={page} data={{ ...data, ref: content }} />
      </div>
    );
  }

  return <div>invalid document type</div>;
};

/// "brxsaas:BannerImage"

export default FullGrid;
