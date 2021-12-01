import countIncreases from './countIncreases';
import groupInputs from './groupInputs';

const fs = require('fs');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const { input: inputPath } = yargs(hideBin(process.argv)).argv;

if (!inputPath) {
  throw new Error('Missing `--input` argument');
}

const file: string = fs.readFileSync(inputPath, 'utf8');
const inputs = file.split('\n').map((text) => Number(text));

console.log(`Count of increases: ${countIncreases(inputs)}`);
console.log(
  `Count of increases in three: ${countIncreases(groupInputs(inputs))}`
);
