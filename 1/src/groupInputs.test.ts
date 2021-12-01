import groupInputs from './groupInputs';

describe('groupInputs()', () => {
  it('should group the inputs in groups of 3', () => {
    expect(groupInputs([])).toEqual([]);

    expect(groupInputs([1, 2])).toEqual([]);

    expect(groupInputs([1, 2, 3])).toEqual([6]);

    expect(groupInputs([1, 2, 3, 4])).toEqual([6, 9]);

    expect(
      groupInputs([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
    ).toEqual([607, 618, 618, 617, 647, 716, 769, 792]);
  });
});
