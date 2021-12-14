function insertElement(pair: string, insert: string): string {
  const [a, b] = pair.split('');

  return `${a}${insert}${b}`;
}

export default insertElement;
