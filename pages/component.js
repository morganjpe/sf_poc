import DotdBanner from '../components/banners/dotd';

const props = {
  dealImage: 'Deal of the Day ends midnight',
  productDescription: 'Cooke & Lewis Soft-Close Toilet Seat',
  sku: '91024',
  promoIcon: 'save %',
  desktopImage:
    'http://www.screwfix.com/images/general/assets/gfx/dod/dodwk01/dod_sfx_wed_lg.png',
  tabletImage:
    'http://www.screwfix.com/images/general/assets/gfx/dod/dodwk01/dod_sfx_wed_md.png',
  mobileImage:
    'http://www.screwfix.com/images/general/assets/gfx/dod/dodwk01/dod_sfx_wed_sm.png',
  destinationUrl:
    'http://www.screwfix.com/p/cooke-lewis-soft-close-toilet-seat-duraplast-white/3140k',
};

const TestPage = () => (
  <div id="container-main" className="wrp">
    <div className="inner">
      <DotdBanner {...props} />
    </div>
  </div>
);

export default TestPage;
