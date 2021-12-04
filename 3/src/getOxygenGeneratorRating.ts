import reduceToSingleValue from './reduceToSingleValue';
import { Data } from './types';

function getOxygenGeneratorRating(measurements: Data) {
  return reduceToSingleValue(measurements, 1);
}

export default getOxygenGeneratorRating;
