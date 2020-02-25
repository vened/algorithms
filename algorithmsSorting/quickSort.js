/***
 * быстрая сортировка
 * http://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort#JavaScript
 * */


function quickSort(array, less) {

  function swap(i, j) {
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
  }

  function quicksort(left, right) {

    if (left < right) {
      const pivot = array[left + Math.floor((right - left) / 2)];
      let left_new = left;
      let right_new = right;

      do {
        while (less(array[left_new], pivot)) {
          left_new += 1;
        }
        while (less(pivot, array[right_new])) {
          right_new -= 1;
        }
        if (left_new <= right_new) {
          swap(left_new, right_new);
          left_new += 1;
          right_new -= 1;
        }
      } while (left_new <= right_new);

      quicksort(left, right_new);
      quicksort(left_new, right);

    }
  }

  quicksort(0, array.length - 1);

  return array;
}

module.exports = quickSort;
