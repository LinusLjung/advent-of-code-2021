import getLines from './getLines';
import mapPoint from './mapPoint';

function calculateNumberOfOverlaps(input: string): number {
  const lines = getLines(input);
  const mappedPoints = lines.map(mapPoint);

  const countedPoints = mappedPoints.reduce<{ [x: string]: number }>(
    (acc, points) => {
      points.forEach(({ x, y }) => {
        const key = `${x},${y}`;

        if (acc[key] != null) {
          acc[key]++;
        } else {
          acc[key] = 1;
        }
      });

      return acc;
    },
    {}
  );

  return Object.values(countedPoints).reduce((acc, count) => {
    if (count > 1) {
      acc++;
    }

    return acc;
  }, 0);
}

export default calculateNumberOfOverlaps;
