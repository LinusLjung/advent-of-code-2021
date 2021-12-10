import { Character } from './types';

export const OPENING_CHARACTERS: Character[] = ['(', '[', '{', '<'];
export const CLOSING_CHARACTERS: Character[] = [')', ']', '}', '>'];
export const CORRUPT_CHARACTER_VALUES: Record<Character, number> = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137,
  '(': 0,
  '<': 0,
  '[': 0,
  '{': 0,
};
export const AUTOCOMPLETE_CHARACTER_VALUES: Record<Character, number> = {
  ')': 1,
  ']': 2,
  '}': 3,
  '>': 4,
  '(': 0,
  '<': 0,
  '[': 0,
  '{': 0,
};
