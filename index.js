const { performance } = require('perf_hooks');
const getNumberArray = require('./lib/getNumberArray');
const sortingByBubble = require('./algorithmsSorting/sortingByBubble');
const quickSort = require('./algorithmsSorting/quickSort');
const insertionSort = require('./algorithmsSorting/insertionSort');

const sourceArray = getNumberArray(1000000, 999999999999999999999999999);

console.log('сортировка встроенная');
const t01 = performance.now();
const sourceArraySort = sourceArray.sort(function compareNumbers(a, b) {
  return a - b;
});
const t02 = performance.now();
const timeMy2 = t02 - t01;
// console.log(sourceArraySort);
console.log(`${timeMy2} ms`);
console.log('');

console.log('моя сортировка quickSort');
const tQuickSortStart = performance.now();
const sortedArrayQuickSort = quickSort(sourceArray, function (a, b) { return a < b; });
const tQuickSortEnd = performance.now();
const tQuickSort = tQuickSortEnd - tQuickSortStart;
console.log(`${tQuickSort} ms`);
console.log(`встроенная сортировка быстрее сортировки quickSort в`);
console.log(`${tQuickSort / timeMy2} раз`);
console.log('');

console.log('моя сортировка insertionSort');
const tInsertionSortStart = performance.now();
const insertionSortArray = insertionSort(sourceArray);
const tInsertionSortEnd = performance.now();
const tInsertionSort = tInsertionSortEnd - tInsertionSortStart;
// console.log(insertionSortArray);
console.log(`${tInsertionSort} ms`);
console.log(`встроенная сортировка быстрее сортировки insertionSort в`);
console.log(`${tInsertionSort / timeMy2} раз`);
console.log('');


console.log('моя сортировка пузырьком');
const t0 = performance.now();
const sortedArray = sortingByBubble(sourceArray);
const t1 = performance.now();
const timeMy = t1 - t0;
console.log(`${timeMy} ms`);
console.log(`встроенная сортировка быстрее сортировки пузырьком в`);
console.log(`${timeMy / timeMy2} раз`);
console.log('');
