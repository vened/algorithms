const { performance } = require('perf_hooks');
const getNumberArray = require('./lib/getNumberArray');

const sourceArrayMy = getNumberArray(10000, 999999999999999999);

function sortArray(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    for (let j = 0; j < sourceArray.length - 1; j++) {
      const sourceArrayElement = sourceArray[j];
      const sourceArrayTwoElement = sourceArray[j + 1];
      if (sourceArrayElement > sourceArrayTwoElement) {
        sourceArray[j] = sourceArrayTwoElement;
        sourceArray[j + 1] = sourceArrayElement;
      }
    }
  }
  return sourceArray;
}


console.log('моя сортировка пузырьком');
const t0 = performance.now();
const sortedArray = sortArray(sourceArrayMy);
// console.log(sortedArray);
const t1 = performance.now();
const timeMy = t1 - t0;
console.log(`${timeMy} ms`);
console.log('');

console.log('сортировка встроенная');
const t01 = performance.now();
const sortedArray2 = sourceArrayMy.sort(function compareNumbers(a, b) {
  return a - b;
});
// console.log(sortedArray2);
const t02 = performance.now();
const timeMy2 = t02 - t01;
console.log(`${timeMy2} ms`);
console.log('');

console.log(`встроенная сортировка быстрее в`);
console.log(`${Math.floor(timeMy/timeMy2)} раз`);
