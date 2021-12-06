import { FishCount } from './types';

const INITIAL_TIMER = 8;
const RESET_TIMER = 6;

function goToNextDay(
  fish: FishCount,
  initialTimer = INITIAL_TIMER,
  resetTimer = RESET_TIMER
) {
  let numberOfNewFish = 0;

  const newCount: FishCount = {};

  Object.entries(fish).forEach(([timer, count]) => {
    let newTimer = Number(timer) - 1;

    if (newTimer < 0) {
      newTimer = resetTimer;
      numberOfNewFish += count;
    }

    newCount[newTimer] = newCount[newTimer] || 0;
    newCount[newTimer] += count;
  });

  if (numberOfNewFish) {
    newCount[initialTimer] = numberOfNewFish;
  }

  return newCount;
}

export default goToNextDay;
