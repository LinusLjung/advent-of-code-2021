import { CLOSING_CHARACTERS, OPENING_CHARACTERS } from './consts';
import { Character } from './types';

function completeCode(input: string): [string, string] {
  const expectedClosings: Character[] = [];

  (input.split('') as Character[]).forEach((character) => {
    const openingIndex = OPENING_CHARACTERS.indexOf(character);

    if (openingIndex === -1) {
      if (character !== expectedClosings.pop()) {
        throw character;
      }
    } else {
      expectedClosings.push(CLOSING_CHARACTERS[openingIndex]);
    }
  });

  return [input, expectedClosings.reverse().join('')];
}

export default completeCode;
