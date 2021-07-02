import styled from 'styled-components';
import { BrManageContentButton } from '@bloomreach/react-sdk';
import { Content } from '@bloomreach/spa-sdk';

interface BannerViewAllProps {
  destinationUrl: string;
  dealText: string;
  content: Content | undefined;
}

const BannerViewAll = ({
  destinationUrl,
  dealText,
  content,
}: BannerViewAllProps): JSX.Element => (
  <>
    {/* <BrManageContentButton content={content} /> \\ for you to take a look Ian */}
    <BannerViewAll.Container className="view-all-html landingpage_viewall">
      <a href={destinationUrl} title={`View All ${dealText} Deals`}>
        <p>
          VIEW ALL {dealText.toUpperCase()}{' '}
          <span className="inline-block">
            DEALS <span className="arrow-right" />
          </span>
        </p>
      </a>
    </BannerViewAll.Container>
  </>
);

BannerViewAll.Container = styled.div`
  background-color: #ed1c24;
  margin: 12px -0.3em;

  p {
    text-align: center;
    color: #fff;
    font: 50px/48px screwfix_betaheavy;
    padding: 13px;
  }
  a {
    text-decoration: none;
  }
  .arrow-right {
    width: 0;
    height: 0;
    display: inline-block;
    border-top: 18px solid transparent;
    border-bottom: 18px solid transparent;
    border-left: 18px solid #fff;
    margin-left: 8px;
  }
`;

export default BannerViewAll;
