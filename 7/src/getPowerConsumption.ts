function getPowerConsumption(distance: number) {
  return Array.from(Array(distance))
    .map((_, i) => i + 1)
    .reduce((acc, curr) => acc + curr, 0);
}

export default getPowerConsumption;
