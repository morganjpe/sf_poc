import { portal } from 'react';
import { BrManageContentButton } from '@bloomreach/react-sdk';
import { Page } from '@bloomreach/spa-sdk';
import styled from 'styled-components';

import CategoryBlock from './categoryBlock';

interface CategoryCollectionProps {
  pageRef: string;
  page: Page;
}

const CategoryCollection = ({
  pageRef,
  page,
}: CategoryCollectionProps): JSX.Element => {
  const data = page.getContent(pageRef);

  if (page.isPreview() && !data) {
    return (
      <div className="has-edit-button" style={{ position: 'relative' }}>
        <BrManageContentButton content={data} />
      </div>
    );
  }

  if (!data) {
    return <div />;
  }

  const { desktop, mobile, tablet, cards } = data.getData();

  return (
    <CategoryCollection.Container
      className={page.isPreview() ? 'has-edit-button' : ''}
    >
      {cards.map(({ $ref }: { [n: string]: string }) => {
        const cardData = page.getContent($ref)?.getData();

        if (!cardData) return <div />;

        return (
          <div
            key={cardData.id}
            className={`lg-${24 / desktop} md-${24 / tablet} sm-${
              24 / mobile
            } cols`}
          >
            <BrManageContentButton content={data} />
            <CategoryBlock
              containerColor={cardData.containerColor}
              desktopImage={cardData.desktopImage}
              tabletImage={cardData.tabletImage}
              mobileImage={cardData.mobileImage}
              displayName={cardData.displayName}
              textColor={cardData.textColor}
              categoryText={cardData.categoryText}
              destinationUrl={cardData.destinationUrl}
            />
          </div>
        );
      })}
    </CategoryCollection.Container>
  );
};

CategoryCollection.Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  .mt__item {
    height: 100%;
    margin-bottom: 0;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .mt__item-img {
    display: block;
    width: 100%;
  }

  .mt__item-title {
    flex: 1;
  }

  .cols {
    margin-bottom: 10px;
    white-space: normal;
  }

  @media only screen and (max-width: 40em) {
    .mt__item {
      height: initial;
    }

    .mt__item-img {
      display: table-cell;
      vertical-align: middle;
      width: 1%;
    }

    .container {
      height: initial;
      display: block;
    }
  }
`;

export default CategoryCollection;
