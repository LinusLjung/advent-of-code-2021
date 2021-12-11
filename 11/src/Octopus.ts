import { broadcast, listen } from './broadcaster';

class Octopus {
  constructor(energy: number, position: [number, number]) {
    this.energy = energy;
    this.position = position;

    listen(this.handleBroadcast);
  }

  energy: number;
  position: Position;
  hasFlashed = false;
  flashes = 0;

  preStep() {
    this.hasFlashed = false;
  }

  step() {
    this.increaseEnergy();
  }

  postStep() {
    if (this.hasFlashed) {
      this.energy = 0;
    }
  }

  increaseEnergy() {
    this.energy++;
  }

  handleEnergyIncrease() {
    if (!this.hasFlashed && this.energy > 9) {
      this.flash();
    }
  }

  flash() {
    this.hasFlashed = true;
    this.flashes++;

    this.broadcast();
  }

  broadcast() {
    broadcast(this.position);
  }

  handleBroadcast = ([x, y]: Position) => {
    if (
      (this.position[0] !== x || this.position[1] !== y) &&
      Math.abs(this.position[0] - x) < 2 &&
      Math.abs(this.position[1] - y) < 2
    ) {
      this.increaseEnergy();
      this.handleEnergyIncrease();
    }
  };
}

export default Octopus;
