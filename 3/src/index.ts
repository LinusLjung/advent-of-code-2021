import fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import getCO2ScrubberRating from './getCO2ScrubberRating';
import getEpsilonFromGamma from './getEpsilon';
import getGamma from './getGamma';
import getOxygenGeneratorRating from './getOxygenGeneratorRating';
import parseInput from './parseInput';

const { input: inputPath } = yargs(hideBin(process.argv)).argv as {
  [x: string]: string;
};

if (!inputPath) {
  throw new Error('Missing `--input` argument');
}

const file: string = fs.readFileSync(inputPath, 'utf8');
const data = parseInput(file);

const gamma = getGamma(data);
const epsilon = getEpsilonFromGamma(gamma);
const oxygenGeneratorRating = getOxygenGeneratorRating(data);
const co2ScrubberRating = getCO2ScrubberRating(data);

console.log(`Power consumption: ${gamma * epsilon}`);
console.log(
  `Oxygen generator rating: ${oxygenGeneratorRating * co2ScrubberRating}`
);
