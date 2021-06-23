/* eslint import/no-extraneous-dependencies: 0 */

import { rest } from 'msw';

const response = {
  result: 0,
  product: {
    id: '91024',
    name: 'Bath Waste',
    description: 'Bath waste with plastic plug.',
    image: 'http://media.screwfix.com/is/image/ae235/91024_P?$p$',
    imagessl: 'https://media.screwfix.com/is/image/ae235/91024_P?$p$',
    seourl: '/p/bath-waste/91024',
    gassafe: '',
    hazardous: false,
    leadTime: 1,
    deliveryClass: 'delivery-info-nd',
    fulfillmentMethod: 'HOME|TCND',
    stock: '0',
    cpc: true,
    cpcType: 'stockUnknown',
    cpcBranchName: '',
    cpcBranchCode: '',
    cpcBranchStock: -1,
    cpcTime: '',
    cpcLocation: '',
    cpcDistance: 0,
    priceWas: '',
    priceWasExVat: '',
    price: 3.59,
    exvatprice: 3,
    priceVat: '&#40;inc. 0.2 VAT&#41;',
    vatRate: 0.2,
    excludeVATfromPrice: '',
    formattedResultPrice: '£0.00',
    formattedUnitPrice: '',
    resultUnitPriceUnitOfMeasure: '',
    priceHasBulk: 'true',
    pricePromo: 'false',
    bulkUnit: 'Item',
    bulkLevels: 2,
    bulkPrices: [
      {
        min: 1,
        max: 4,
        excludeVATfromPrice: '',
        price: 3.59,
        exVatPrice: 3,
        formattedResultPrice: '£3.59',
        formattedUnitPrice: '',
        resultUnitPriceUnitOfMeasure: '',
      },
      {
        min: 5,
        excludeVATfromPrice: '',
        price: 3.23,
        exVatPrice: 2.7,
        formattedResultPrice: '£3.23',
        formattedUnitPrice: '',
        resultUnitPriceUnitOfMeasure: '',
      },
    ],
    categoryId: 'cat831612',
    categoryName: 'Wastes',
    categoryList: ['cat830950', 'cat831494', 'cat2410005', 'cat831612'],
    message:
      '¬ SCREWFIX_ Save £10 (10%) on this item from 29/07/11 - 04/09/11, discount is applied automatically in the trolley. PLUMBFIX_ ELECTRICFX',
    video: '',
    contents: '',
    specifications: '',
    bullets: [],
    starrating: '2.5',
    numReviews: '',
    brand: 'Unbranded',
    brandimg:
      'http://media.screwfix.com/is/image/ae235/Unbranded?$107x50$&fmt=gif',
    brandimgssl:
      'https://media.screwfix.com/is/image/ae235/Unbranded?$107x50$&fmt=gif',
  },
};

export default [
  rest.get('/api/product', (req, res, ctx) => {
    res(ctx.status(200), ctx.json(response));
  }),
];
