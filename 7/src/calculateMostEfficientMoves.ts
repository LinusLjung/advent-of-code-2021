import getPowerConsumption from './getPowerConsumption';

function calculateMostEfficientMoves(positions: number[]) {
  const sortedPositions = [...positions].sort((a, b) => a - b);
  const distinctPositions = sortedPositions.reduce<number[]>((acc, curr) => {
    if (acc.includes(curr)) {
      return acc;
    }

    acc.push(curr);

    return acc;
  }, []);
  const lowestDistinctValue = distinctPositions[0];
  const highestDistinctValue = distinctPositions.at(-1)!;
  const calculationOrder = [];

  for (let i = lowestDistinctValue; i <= highestDistinctValue; i++) {
    calculationOrder.push(i);
  }

  let lowestPowerConsumption: number | null = null;

  for (let i = 0; i < calculationOrder.length; i++) {
    let currentPowerConsumption = 0;

    for (let j = 0; j < sortedPositions.length; j++) {
      if (
        lowestPowerConsumption != null &&
        currentPowerConsumption > lowestPowerConsumption
      ) {
        break;
      }

      currentPowerConsumption += getPowerConsumption(
        Math.abs(sortedPositions[j] - calculationOrder[i])
      );
    }

    if (
      lowestPowerConsumption == null ||
      currentPowerConsumption < lowestPowerConsumption
    ) {
      lowestPowerConsumption = currentPowerConsumption;
    }
  }

  return lowestPowerConsumption || 0;
}

export default calculateMostEfficientMoves;
