const INITIAL_TIMER = 8;
const RESET_TIMER = 6;

function goToNextDay(
  fish: number[],
  initialTimer = INITIAL_TIMER,
  resetTimer = RESET_TIMER
) {
  let numberOfNewFish = 0;

  const newFish = fish.map((fish) => {
    let newTimer = fish - 1;

    if (newTimer < 0) {
      newTimer = resetTimer;
      numberOfNewFish++;
    }

    return newTimer;
  });

  return newFish.concat(Array(numberOfNewFish).fill(initialTimer));
}

export default goToNextDay;
