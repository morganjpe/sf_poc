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