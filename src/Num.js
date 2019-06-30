var math = require("mathjs");
math = math.create(math.all);
math.config({ number: "Fraction" });

class Num {
  constructor(v) {
    this.value = math.fraction(v);
  }
  static isFinite(value) {
    return Number.isFinite(math.number(value));
  }
  static isInteger(value) {
    return math.isInterger(value);
  }
  static isNaN(value) {
    return math.isNaN(value);
  }
  static isSafeInteger(value) {
    return Number.isSafeInteger(math.number(value));
  }
  static parseFloat(value) {
    return math.fraction(Number.parseFloat(value));
  }
  static parseInt(value) {
    return math.fix(value);
  }
  toExponential(fractionDigits) {
    return math.format(this.value, {
      notation: "exponential",
      precision: fractionDigits
    });
  }
  toFixed(precision) {
    return math.format(this.value, { notation: "fixed", precision: precision });
  }
  toLocaleString() {
    return math.number(this.value).toLocaleString();
  }
  toPrecision(precision) {
    return math.format(this.value, precision);
  }
  toString() {
    return math.number(this.value).toString();
  }
  valueOf() {
    return math.string(this.value);
  }
  __add__(b) {
    return math.add(this.value, b);
  }
  __sub__(b) {
    return math.substract(this.value, b);
  }
  __mul__(b) {
    return math.multiply(this.value, b);
  }
  __div__(b) {
    return math.divide(this.value, b);
  }
  __mod__(b) {
    return math.mod(this.value, b);
  }
  __pow__(b) {
    return math.pow(this.value, b);
  }
  __and__(b) {
    return math.and(this.value, b);
  }
  __or__(b) {
    return math.or(this.value, b);
  }
  __xor__(b) {
    return math.xor(this.value, b);
  }
  __lshift__(b) {
    return math.leftShift(this.value, b);
  }
  __rshift__(b) {
    return math.rightArithShift(this.value, b);
  }
  __lt__(b) {
    return math.smaller(this.value, b);
  }
  __gt__(b) {
    return math.larger(this.value, b);
  }
  __le__(b) {
    return math.smallerEq(this.value, b);
  }
  __ge__(b) {
    return math.largerEq(this.value, b);
  }
  __eq__(b) {
    return math.equal(this.value, b);
  }
  __neg__() {
    return math.unaryMinus(this.value);
  }
  __pos__() {
    return math.unaryPlus(this.value);
  }
  __invert__() {
    return math.bitNot(this.value);
  }
}

module.exports={Num,Math:math}