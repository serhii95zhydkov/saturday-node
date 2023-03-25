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

module.exports = calculate;