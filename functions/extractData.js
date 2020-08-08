const cheerio = require('cheerio');
const { clearAnchorText } = require('./clearAnchorText');

function extractData(data, { selectTag, ignoreTag, deleteText, insertText }) {
  const $ = cheerio.load(data);
  const content = $(selectTag);
  content.find(ignoreTag).remove();
  return clearAnchorText(content.text(), deleteText, insertText);
}

module.exports = { extractData };
