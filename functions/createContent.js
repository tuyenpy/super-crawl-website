const { startContent, endContent } = require('../configs/patternContent');

const createRandom = () => Math.round(Math.random() * 5);

const createContent = (str) => {
  const arrContent = str.split('.');
  const random = createRandom();

  if (arrContent.length >= 5) {
    const title = arrContent[0];
    const header = arrContent[1];
    let content = `<h1>${header}</h1>`;

    for (let i = 1; i < arrContent.length; i++) {
      if (i === random) {
        const element = `<p>${startContent}<strong><b>${arrContent[i]}</b></strong>${endContent}</p>`;
        content += element;
      } else {
        const element = `<p>${startContent}${arrContent[i]}${endContent}</p>`;
        content += element;
      }
    }

    return {
      title,
      content: `<article>${content}</article>`,
    };
  }
  return { title: null, content: null };
};


module.exports = { createContent };
