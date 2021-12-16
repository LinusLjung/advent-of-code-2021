function createGrid(input: string): number[][] {
  return input.split('\n').map((line) => line.split('').map(Number));
}

export default createGrid;
