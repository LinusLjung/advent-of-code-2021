import { AUTOCOMPLETE_CHARACTER_VALUES } from './consts';
import { Character } from './types';

function calculateAutocompleteScore(code: string): number {
  return (code.split('') as Character[]).reduce((acc, curr) => {
    const score = acc * 5 + AUTOCOMPLETE_CHARACTER_VALUES[curr];

    return score;
  }, 0);
}

export default calculateAutocompleteScore;
