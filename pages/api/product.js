import axios from 'axios';

const PATH =
  'http://ae1-gbrsf-mpi-01a.ondc.screwfix.local:10311/api/catalog/product/index.jsp?productId=';

const productAPI = async (req, res) => {
  if (req.query.sku) {
    const {
      data: { product },
    } = await axios.get(`${PATH}${req.query.sku}`);

    res.status(200).json(product);
  } else {
    res.status(500);
  }
};

export const config = {};

export default productAPI;
