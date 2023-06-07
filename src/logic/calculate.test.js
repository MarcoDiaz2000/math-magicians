import calculate from './calculate';

describe('calculate functions', () => {
  it('Clears all fields when the "AC" button is pressed', () => {
    const obj = {
      total: 2,
      next: 1,
      operation: '+',
    };
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('Sets "next" to "0" when no other values are set and "0" button is pressed', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '0')).toEqual({
      total: null,
      next: '0',
    });
  });

  it('Sets "next" to "5" when no other values are set and "5" button is pressed', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '5')).toEqual({
      total: null,
      next: '5',
    });
  });

  it('Sets "next" to "9" when no other values are set and "9" button is pressed', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '9')).toEqual({
      total: null,
      next: '9',
    });
  });

  it('appends the number to next when an operation is already set', () => {
    const obj = {
      total: null,
      next: '1',
      operation: '+',
    };
    expect(calculate(obj, '2')).toEqual({
      total: null,
      next: '12',
      operation: '+',
    });
  });

  it('sets next to the number when no next or operation is set', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(obj, '2')).toEqual({
      total: null,
      next: '2',
    });
  });

  it('appends a decimal to next when next is already set and does not contain a decimal', () => {
    const obj = {
      total: null,
      next: '1',
      operation: null,
    };
    expect(calculate(obj, '.')).toEqual({
      total: null,
      next: '1.',
      operation: null,
    });
  });

  it('performs the operation by performing an addition', () => {
    const obj = {
      total: '1',
      next: '2',
      operation: '+',
    };
    expect(calculate(obj, '=')).toEqual({
      total: '3',
      next: null,
      operation: null,
    });
  });

  it('performs the operation by performing a subtraction', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '-',
    };
    expect(calculate(obj, '=')).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  it('performs the operation by performing a multiplication', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: 'x',
    };
    expect(calculate(obj, '=')).toEqual({
      total: '50',
      next: null,
      operation: null,
    });
  });

  it('performs the operation by performing a division', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '÷',
    };
    expect(calculate(obj, '=')).toEqual({
      total: '2',
      next: null,
      operation: null,
    });
  });

  it('switch to negative', () => {
    const obj = {
      total: null,
      next: '2',
      operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '-2',
      operation: null,
    });
  });

  it('switch to positive', () => {
    const obj = {
      total: null,
      next: '-2',
      operation: null,
    };
    expect(calculate(obj, '+/-')).toEqual({
      total: null,
      next: '2',
      operation: null,
    });
  });
});
