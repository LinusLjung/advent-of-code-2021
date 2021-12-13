import { Dot } from './types';

function getBoundary(dots: Dot[]): [number, number] {
  return dots.reduce(
    (acc, curr) => {
      const newAcc: Dot = [...acc];

      curr.forEach((value, i) => {
        if (value > newAcc[i]) {
          newAcc[i] = value;
        }
      });

      return newAcc;
    },
    [0, 0]
  );
}

export default getBoundary;
