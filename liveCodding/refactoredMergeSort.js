const { splitAt, map, length, min, head, tail } = require("ramda");

const getMedian = x => Math.floor(x / 2);
const splitByHalf = arr => splitAt(arr |> length |> getMedian, arr);

const merge = ([left, right], sorted = []) => {
  const a = head(left);
  const b = head(right);
  return a && b
    ? merge(a <= b ? [tail(left), right] : [left, tail(right)], [
        ...sorted,
        min(a, b)
      ])
    : [...sorted, ...left, ...right];
};

const mergeSort = arr =>
  length(arr) <= 1 ? arr : arr |> splitByHalf |> map(mergeSort) |> merge;

const q = [496, 370, 58, 51, 163, 419, 456, 430, 294, 395];
mergeSort(q); /*?*/
