const axios = require('axios');

const getHtmlWithoutApi = async (_url) => {
  const res = await axios.get(_url);
  return res.data;
};

module.exports = { getHtmlWithoutApi };