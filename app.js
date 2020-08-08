/**
 * getHtml => extractData => createContent => sendMail
 */
const cron = require('node-cron');

const { sendMail } = require('./functions/sendMail');
const { getHtmlWithoutApi } = require('./functions/getHtmlWithoutApi');
const { extractData } = require('./functions/extractData');
const { createContent } = require('./functions/createContent');
const { blogKimChi } = require('./data/blogkimchi');

const timer = blogKimChi.entryPoint.length;

let counter = 0;

async function main(source) {
  const { url, entryPoint } = source;
  const resHtml = await getHtmlWithoutApi(`${url}/${entryPoint[counter]}`);
  const data = extractData(resHtml, { ...source });
  const { title, content } = createContent(data);
  if (title && content) {
    sendMail(title, content);
  }
  counter++;
}
const task = cron.schedule('* * * * *', () => {
  if (counter < timer) {
    main(blogKimChi);
  } else {
    console.log('Completed to cron website', counter);
    task.destroy();
  }
});

task.start();

// const task = cron.schedule('*/1 * * * *', () => {
//   main(blogKimChi);
// });

// task.start();
