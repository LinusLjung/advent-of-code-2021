import getCorruptCharacter from './getCorruptCharacter';

describe('getCorruptCharacter()', () => {
  it.each([
    ['[({(<(())[]>[[{[]{<()<>>', void 0],
    ['[(()[<>])]({[<{<<[]>>(', void 0],
    ['{([(<{}[<>[]}>{[]{[(<()>', '}'],
    ['(((({<>}<{<{<>}{[]{[]{}', void 0],
    ['[[<[([]))<([[{}[[()]]]', ')'],
    ['[{[{({}]{}}([{[{{{}}([]', ']'],
    ['{<[[]]>}<{[{[{[]{()[[[]', void 0],
    ['[<(<(<(<{}))><([]([]()', ')'],
    ['<{([([[(<>()){}]>(<<{{', '>'],
    ['<{([{{}}[<[[[<>{}]]]>[]]]', void 0],
  ])('should check if the string is code is corrupt', (input, expected) => {
    expect(getCorruptCharacter(input)).toBe(expected);
  });
});
