function hasOccurrences<T>(input: T, arr: T[], occurrences: number): boolean {
  let count = 0;

  for (let i = 0; i < arr.length && count < occurrences; i++) {
    if (input === arr[i]) {
      count++;
    }
  }

  return count >= occurrences;
}

export default hasOccurrences;
