#!/usr/bin/env node

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-console */

const { exec } = require('child_process');
const program = require('commander');
const glob = require('glob');
const {
  cyan,
  yellow,
  magenta,
  red,
  green,
  grey
} = require('chalk');
const columnify = require('columnify');
const outdent = require('outdent');

const lernaJSON = require('../lerna.json');

const { log } = console;

function extractVersions() {
  const versions = [];
  lernaJSON.packages.forEach((batch) => {
    const filePaths = glob.sync(`${batch}/package.json`);
    filePaths.forEach((filePath) => {
      const file = require(`../${filePath}`);
      versions.push({
        name: cyan(file.name),
        version: magenta(file.version),
        private: file.private ? red('YES') : green('NO'),
        location: grey(filePath.split('package.json')[0])
      });
    });
  });

  return columnify(
    versions,
    { columnSplitter: '  ' }
  );
}

program
  .version(
    extractVersions(),
    '-v, --version'
  );

program
  .command('versions')
  .alias('version')
  .description('List all package versions inside the library')
  .action(() => log(extractVersions()));

program
  .command('generate <component|doc> <name>')
  .description('Generate components or docs')
  .option('')
  .option('component', 'Generate a component')
  .option('doc', 'Generate a documentation')
  .option('')
  .action((command, name) => {
    if (command === 'component') {
      log(`Component ${name} was generated!`);
    } else if (command === 'docs') {
      log(`Doc ${name} was generated!`);
    } else {
      log(
        outdent`

          There is no such command. Please use the --help flag.

          ${yellow('Examples')}: 
            knack generate component Modal
            knack generate doc Modal

        `
      );
    }
  });


program.parse(process.argv);
