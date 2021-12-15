import eol from 'eol';
import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

function getInput() {
  const {
    _: [inputPath],
  } = yargs(hideBin(process.argv)).argv as {
    _: Array<string | number>;
  };

  if (!inputPath) {
    throw new Error('Missing `--input` argument');
  }

  return eol.lf(fs.readFileSync(inputPath, 'utf8'));
}

export default getInput;
