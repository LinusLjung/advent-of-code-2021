import getInput from './getInput';
import getOctopuses from './getOctopuses';

const octopuses = getOctopuses(getInput());
const steps = 100;

for (let i = 0; i < steps; i++) {
  octopuses.forEach((octopus) => octopus.preStep());
  octopuses.forEach((octopus) => octopus.step());
  octopuses.forEach((octopus) => octopus.handleEnergyIncrease());
  octopuses.forEach((octopus) => octopus.postStep());
}

console.log(
  `Number of flashes after ${steps} steps: `,
  octopuses.reduce((acc, curr) => acc + curr.flashes, 0)
);
