import calcRoverStatus from './calcRoverStatus';

describe('calcRoverStatus()', () => {
  test('no moves or turns works correctly (rover stays the same)', () => {
    expect(calcRoverStatus('5 5', '1 2 N', '')).toBe('1 2 N');
    expect(calcRoverStatus('5 5', '5 5 S', '')).toBe('5 5 S');
  });
  test('turning works correctly (no moves)', () => {
    expect(calcRoverStatus('5 5', '1 2 N', 'L')).toBe('1 2 W');
    expect(calcRoverStatus('5 5', '5 5 N', 'RRR')).toBe('5 5 W');
  });
  test('moving works correctly (no turns)', () => {
    expect(calcRoverStatus('5 5', '1 2 N', 'MMM')).toBe('1 5 N');
    expect(calcRoverStatus('6 6', '5 5 N', 'MMMMM')).toBe('5 6 N');
  });
  test('moving and turning works correctly (no limit collisions)', () => {
    expect(calcRoverStatus('5 5', '1 2 N', 'LMLMLMLMM')).toBe('1 3 N');
    expect(calcRoverStatus('5 5', '3 3 E', 'MMRMMRMRRM')).toBe('5 1 E');
    expect(calcRoverStatus('5 5', '2 2 N', 'RRRMM')).toBe('0 2 W');
  });
  test('moving and turning works correctly (limit collisions)', () => {
    expect(calcRoverStatus('5 5', '3 3 E', 'MMMMMMMMMMRMMRMRRM')).toBe('5 1 E');
    expect(calcRoverStatus('5 5', '5 5 N', 'MMMMRRMRM')).toBe('4 4 W');
  });
});
