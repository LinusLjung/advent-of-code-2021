import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import getEpsilonFromGamma from './getEpsilon';
import getGamma from './getGamma';
import parseInput from './parseInput';

const { input: inputPath } = yargs(hideBin(process.argv)).argv as {
  [x: string]: string;
};

if (!inputPath) {
  throw new Error('Missing `--input` argument');
}

const file: string = fs.readFileSync(inputPath, 'utf8');
const data = parseInput(file);

const gamma = getGamma(file);
const epsilon = getEpsilonFromGamma(gamma);
console.log(gamma * epsilon);
