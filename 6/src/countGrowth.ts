import goToNextDay from './goToNextDay';

function createInitialFishArray(input: string): number[] {
  return input.split(',').map(Number);
}

function countGrowth(input: string, numberOfDays: number) {
  let fish = createInitialFishArray(input);

  for (let i = 0; i < numberOfDays; i++) {
    fish = goToNextDay(fish);
  }

  return fish.length;
}

export default countGrowth;
