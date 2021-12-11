import Octopus from './Octopus';

function getOctopuses(input: string): Octopus[] {
  return input.split('\n').reduce<Octopus[]>(
    (acc, line, i) => [
      ...acc,
      ...line
        .split('')
        .map(Number)
        .map((energy, j) => new Octopus(energy, [i, j])),
    ],
    []
  );
}

export default getOctopuses;
