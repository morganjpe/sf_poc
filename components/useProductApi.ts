import useSWR from 'swr';
import axios from 'axios';

export interface ProductAttributes {
  name: string;
  description: string;
  image: string;
  starRating: string;
  bullets: string[];
  price: number;
  exVatPrice: number;
  priceWas: number;
  priceWasExVat: number;
  vatRate: number;
  stock: number;
  cpc: boolean;
  cpcType: string;
  leadTime: 1;
  fulfillmentMethod: string;
  deliveryClass: string;
  hasBulkPrices: boolean;
  video: string;
  numReviews: string;
  brandImage: string;
  contents: string;
  hazardous: boolean;
  bulkPrices: {
    min: number;
    max: number;
    price: number;
    priceExVat: number;
  }[];
  properties: {
    name: string;
    value: string;
  }[];
}

interface ProductAPIResponse {
  meta: {
    warnings: {
      [sku: string]: string;
    };
  };
  data: {
    type: 'PRODUCT';
    id: string;
    attributes: ProductAttributes;
  }[];
}

const queryString = (query: string) =>
  `https://int2.dev.screwfix.com/v2/api/products/SFUK/byIds?Persona=screwfix&Id=${query}`;

const useProductApi = (
  sku: string | undefined
): {
  product: ProductAttributes | null;
  isLoading: boolean;
  isError: any;
} => {
  if (!sku) {
    return {
      product: null,
      isLoading: false,
      isError: 'no sku provided',
    };
  }

  const { data, error } = useSWR(sku, (prodSku) =>
    axios.get(queryString(prodSku))
  );

  let product: ProductAttributes | null = null;
  let apiError: string | null = null;

  if (data) {
    const { meta } = data.data as ProductAPIResponse;

    if (meta.warnings[sku] === undefined) {
      product = data.data.data[0].attributes;
    } else {
      apiError = meta.warnings[sku];
    }
  }

  return {
    product,
    isLoading: !error && !data,
    isError: error || apiError,
  };
};

export default useProductApi;
