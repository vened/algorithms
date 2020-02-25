/***
 * сортировка методом пузырька
 * http://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort#JavaScript
 * */

function sortingByBubble(sourceArray) {
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

module.exports = sortingByBubble;
