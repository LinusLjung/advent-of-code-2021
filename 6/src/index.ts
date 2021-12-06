import getInput from '../../shared/getInput';
import countGrowth from './countGrowth';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const { days } = yargs(hideBin(process.argv)).argv as {
  [x: string]: string;
};

if (!days) {
  throw new Error('Missing `--days` argument');
}

const numberOfDays = Number(days);

if (isNaN(numberOfDays)) {
  throw new Error('Invalid `--days` format. Expected number');
}

const input = getInput();

console.log(countGrowth(input, numberOfDays));
