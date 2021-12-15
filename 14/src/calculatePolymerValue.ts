import { Counter } from './types';

function calculatePolymerValue(counter: Counter): number {
  const values = Object.values(counter);

  return Math.max(...values) - Math.min(...values);
}

export default calculatePolymerValue;
