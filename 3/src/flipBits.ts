export function flipBitsArray(bits: number[]) {
  return bits.map((bit) => 1 - bit);
}

function flipBits(value: number) {
  return parseInt(
    value
      .toString(2)
      .split('')
      .map((bit) => 1 - Number(bit))
      .join(''),
    2
  );
}

export default flipBits;
