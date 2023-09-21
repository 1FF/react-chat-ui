/* eslint-env jest */
import { isNull } from '../../../src/utils';

describe('utils', () => {
  it('isNull returns true for null', () => {
    const result = isNull(null);
    expect(result).toBe(true);
  });

  it('isNull returns false for undefined', () => {
    const result = isNull(undefined);
    expect(result).toBe(false);
  });

  it('isNull returns false for 0', () => {
    const result = isNull(0);
    expect(result).toBe(false);
  });
});