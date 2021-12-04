import reduceToSingleValue from './reduceToSingleValue';
import { Data } from './types';

function getCO2ScrubberRating(measurements: Data) {
  return reduceToSingleValue(measurements, 0);
}

export default getCO2ScrubberRating;
