/* eslint no-nested-ternary: "off" */

import { BrProps } from '@bloomreach/react-sdk';

// components
import ProductGallery from '../../cards/product';
import TextContent from '../../textContent';
import ImageBanner from '../../banners/imageBanner';
import { CategoryCollection } from '../../cards/category';
import Accordion from '../../accordion';
import BannerViewAll from '../../banners/bannerViewAll';

// utils
import { getProductGalleryData } from '../utils';

const FullGrid = ({ component, page }: BrProps): JSX.Element => {
  const { content } = component.getParameters();

  if (page.isPreview() && content === '') {
    return <div className="has-edit-button" />;
  }

  const data = page.getContent(content)?.getData();

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
          // pageRef={content}
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

  if (data?.contentType === 'brxsaas:CategoryBlockGroup') {
    return (
      <div className="row">
        <div
          style={{ display: 'flex', flexWrap: 'wrap' }}
          className="row-wrp--mod"
        >
          <CategoryCollection page={page} pageRef={content} />
        </div>
      </div>
    );
  }

  if (data?.contentType === 'brxsaas:AccordionGroup') {
    return (
      <div className="">
        <Accordion page={page} pageRef={content} />
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

  if (data?.contentType === 'brxsaas:BannerViewAll') {
    const { destinationUrl, dealText } = data;
    return (
      <div className="row">
        <BannerViewAll
          content={page.getContent(content)}
          destinationUrl={destinationUrl}
          dealText={dealText}
        />
      </div>
    );
  }

  console.log(data, '???');

  return <div>invalid document type</div>;
};

export default FullGrid;
