import insertElement from './insertElement';

describe('insertElement()', () => {
  it('should insert an element in a pair', () => {
    expect(insertElement('AB', 'C')).toBe('ACB');
  });
});
