import { flipBitsArray } from './flipBits';
import getMostCommonValues from './getMostCommonValues';
import invertArrays from './invertArrays';
import { Data } from './types';

function reduceToSingleValue(measurements: Data, significantBit: 0 | 1) {
  let filteredData = [...measurements];

  while (filteredData.length > 1) {
    for (
      let i = 0;
      i < filteredData[0].length && filteredData.length > 1;
      i++
    ) {
      let mostSignificantValues = invertArrays(filteredData).map((row) => {
        const values = getMostCommonValues(row);

        if (values.length === 2) {
          return 1;
        }

        return values[0];
      });

      if (significantBit === 0) {
        mostSignificantValues = flipBitsArray(mostSignificantValues);
      }

      filteredData = filteredData.filter(
        (row) => row[i] === mostSignificantValues[i]
      );
    }
  }

  return parseInt(filteredData[0].join(''), 2);
}

export default reduceToSingleValue;
