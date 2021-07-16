import axios from 'axios';

// components
import Breadcrumbs from '../../components/product/breadcrumbs';

const Product = (props) => (
  <div>
    <Breadcrumbs />
  </div>
);

export default Product;

export const getStaticProps = async (context) => {
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
