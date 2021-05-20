// https://brm-core-0.brsrvr.com/api/v1/core/?q=drill&rows=10&start=0&request_type=search&search_type=keyword&fl=pid%2Cprice%2Cprice_range%2Csale_price%2Csale_price_range%2Csku_color%2Csku_ids%2Csku_price%2Csku_sale_price%2Csku_swatch_images%2Csku_thumb_images%2Cthumb_image%2Ctitle%2Curl&request_id=71889297486107&account_id=6128&url=screwfix.com

import axios from 'axios';

// components
import Breadcrumbs from '../../components/product/breadcrumbs';

const Product = (props) => {
  console.log(props);

  return (
    <div>
      <Breadcrumbs />
    </div>
  );
};

export default Product;

export const getServerSideProps = async (context) => {
  const {
    query: { id },
  } = context;

  try {
    const { data } = await axios.get(
      `https://www.screwfix.com/product/api/${id}`
    );
    return {
      props: { ...data },
    };
  } catch (error) {
    throw new Error(error);
  }
};
