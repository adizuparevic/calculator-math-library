const calculator = require('./calculator');

describe('Calculator Math Functions', () => {
  test('adds two numbers', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers (absolute)', () => {
    expect(calculator.subtract(10, 7)).toBe(3);
    expect(calculator.subtract(7, 10)).toBe(3);
  });

  test('throws on multiply by zero', () => {
    expect(() => calculator.multiply(5, 0)).toThrow("Multiplier cannot be zero.");
  });

  test('multiplies two numbers', () => {
    expect(calculator.multiply(4, 5)).toBe(20);
  });

  test('throws on divide by zero', () => {
    expect(() => calculator.divide(10, 0)).toThrow("Division by zero is not allowed.");
  });

  test('divides two numbers', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('calculates power', () => {
    expect(calculator.power(2, 3)).toBe(8);
  });

  test('square root of positive number', () => {
    expect(calculator.sqrt(16)).toBe(4);
  });

  test('square root of negative number returns imaginary', () => {
    expect(calculator.sqrt(-9)).toBe('3i');
  });

  test('throws factorial of negative number', () => {
    expect(() => calculator.factorial(-1)).toThrow("Factorial of a negative number is undefined.");
  });

  test('calculates factorial', () => {
    expect(calculator.factorial(5)).toBe(120);
  });

  test('throws percentage with total zero', () => {
    expect(() => calculator.percentage(5, 0)).toThrow("Total cannot be zero.");
  });

  test('calculates percentage', () => {
    expect(calculator.percentage(50, 200)).toBe(25);
  });

  test('throws round zero', () => {
    expect(() => calculator.round(0)).toThrow("Number cannot be zero.");
  });

  test('rounds number', () => {
    expect(calculator.round(4.6)).toBe(5);
    expect(calculator.round(4.4)).toBe(4);
  });

  test('throws absolute zero', () => {
    expect(() => calculator.absolute(0)).toThrow("Number cannot be zero.");
  });

  test('calculates absolute value', () => {
    expect(calculator.absolute(-5)).toBe(5);
    expect(calculator.absolute(5)).toBe(5);
  });
});

describe('Calculator Physics Functions', () => {
  test('throws speed with zero time', () => {
    expect(() => calculator.speed(100, 0)).toThrow("Time cannot be zero.");
  });

  test('calculates speed', () => {
    expect(calculator.speed(100, 2)).toBe(50);
  });

  test('throws time with zero speed', () => {
    expect(() => calculator.time(0, 100)).toThrow("Speed cannot be zero.");
  });

  test('calculates time', () => {
    expect(calculator.time(50, 100)).toBe(2);
  });

  test('throws distance with zero time', () => {
    expect(() => calculator.distance(50, 0)).toThrow("Time cannot be zero.");
  });

  test('calculates distance', () => {
    expect(calculator.distance(50, 2)).toBe(100);
  });

  test('throws period less or equal zero', () => {
    expect(() => calculator.period(0)).toThrow("Period must be greater than zero.");
    expect(() => calculator.period(-1)).toThrow("Period must be greater than zero.");
  });

  test('calculates period', () => {
    expect(calculator.period(2)).toBeCloseTo(0.5);
  });

  test('throws angularFrequency less or equal zero', () => {
    expect(() => calculator.angularFrequency(0)).toThrow("Frequency must be greater than zero.");
  });

  test('calculates angular frequency', () => {
    expect(calculator.angularFrequency(2)).toBeCloseTo(2 * 3.14159265359 * 2);
  });
});

describe('Calculator Electricity Functions (Ohm\'s Law)', () => {
  test('throws resistance with zero or negative current', () => {
    expect(() => calculator.resistance(10, 0)).toThrow("Current must be greater than zero.");
    expect(() => calculator.resistance(10, -1)).toThrow("Current must be greater than zero.");
  });

  test('calculates resistance', () => {
    expect(calculator.resistance(10, 2)).toBe(5);
  });

  test('throws voltage with zero or negative resistance', () => {
    expect(() => calculator.voltage(2, 0)).toThrow("Resistance must be greater than zero.");
    expect(() => calculator.voltage(2, -1)).toThrow("Resistance must be greater than zero.");
  });

  test('calculates voltage', () => {
    expect(calculator.voltage(2, 5)).toBe(10);
  });

  test('throws current with zero or negative resistance', () => {
    expect(() => calculator.current(10, 0)).toThrow("Resistance must be greater than zero.");
    expect(() => calculator.current(10, -1)).toThrow("Resistance must be greater than zero.");
  });

  test('calculates current', () => {
    expect(calculator.current(10, 5)).toBe(2);
  });
});
