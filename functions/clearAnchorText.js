const clearAnchorText = (content, deleteText, insertText) => {
  const pattern = new RegExp(deleteText, 'ig');
  return content.replace(pattern, insertText);
};

module.exports = { clearAnchorText };