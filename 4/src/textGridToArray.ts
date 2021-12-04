function textGridToArray(text: string) {
  return text.split('\n').map((row) =>
    row
      .split(' ')
      .filter((cell) => cell)
      .map((cell) => Number(cell))
  );
}

export default textGridToArray;
