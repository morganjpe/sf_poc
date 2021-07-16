import axios from 'axios';

import { useRouter } from 'next/router';

// components
import Breadcrumbs from '../../components/product/breadcrumbs';

const Product = () => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>is loading...</div>;
  }

  return (
    <div>
      <Breadcrumbs />
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => ({
  paths: [{ params: { id: '91024' } }],
  fallback: true,
});

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;

  try {
    const { data } = await axios.get(
      `https://www.screwfix.com/product/api/${id}`
    );
    return {
      props: { ...data },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
