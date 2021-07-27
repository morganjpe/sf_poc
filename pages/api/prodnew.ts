import axios from 'axios';

const path =
  'https://int2.dev.screwfix.com/v2/api/products/SFUK/byIds?Persona=screwfix&Id=';

const prodnew = async (req, res) => {
  try {
    const response = await axios.get(`${path}${req.query.search}`, {
      timeout: 3000,
    });

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: true });
  }
};

export default prodnew;
