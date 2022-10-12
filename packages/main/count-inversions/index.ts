export const countInversions = (arr: number[]) => {
  return mergeSort(arr);
}

const mergeArrays = (arr0: number[], arr1: number[]): [number[], number] => {
  // let i0 = 0;
  // let i1 = 0;

  // let arr0Clone = [...arr0];
  // let arr1Clone = [...arr1];

  let mid = arr0.length;
  let i = 0;
  let j = 0;
  let inversionsCounter = 0;

  let arr: number[] = [];
  while(arr0.length > 0 && arr1.length > 0) {
    if (arr0[0] <= arr1[0]) {
      arr.push(arr0.shift() as number);
      i++;
      // arr0Clone.shift();
      // i0++;
    } else {
      arr.push(arr1.shift() as number);
      j++;
      inversionsCounter += mid - i;
      // arr1Clone.shift();
      // i1++;
    }
  }
  arr = [...arr, ...arr0, ...arr1];
  return [arr, inversionsCounter];
}

const mergeSort = (arr: number[]): [number[], number] => {
  if (arr.length <= 1) {
    return [arr, 0];
  }
  const mid = Math.floor(arr.length / 2);
  const arr0 = arr.slice(0, mid);
  const arr1 = arr.slice(mid, arr.length);

  const arr0Res = mergeSort(arr0);
  const arr1Res = mergeSort(arr1);

  const mergeArraysRes = mergeArrays(arr0Res[0], arr1Res[0]);
  return [mergeArraysRes[0], mergeArraysRes[1] + arr0Res[1] + arr1Res[1]];
}

const arr = [5, 3, 7, 1, 3];
console.log({arr});
const sorted = countInversions(arr);
console.log({sorted});


