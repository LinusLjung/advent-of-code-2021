function getMostCommonValues(data: number[]): number[] {
  const count = data.reduce<{ [x: number]: number }>((acc, curr) => {
    acc[curr] = acc[curr] || 0;

    return {
      ...acc,
      [curr]: acc[curr] + 1,
    };
  }, {});

  const highestCount = Object.values(count).reduce<number>((acc, curr) => {
    if (curr > acc) {
      return curr;
    }

    return acc;
  }, 0);

  const mostCommonValues = Object.entries(count).reduce<number[]>(
    (acc, [value, count]) => {
      if (count === highestCount) {
        return [...acc, Number(value)];
      }

      return acc;
    },
    []
  );

  return mostCommonValues;
}

export default getMostCommonValues;
