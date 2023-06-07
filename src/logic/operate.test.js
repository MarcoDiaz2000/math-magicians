import operate from "./operate";

describe('operate functions', () => {
  it('adds', () => {
    expect(operate(2, 1, '+')).toBe('3');
  });

  it('adds', () => {
    expect(operate(5, 5, '+')).toBe('10');
  })

  it('substracts', () => {
    expect(operate(2, 1, '-')).toBe('1');
  });

  it('substracts', () => {
    expect(operate(5, 5, '-')).toBe('0');
  });

  it('multiplies', () => {
    expect(operate(2, 1, 'x')).toBe('2');
  });

  it('multiplies', () => {
    expect(operate(5, 5, 'x')).toBe('25');
  });

  it('divides', () => {
    expect(operate(2, 1, '÷')).toBe('2');
  });

  it('divides', () => {
    expect(operate(5, 5, '÷')).toBe('1');
  });

  it('fails to divide by 0', () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('% finds modulus', () => {
    expect(operate(2, 1, '%')).toBe('0');
  });

  it('% finds modulus', () => {
    expect(operate(5, 5, '%')).toBe('0');
  });

  it('% fails to finds modulus by 0', () => {
    expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('throws error for unknown operation', () => {
    expect(() => operate(2, 1, '?')).toThrow(`Unknown operation '?'`);
  });
});