import { useRef } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';

const SliderItem = ({ image, url, name }) => (
  <div className="mt__item" title={name} style={{ color: '#fff' }}>
    <Link href={url} className="cat-link">
      <div>
        <div className="mt__item-img" style={{ background: ' #f6f6f6' }}>
          <img
            src="//www.screwfix.com/images/general/assets/gfx/brand_glass_pane.png"
            alt={name}
            className="fill"
          />
          <img
            src={image}
            alt={name}
            className="sprite_pos sprite_pos_thirteen"
            style={{
              maxWidth: '100%',
              position: 'absolute',
              top: 0,
              left: '50%',
              width: '70%',
              transform: 'translate(-50%, 30%)',
            }}
          />
        </div>
        <div className="mt__item-title">
          <div className="h3">{name}</div>
        </div>
      </div>
    </Link>
  </div>
);

const sliderSettings = {
  dots: false,
  focusOnSelect: true,
  draggable: false,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const brand = ({ component, page }) => {
  const params = component.getParameters();

  if (params.links === '') return <div />;

  const { brands } = page.getContent(params.links).getData();

  const slider = useRef(null);

  return (
    <div className="row-btm--pdg">
      <div className="homepage_brands row brand-carousel-block">
        <div className="lg-24 md-24 sm-24">
          <div className="row">
            <h2 className="h2 underline">
              Top Brands -
              <Link className="ViewAllLink" href="/brand">
                View All
              </Link>
            </h2>
            <div className="sl__full">
              <div className="slider slider-brands">
                <button
                  id="slider_previous"
                  type="button"
                  data-role="none"
                  className="btn pagi__link slick-prev slick-arrow"
                  style={{ display: 'block' }}
                  onClick={() => {
                    if (slider.current) {
                      slider.current.slickPrev();
                    }
                  }}
                >
                  <span className="icon-left-dir" />
                </button>
                <div aria-live="polite">
                  <div style={{ width: '100%' }} role="listbox">
                    <Slider ref={slider} {...sliderSettings}>
                      {brands.map(({ $ref }) => {
                        const { image, id, name } = page
                          .getContent($ref)
                          .getData();
                        const {
                          model: {
                            links: {
                              site: { href },
                            },
                          },
                        } = page.getContent($ref);

                        return (
                          <SliderItem
                            name={name}
                            key={id}
                            image={image}
                            url={href}
                          />
                        );
                      })}
                    </Slider>
                  </div>
                </div>

                <button
                  id="slider_next"
                  type="button"
                  data-role="none"
                  className="btn pagi__link slick-next slick-arrow"
                  style={{ display: 'block' }}
                  onClick={() => {
                    if (slider.current) {
                      slider.current.slickNext();
                    }
                  }}
                >
                  <span className="icon-right-dir-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default brand;
