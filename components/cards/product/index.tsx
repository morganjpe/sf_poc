import { BrManageContentButton } from '@bloomreach/react-sdk';
import { Page } from '@bloomreach/spa-sdk';

import Card, { CardProps } from './card';

interface CardPropsMapped extends CardProps {
  id: string;
  docRef: string;
}

const ProductGallery = ({
  products,
  page,
  isPreview,
}: {
  isPreview: boolean;
  page: Page | undefined;
  products: CardPropsMapped[];
}): JSX.Element => (
  <>
    {products.map(
      ({
        sku,
        productDescription,
        id,
        image,
        pricePoint,
        turnOffSavingWasPrice,
        docRef,
      }) => (
        <div
          className={
            isPreview
              ? 'lg-8 md-8 sm-24 cols has-edit-button'
              : 'lg-8 md-8 sm-24 cols'
          }
          key={`${id}_${Date.now()}`}
        >
          <BrManageContentButton content={page?.getContent(docRef)} />
          <Card
            productDescription={productDescription}
            sku={sku}
            image={image}
            pricePoint={pricePoint}
            destinationUrl="/"
            turnOffSavingWasPrice={turnOffSavingWasPrice}
          />
        </div>
      )
    )}
  </>
);

export default ProductGallery;
