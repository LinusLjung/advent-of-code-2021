function joinPairs(pairs: string[]): string {
  return pairs.slice(1).reduce<string>((acc, curr) => {
    return (acc += curr.slice(1));
  }, pairs[0]);
}

export default joinPairs;
