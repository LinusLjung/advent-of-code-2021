import getLiteralValue from './getLiteralValue';

describe('getLiteralValue()', () => {
  it('should parse the packet and return the value', () => {
    expect(getLiteralValue('110100101111111000101000')).toBe(2021);
  });
});
