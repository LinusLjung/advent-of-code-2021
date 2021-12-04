import getMostCommonValues from './getMostCommonValues';
import invertArrays from './invertArrays';
import { Data } from './types';

export function getGammaBits(measurements: Data) {
  return invertArrays(measurements).map(
    (array) => getMostCommonValues(array)[0]
  );
}

function getGamma(measurements: Data) {
  return parseInt(getGammaBits(measurements).join(''), 2);
}

export default getGamma;
