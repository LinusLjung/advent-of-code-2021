function getAllLowPoints(points: string[]): number[] {
  return points.reduce<number[]>((acc, row, i, rows) => {
    return [
      ...acc,
      ...row
        .split('')
        .map(Number)
        .reduce<number[]>((acc, point, j) => {
          const adjacentPoints = [
            rows[i - 1]?.[j],
            rows[i][j - 1],
            rows[i][j + 1],
            rows[i + 1]?.[j],
          ]
            .filter((point) => point != null)
            .map(Number);

          const isSmallest = !adjacentPoints.some(
            (adjacentPoint) => adjacentPoint <= point
          );

          if (isSmallest) {
            return [...acc, point];
          }

          return acc;
        }, []),
    ];
  }, []);
}

export default getAllLowPoints;
