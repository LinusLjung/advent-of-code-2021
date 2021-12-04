function getNumbers(text: string) {
  return text.split(',').map(Number);
}

export default getNumbers;
