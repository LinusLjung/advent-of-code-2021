import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

function getInput() {
  const { input: inputPath } = yargs(hideBin(process.argv)).argv as {
    [x: string]: string;
  };

  if (!inputPath) {
    throw new Error('Missing `--input` argument');
  }

  return fs.readFileSync(inputPath, 'utf8');
}

export default getInput;
