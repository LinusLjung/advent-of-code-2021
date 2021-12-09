import findNumber from './findNumber';

type Key = string[];

function decodeNumbers(key: Key, code: string[]): number {
  const map: { [x: number]: string } = {};

  const one = findNumber(1, key)[0];
  const four = findNumber(4, key)[0];
  const seven = findNumber(7, key)[0];
  const eight = findNumber(8, key)[0];
  const twoThreeFive = findNumber(2, key);
  const three = twoThreeFive.find((num) => {
    return one
      .split('')
      .reduce<boolean>((acc, curr) => (!acc ? acc : num.includes(curr)), true);
  })!;
  const zeroSixNine = findNumber(0, key);
  const six = zeroSixNine.find(
    (num) => num.split('').filter((char) => one.includes(char)).length === 1
  )!;

  map[0] = seven.split('').find((char) => !one.includes(char))!;
  map[5] = one.split('').find((char) => six.includes(char))!;
  map[2] = one.split('').find((char) => char !== map[5])!;
  map[1] = four.split('').find((char) => !three.includes(char))!;
  map[3] = four
    .split('')
    .find((char) => ![map[1], map[2], map[5]].includes(char))!;

  const two = twoThreeFive
    .filter((arr) => arr !== three)
    .find((num) => num.split('').includes(map[2]))!;
  const five = twoThreeFive.filter((arr) => arr !== two && arr !== three)[0];
  const zero = zeroSixNine
    .filter((arr) => arr !== six)
    .find((num) => !num.includes(map[3]))!;
  const nine = zeroSixNine.find((arr) => arr !== zero && arr !== six)!;
  const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

  return parseInt(
    code.reduce(
      (acc, curr) =>
        (acc += numbers.findIndex(
          (num) =>
            num.split('').sort().join('') === curr.split('').sort().join('')
        )),
      ''
    ),
    10
  );
}

export default decodeNumbers;
