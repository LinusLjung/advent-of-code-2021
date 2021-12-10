import { CLOSING_CHARACTERS, OPENING_CHARACTERS } from './consts';
import { Character } from './types';

function getCorruptCharacter(input: string): Character | void {
  const expectedClosings: Character[] = [];

  return (input.split('') as Character[]).find((character) => {
    const openingIndex = OPENING_CHARACTERS.indexOf(character);

    if (openingIndex === -1) {
      return character !== expectedClosings.pop();
    }

    expectedClosings.push(CLOSING_CHARACTERS[openingIndex]);

    return false;
  });
}

export default getCorruptCharacter;
