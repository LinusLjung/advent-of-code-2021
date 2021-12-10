import { Character } from './types';

export const OPENING_CHARACTERS: Character[] = ['(', '[', '{', '<'];
export const CLOSING_CHARACTERS: Character[] = [')', ']', '}', '>'];
export const CHARACTER_VALUES: Record<Character, number> = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
  '(': 0,
  '<': 0,
  '[': 0,
  '{': 0,
};
