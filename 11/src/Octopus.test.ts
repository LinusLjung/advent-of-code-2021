import { clearAll } from './broadcaster';
import getOctopuses from './getOctopuses';
import Octopus from './Octopus';

describe('Octopus', () => {
  beforeEach(() => {
    clearAll();
  });

  it('should flash and reset when it reaches its cap', () => {
    const octopus = new Octopus(9, [0, 0]);

    const broadcastSpy = jest.spyOn(octopus, 'broadcast');

    octopus.preStep();
    octopus.step();
    octopus.handleEnergyIncrease();
    octopus.postStep();

    expect(octopus.energy).toBe(0);
    expect(octopus.hasFlashed).toBe(true);
    expect(broadcastSpy).toBeCalledTimes(1);
  });

  it('should only flash once per step', () => {
    const octopus = new Octopus(9, [0, 0]);

    octopus.hasFlashed = true;
    octopus.increaseEnergy();

    expect(octopus.energy).toBe(10);

    octopus.preStep();
    octopus.step();
    octopus.handleEnergyIncrease();
    octopus.postStep();

    expect(octopus.energy).toBe(0);
  });

  it('should handle broadcasts', () => {
    const octopuses = getOctopuses(`11111
19991
19191
19991
11111`);

    octopuses.forEach((octopus) => octopus.preStep());
    octopuses.forEach((octopus) => octopus.step());
    octopuses.forEach((octopus) => octopus.handleEnergyIncrease());
    octopuses.forEach((octopus) => octopus.postStep());

    expect(octopuses[12].energy).toBe(0);
    expect(octopuses[12].flashes).toBe(1);
  });
});
