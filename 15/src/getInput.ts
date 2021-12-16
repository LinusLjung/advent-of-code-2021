import eol from 'eol';
import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

function getInput(): [string, number] {
  const {
    _: [inputPath, times],
  } = yargs(hideBin(process.argv)).argv as {
    _: Array<string | number>;
  };

  if (!inputPath) {
    throw new Error('Missing `input` argument');
  }

  if (!times) {
    throw new Error('Missing `times` argument');
  }

  return [eol.lf(fs.readFileSync(inputPath, 'utf8')), Number(times)];
}

export default getInput;
