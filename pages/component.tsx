// import Accordion from '../components/accordion';
// import SearchBanner from '../components/banners/searchBanner';

import HeroBanner from '../components/banners/heroBanner';

const data = {
  altTagDescription: 'alt tag description',
  backgroundImage:
    'https://screwfix.scene7.com/is/image/ae235?layer=0&fmt=jpg&op_sharpen=1&scl=1&src=ae235/ShowersBGD',
  destinationUrl: '/',
  freeType:
    '<p>this is line one</p>\n\n<p>this is line two</p>\n\n<p>this is line three</p>',
  freeTypePoundEx: '',
  freeTypePoundInc: '',
  hideBorder: true,
  hoverOver: '',
  sku: '91024',
  webIcon:
    'https://media.screwfix.com/is/image/ae235/Prices Locked_3?$miniIconProdTile$',
  responsiveImage: {
    desktopImage:
      'https://www.screwfix.com/images/CAT145B/assets/gfx/cat145b_dewaltcombi_979hf_hw_lg.png',
    mobileImage:
      'https://www.screwfix.com/images/CAT145B/assets/gfx/cat145b_dewaltcombi_979hf_hw_sm.png',
    tabletImage:
      'https://www.screwfix.com/images/CAT145B/assets/gfx/cat145b_dewaltcombi_979hf_hw_md.png',
  },
  bannerType: {
    selectionValues: [
      {
        key: 'chevronClear',
        label: 'chevronClear',
      },
    ],
  },
  skuDropdown: {
    selectionValues: [
      {
        key: 'savePound',
        label: 'savePound',
      },
    ],
  },
  template: {
    selectionValues: [
      {
        key: 'save',
        label: 'save',
      },
    ],
  },
};

const Component = (): JSX.Element => (
  <div id="container-main" className="wrp">
    <div className="inner">
      <div className="row">
        <HeroBanner {...data} halfWidth={false} />
      </div>
      <div className="row">
        <div className="lg-12 md-24 sm-24 cols">
          <HeroBanner {...data} halfWidth />
        </div>
      </div>
    </div>
  </div>
);

export default Component;
