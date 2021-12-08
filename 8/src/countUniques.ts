const uniqueLengths = [2, 3, 4, 7];

function countUniques(input: string[]) {
  return input
    .map((input) => input.length)
    .reduce((acc, curr) => {
      if (uniqueLengths.includes(curr)) {
        return acc + 1;
      }

      return acc;
    }, 0);
}

export default countUniques;
