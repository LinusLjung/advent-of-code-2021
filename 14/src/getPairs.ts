function getPairs(text: string): string[] {
  const textArray = text.split('');
  const pairs: string[] = [];

  for (let i = 1; i < textArray.length; i++) {
    pairs.push(`${text[i - 1]}${text[i]}`);
  }

  return pairs;
}

export default getPairs;
