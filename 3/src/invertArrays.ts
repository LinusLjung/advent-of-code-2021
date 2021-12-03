function invertArrays<T>(arrays: T[][]): T[][] {
  const invertedArray: T[][] = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (!invertedArray[j]) {
        invertedArray[j] = [];
      }

      invertedArray[j].push(arrays[i][j]);
    }
  }

  return invertedArray;
}

export default invertArrays;
