function getPaths(from: string, paths: string[][]) {
  return paths
    .filter((path) => path.includes(from))
    .map((path) => (path[0] === from ? path : [...path].reverse()));
}

export default getPaths;
