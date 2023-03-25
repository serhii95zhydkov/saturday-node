class CalcClass {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }

  init = () => {
    return this.calculate(this.operator, this.numbers) 
  
}
    calculate = (op, numbersArray) => {
  if (op === "sum") {
    return numbersArray.reduce((acc, num) => acc + num, 0);
  }

  if (op === "sub") {
    return numbersArray.reduce((acc, num) => acc - num);
  }

  if (op === "mult") {
    return numbersArray.reduce((acc, num) => acc * num);
  }

  if (op === "div") {
    return numbersArray.reduce((acc, num) => acc / num);
  }
  return "Unknown operation type!";
};
}

const [operator, ...data] = process.argv.splice(2);
const numbers = data.map((number) => Number(number));

module.exports = new CalcClass(operator, numbers);