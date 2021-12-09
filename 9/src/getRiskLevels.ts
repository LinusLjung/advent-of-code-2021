function getRiskLevel(points: number[]) {
  return points.map((point) => point + 1);
}

export default getRiskLevel;
