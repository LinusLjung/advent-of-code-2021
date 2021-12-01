function countIncreases(inputs: number[]) {
  const data = inputs.slice(1).reduce(({previous, count}, input) => {
    if (input > previous) {
      count++;
    }

    return {
      previous: input,
      count,
    };
  }, {
    previous: inputs[0],
    count: 0,
  });

  return data.count;
}

export default countIncreases;
