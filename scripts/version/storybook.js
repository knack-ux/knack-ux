
/* eslint-disable */

const fs = require('fs');
const storybookPackage = require('../../storybook/package.json');

fs.writeFile('_STORYBOOK_VERSION', storybookPackage.version, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Version file generated:', storybookPackage.version);
});
