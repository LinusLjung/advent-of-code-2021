import getPowerConsumption from './getPowerConsumption';

describe('getPowerConsumption', () => {
  it.each([
    [11, 66],
    [4, 10],
    [3, 6],
    [5, 15],
    [1, 1],
    [0, 0],
  ])(
    'should calculate the power consumption of a moved distance',
    (input, expected) => {
      expect(getPowerConsumption(input)).toBe(expected);
    }
  );
});
