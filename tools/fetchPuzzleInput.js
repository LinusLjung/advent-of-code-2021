const fs = require('fs');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const path = require('path');

const { session: sessionPath, day, out } = yargs(hideBin(process.argv)).argv;

if (!sessionPath) {
  throw new Error('Missing `--session` argument');
}

if (!day) {
  throw new Error('Missing `--day` argument');
}

if (!out) {
  throw new Error('Missing `--out` argument');
}

const session = fs.readFileSync(path.join(__dirname, sessionPath));

import('node-fetch').then((fetchModule) => {
  const headers = new fetchModule.Headers();

  headers.append('cookie', `session=${session}`);

  return fetchModule
    .default(`https://adventofcode.com/2021/day/${day}/input`, {
      headers,
    })
    .then((response) => response.text())
    .then((input) => {
      fs.writeFileSync(out, input);
    });
});
