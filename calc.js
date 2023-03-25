//node calc.js sum 3 5 7
//node calc.js sub 9 3 3
//node calc.js mult 3 3 3
//node calc.js div 12 2 2

const [operator, ...data] = process.argv.splice(2);
const numbers = data.map((number) => Number(number));

const calculate = (op, numbersArray) => {
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

console.log(calculate(operator, numbers));
