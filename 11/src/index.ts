import { clearAll } from './broadcaster';
import getInput from './getInput';
import getOctopuses from './getOctopuses';

let octopuses = getOctopuses(getInput());
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

clearAll();

octopuses = getOctopuses(getInput());

let i = 0;
for (; octopuses.some((octopus) => !octopus.hasFlashed); i++) {
  octopuses.forEach((octopus) => octopus.preStep());
  octopuses.forEach((octopus) => octopus.step());
  octopuses.forEach((octopus) => octopus.handleEnergyIncrease());
  octopuses.forEach((octopus) => octopus.postStep());
}

console.log(`First synchronized step: ${i}`);
