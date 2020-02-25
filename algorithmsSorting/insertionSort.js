/***
 * сортировка вставками
 ***/


function insertionSort(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    const sourceArrayElement = sourceArray[i];
    for (let s = i; s > 0; s--) {
      if (sourceArray[s - 1] > sourceArray[s]) {
        sourceArray[s] = sourceArray[s - 1];
        sourceArray[s - 1] = sourceArrayElement;
      } else {
        break;
      }
    }
  }

  return sourceArray;
}

module.exports = insertionSort;
