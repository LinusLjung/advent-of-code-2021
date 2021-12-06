import goToNextDay from './goToNextDay';
import { FishCount } from './types';

function createInitialFishCounter(input: string): FishCount {
  return input
    .split(',')
    .map(Number)
    .reduce<{ [x: number]: number }>((acc, curr) => {
      if (acc[curr]) {
        acc[curr]++;
      } else {
        acc[curr] = 1;
      }

      return acc;
    }, {});
}

function countGrowth(input: string, numberOfDays: number) {
  let fish = createInitialFishCounter(input);

  for (let i = 0; i < numberOfDays; i++) {
    fish = goToNextDay(fish);
  }

  return Object.values(fish).reduce((acc, curr) => acc + curr);
}

export default countGrowth;
