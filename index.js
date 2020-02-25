const { performance } = require('perf_hooks');
const getNumberArray = require('./lib/getNumberArray');
const sortingByBubble = require('./algorithmsSorting/sortingByBubble');
const quickSort = require('./algorithmsSorting/quickSort');

const sourceArray = getNumberArray(10000, 9999999);

console.log('сортировка встроенная');
const t01 = performance.now();
sourceArray.sort(function compareNumbers(a, b) {
  return a - b;
});
const t02 = performance.now();
const timeMy2 = t02 - t01;
console.log(`${timeMy2} ms`);
console.log('');

console.log('моя сортировка quickSort');
const tQuickSortStart = performance.now();
const sortedArrayQuickSort = quickSort(sourceArray, function (a, b) { return a < b; });
const tQuickSortEnd = performance.now();
const tQuickSort = tQuickSortEnd - tQuickSortStart;
console.log(`${tQuickSort} ms`);
console.log(`встроенная сортировка быстрее сортировки quickSort в`);
console.log(`${Math.floor(tQuickSort / timeMy2)} раз`);
console.log('');


console.log('моя сортировка пузырьком');
const t0 = performance.now();
const sortedArray = sortingByBubble(sourceArray);
const t1 = performance.now();
const timeMy = t1 - t0;
console.log(`${timeMy} ms`);
console.log(`встроенная сортировка быстрее сортировки пузырьком в`);
console.log(`${Math.floor(timeMy / timeMy2)} раз`);
console.log('');
