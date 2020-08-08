const { minify } = require('html-minifier');
const { minifyOption } = require('../configs/minify.config');

const minifySource = (data) => minify(data, minifyOption);

module.exports = { minifySource };