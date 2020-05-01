// Class
class Calc {
  constructor() {
    this._result = 0;
  }

  add(value) {
    this._result += value;
    return this;
  }
  sub(value) {
    this._result -= value;
    return this;
  }
  mul(value) {
    this._result *= value;
    return this;
  }
  div(value) {
    this._result /= value;
    return this;
  }
  mod(value) {
    this._result %= value;
    return this;
  }
  avg(values = []) {
    const sum = values.reduce((pre, cur) => pre + cur);
    this._result = sum / values.length;
    return this;
  }

  get result() {
    return this._result;
  }
}

//
class CalcEval {
  constructor() {
    this._result = 0;
  }

  calculate(expression) {
    this._result = eval(expression);
  }

  get result() {
    return this._result;
  }
}

//
const calc = new Calc();
calc.add(4).add(5).sub(1).mod(2);

console.log("Result from Class: ", calc.result);

//
const calcEval = new CalcEval();
calcEval.calculate("4+5-1");
calcEval.calculate("8%2");

console.log("Result from ClassEval: ", calcEval.result);
