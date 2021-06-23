import useSWR from 'swr';
import axios from 'axios';

const queryString = (query) =>
  `https://brm-core-0.brsrvr.com/api/v1/core/?q=${query}&rows=10&start=0&request_type=search&search_type=keyword&fl=pid%2Cprice%2Cprice_range%2Csale_price%2Csale_price_range%2Csku_color%2Csku_ids%2Csku_price%2Csku_sale_price%2Csku_swatch_images%2Csku_thumb_images%2Cthumb_image%2Ctitle%2Curl&request_id=85649749710616&account_id=6128&url=screwfix.com`;

const useProductApi = (sku) => {
  const { data, error } = useSWR(sku, (prodSku) =>
    axios.get(queryString(prodSku))
  );

  return {
    product: data && data.data ? data.data.response.docs[0] : null,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useProductApi;
