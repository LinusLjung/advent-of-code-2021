function stringToNumberArray(string: string): number[] {
  return string.split('').map(Number);
}

export default stringToNumberArray;
