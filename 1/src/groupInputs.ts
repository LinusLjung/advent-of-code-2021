function groupInputs(input: number[]) {
  return input.reduce<number[]>((acc, curr, i, array) => {
    if (i < 2) {
      return acc;
    }

    return [
      ...acc,
      array.slice(i - 2, i + 1).reduce((acc, curr) => acc + curr),
    ];
  }, []);
}

export default groupInputs;
