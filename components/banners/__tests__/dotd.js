import { screen, render, cleanup } from '@testing-library/react';

import DotdBanner from '../dotd';

// configure({ asyncUtilTimeout: 5000 });

// Deal of the Day ends midnight, Deal of the Day ends 11pm, Deal of the Week, Deal of the Weekend

afterEach(cleanup);

const PATH = 'http://www.screwfix.com/';
const IMG_DAY = `${PATH}/assets/img/deal-logo.png`;
const IMG_WEEK = `${PATH}/assets/img/deal-week-logo.png`;
const IMG_WEEKEND = `${PATH}/assets/img/deal-weekend-logo.png`;

describe('<DotdBanner /> Component as "Deal of the Day"', () => {
  beforeEach(() => {
    render(<DotdBanner dealImage="Deal of the Day ends midnight" />);
  });

  it('should display "Deal of the Day ends midnight" in <a /> title', () => {
    expect(
      screen.getByTitle(/Deal of the Day ends midnight/i)
    ).toBeInTheDocument();
  });

  it(`should render the correct image - ${IMG_DAY}`, () => {
    expect(screen.getByTestId('dotd-heading-image')).toHaveStyle(
      `background-image: url(${IMG_DAY}) no-repeat`
    );
  });
});

describe('<DotdBanner /> Component as "Deal of the Week"', () => {
  beforeEach(() => {
    render(<DotdBanner dealImage="Deal of the Week" />);
  });

  it('should display "Deal of the Week" in <a /> title', () => {
    expect(screen.getByTitle(/Deal of the Week/i)).toBeInTheDocument();
  });

  it(`should render the correct image - ${IMG_WEEK}`, () => {
    expect(screen.getByTestId('dotd-heading-image')).toHaveStyle(
      `background-image: url(${IMG_WEEK}) no-repeat`
    );
  });
});

describe('<DotdBanner /> Component as "Deal of the Weekend"', () => {
  beforeEach(() => {
    render(<DotdBanner dealImage="Deal of the Weekend" />);
  });

  it('should display "Deal of the Weekend" in <a /> title', () => {
    expect(screen.getByTitle(/Deal of the Weekend/i)).toBeInTheDocument();
  });

  it(`should render the correct image - ${IMG_WEEKEND}`, () => {
    expect(screen.getByTestId('dotd-heading-image')).toHaveStyle(
      `background-image: url(${IMG_WEEKEND}) no-repeat`
    );
  });
});

// describe('<DotdBanner /> Component should recieve properties from API', () => {
//   it('should display product name', async () => {
//     render(<DotdBanner dealImage="Deal of the Week" sku="91024" />);
//     // const text = await screen.findByText('Bath waste with plastic plug');
//     // expect(text).toBeInTheDocument();

//     expect(
//       await screen.findByText('Bath waste with plastic plug')
//     ).toBeInTheDocument();

//     // await waitFor(() => {

//     // })
//   });
// });
