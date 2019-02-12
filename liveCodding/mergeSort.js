const merge = (left, right) => {
  let sortedArray = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;

  const m = Math.floor(arr.length / 2);

  let left = arr.slice(0, m);
  let right = arr.slice(m, arr.length);

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
};

const q = [496, 370, 58, 51, 163, 419, 456, 430, 294, 395];
mergeSort(q); /*?*/
