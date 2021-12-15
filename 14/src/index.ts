import calculatePolymerValue from './calculatePolymerValue';
import getInput from './getInput';
import runPairInsertions from './runPairInsertions';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const input = getInput();

const { steps } = yargs(hideBin(process.argv)).argv as {
  [x: string]: string;
};

if (!steps) {
  throw new Error('Missing `--steps` argument');
}

console.log(calculatePolymerValue(runPairInsertions(input, Number(steps))));
