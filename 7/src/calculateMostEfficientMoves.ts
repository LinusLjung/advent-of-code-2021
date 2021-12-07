function calculateMostEfficientMoves(positions: number[]) {
  const middleIndex = Math.round(positions.length / 2);
  const sortedPositions = positions.sort((a, b) => a - b);
  const distinctPositions = positions.reduce<number[]>((acc, curr) => {
    if (acc.includes(curr)) {
      return acc;
    }

    acc.push(curr);

    return acc;
  }, []);
  const middleValue = sortedPositions[middleIndex];
  const distinctMiddleIndex = distinctPositions.indexOf(middleValue);
  const calculationOrder = [];

  for (
    let i = distinctMiddleIndex, j = distinctMiddleIndex + 1;
    i >= 0 && j < distinctPositions.length;
    i--, j++
  ) {
    if (distinctPositions[i] != null) {
      calculationOrder.push(distinctPositions[i]);
    }

    if (distinctPositions[j] != null) {
      calculationOrder.push(distinctPositions[j]);
    }
  }

  let lowestPowerConsumption: number | null = null;

  for (let i = 0; i < calculationOrder.length; i++) {
    let currentPowerConsumption = 0;

    for (let j = 0; j < positions.length; j++) {
      if (
        lowestPowerConsumption != null &&
        currentPowerConsumption > lowestPowerConsumption
      ) {
        break;
      }

      currentPowerConsumption += Math.abs(positions[j] - calculationOrder[i]);
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
