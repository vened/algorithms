const getRandomInt = require('./getRandomInt');

const getNumberArray = (arrayLength = 5, numberMax = 100) => {
  const arrayNumbers = [];
  for (var i = 0; i < arrayLength; i++) {
    const randomNumber = getRandomInt(numberMax);
    arrayNumbers.push(randomNumber);
  }
  return arrayNumbers;
};

module.exports = getNumberArray;

