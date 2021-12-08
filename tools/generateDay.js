const fs = require('fs-extra');
const path = require('path');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const { exec } = require('child_process');

const TEMPLATE_FOLDER = path.resolve(__dirname, '../template');

const { day } = yargs(hideBin(process.argv)).argv;

if (!day) {
  throw new Error('Missing `--day` argument');
}

const folderPath = path.resolve(__dirname, '../', day.toString());

if (fs.existsSync(folderPath)) {
  throw new Error(`Folder with path ${folderPath} already exists`);
}

fs.copy(TEMPLATE_FOLDER, folderPath, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Day ${day} generated`);
});

exec(
  `node ${path.join(
    __dirname,
    './fetchPuzzleInput.js'
  )} --session ../session.txt --day ${day} --out ${path.join(
    folderPath,
    'input.txt'
  )}`,
  console.log
);
