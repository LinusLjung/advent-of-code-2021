import getMostCommonValues from './getMostCommonValues';
import invertArrays from './invertArrays';
import parseInput from './parseInput';
import { Data } from './types';

export function getGammaBits(measurements: Data) {
  return invertArrays(measurements).map(
    (array) => getMostCommonValues(array)[0]
  );
}

function getGamma(input: string) {
  return parseInt(getGammaBits(parseInput(input)).join(''), 2);
}

export default getGamma;
