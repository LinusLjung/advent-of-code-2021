import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import calculatePosition from './calculatePosition';
import parseInput from './parseInput';

const { input: inputPath } = yargs(hideBin(process.argv)).argv as {
  [x: string]: string;
};

if (!inputPath) {
  throw new Error('Missing `--input` argument');
}

const file: string = fs.readFileSync(inputPath, 'utf8');

const instructions = parseInput(file);
const position = calculatePosition(instructions);

console.log(position.depth * position.horizontal);
