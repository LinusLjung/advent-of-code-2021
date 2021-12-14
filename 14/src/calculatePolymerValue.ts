function calculatePolymerValue(polymerTemplate: string): number {
  const counter: { [x: string]: number } = {};

  polymerTemplate.split('').forEach((character) => {
    if (counter[character]) {
      counter[character] = counter[character] + 1;
    } else {
      counter[character] = 1;
    }
  });

  const values = Object.values(counter);

  return Math.max(...values) - Math.min(...values);
}

export default calculatePolymerValue;
