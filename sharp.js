/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable function-paren-newline */
/* eslint-disable arrow-parens */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach(image => {
    // Ensure the file is an image by checking the extension
    const ext = path.extname(image).toLowerCase();
    if (['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
      // Resize the image to 800px width with prefix -large.jpg
      sharp(`${target}/${image}`)
        .resize(800)
        .toFile(
          path.resolve(
            __dirname,
            `${destination}/${path.basename(image, ext)}-large${ext}`
          )
        )
        .catch(err => console.error(`Error processing ${image} for large size: ${err}`));

      // Resize the image to 480px width with prefix -small.jpg
      sharp(`${target}/${image}`)
        .resize(480)
        .toFile(
          path.resolve(
            __dirname,
            `${destination}/${path.basename(image, ext)}-small${ext}`
          )
        )
        .catch(err => console.error(`Error processing ${image} for small size: ${err}`));
    }
  });
