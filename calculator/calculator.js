const pi = 3.14159265359;

const Calculator = {
  // Math functions
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return Math.abs(a - b);
  },
  multiply: function (a, b) {
    if (b === 0) throw new Error("Multiplier cannot be zero.");
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) throw new Error("Division by zero is not allowed.");
    return a / b;
  },
  power: function (a, b) {
    return Math.pow(a, b);
  },
  sqrt: function (a) {
    if (a < 0) {
      return `${Math.sqrt(-a)}i`; // imaginary number
    } else {
      return Math.sqrt(a);
    }
  },
  factorial: function (n) {
    if (n < 0) throw new Error("Factorial of a negative number is undefined.");
    let result = 1;
    while (n > 0) {
      result *= n;
      n--;
    }
    return result;
  },
  percentage: function (part, total) {
    if (total === 0) throw new Error("Total cannot be zero.");
    return (part / total) * 100;
  },
  round: function (n) {
    if (n === 0) throw new Error("Number cannot be zero.");
    return Math.round(n);
  },
  absolute: function (n) {
    if (n === 0) throw new Error("Number cannot be zero.");
    return Math.abs(n);
  },

  // Physics formulas
  speed: function (distance, time) {
    if (time === 0) throw new Error("Time cannot be zero.");
    return distance / time;
  },
  time: function (speed, distance) {
    if (speed === 0) throw new Error("Speed cannot be zero.");
    return distance / speed;
  },
  distance: function (speed, time) {
    if (time === 0) throw new Error("Time cannot be zero.");
    return speed * time;
  },
  period: function (T) {
    if (T <= 0) throw new Error("Period must be greater than zero.");
    return 1 / T;
  },
  angularFrequency: function (frequency) {
    if (frequency <= 0) throw new Error("Frequency must be greater than zero.");
    return 2 * pi * frequency;
  },

  // DC electricity (Ohm's law)
  resistance: function (voltage, current) {
    if (current <= 0) throw new Error("Current must be greater than zero.");
    return voltage / current;
  },
  voltage: function (current, resistance) {
    if (resistance <= 0) throw new Error("Resistance must be greater than zero.");
    return current * resistance;
  },
  current: function (voltage, resistance) {
    if (resistance <= 0) throw new Error("Resistance must be greater than zero.");
    return voltage / resistance;
  }
};

module.exports= Calculator;
