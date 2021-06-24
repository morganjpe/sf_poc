import { useState, useRef, useEffect } from 'react';

import { BrManageContentButton } from '@bloomreach/react-sdk';
import DotdBanner from '../banners/dotd';
import { CategoryBlock } from '../cards/category';

const assortment = (cardObject) =>
  Object.keys(cardObject)
    .filter((key) => key.includes('assortment'))
    .filter((key) => cardObject[key] !== '')
    .map((key) => cardObject[key]);

const DotdAssortment = ({ component, page }) => {
  const params = component.getParameters();

  const [height, setHeight] = useState(0);
  const asstRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (asstRef && asstRef.current) {
        setHeight(asstRef.current.clientHeight);
      }
      window.addEventListener('resize', () => {
        if (asstRef && asstRef.current) {
          setHeight(asstRef.current.clientHeight);
        }
      });
    }
  }, []);

  const dotdProps =
    params && params.dealOfTheDay.length
      ? page.getContent(params.dealOfTheDay).getData()
      : null;

  return (
    <div
      className={
        page.isPreview()
          ? 'row-wrp--mod row-btm--pdg has-edit-button'
          : 'row-wrp--mod row-btm--pdg'
      }
    >
      <div className="row">
        <div className="lg-24 md-24 sm-24">
          <div className="homepage_dotd">
            <div className="dotd_tue_wk05">
              <div
                style={{
                  height:
                    typeof window !== 'undefined' && window.innerWidth >= 1024
                      ? `${height}px`
                      : 'initial',
                }}
                className="lg-9 md-24 sm-24 cols equal"
              >
                {dotdProps && (
                  <>
                    <BrManageContentButton
                      content={page.getContent(params.dealOfTheDay)}
                      documentTemplateQuery="DealOfTheDay"
                      folderTemplateQuery="new-banner-folder"
                      parameter="document"
                      root=""
                      relative
                    />
                    <DotdBanner height={height} {...dotdProps} />
                  </>
                )}
              </div>
            </div>
          </div>

          <div
            ref={asstRef}
            className="homepage_assortment lg-15 md-24 sm-24 tiles equal"
          >
            {params &&
              assortment(params).map((key) => {
                const { id, ...rest } = page.getContent(key).getData();
                return (
                  <div key={id} className="lg-8 md-8 sm-12 cols">
                    <BrManageContentButton
                      content={page.getContent(key)}
                      documentTemplateQuery="CategoryBlock"
                      folderTemplateQuery="new-banner-folder"
                      parameter="document"
                      root=""
                      relative
                    />
                    <CategoryBlock {...rest} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DotdAssortment;