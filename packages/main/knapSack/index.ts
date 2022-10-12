let knapSackMap = new Map<string, number>();

export const knapSackRecursive = (weight: number, weights: number[], values: number[], length: number): number => {

  let res = knapSackMap.get(`${weight}-${length}`);
  if (res === undefined) {
    if (weight === 0 || length === 0) {
      res = 0;
    } else if (weights[length - 1] > weight) {
      res = knapSackRecursive(weight, weights, values, length - 1);
    } else {

      res = Math.max(
        values[length - 1] + knapSackRecursive(weight - weights[length - 1], weights, values, length - 1),
        knapSackRecursive(weight, weights, values, length - 1));
    }
    knapSackMap.set(`${weight}-${length}`, res);
  }
  return res;

}

knapSackMap = new Map<string, number>();
const values0 = [10, 20, 5, 15];
const weights0 = [6, 10, 3, 5];
console.log('res0', knapSackRecursive(9, weights0, values0, 4));

knapSackMap = new Map<string, number>();
const values1 = [10, 20, 5, 15];
const weights1 = [1, 1, 1, 1];
console.log('res1', knapSackRecursive(5, weights1, values1, 4));


let dynamicArray: number[][];
const createArray = (length: number, weight: number) => {
  dynamicArray = new Array(length + 1);
  for (let i = 0; i <= length; i++) {
    dynamicArray[i] = new Array(weight + 1);
  }
}

export const knapSackDynamic = (weight: number, weights: number[], values: number[], length: number): number => {
  createArray(length, weight);
  for (let i = 0; i <= length; i++) {
    for (let w = 0; w <= weight; w++) {
      if (i === 0 || w === 0) {
        dynamicArray[i][w] = 0
      } else if (weights[i - 1] > w) {
        dynamicArray[i][w] = dynamicArray[i - 1][w];
      } else if (weights[i - 1] <= w) {
        dynamicArray[i][w] = Math.max(values[i - 1] + dynamicArray[i - 1][w - weights[i - 1]], dynamicArray[i - 1][w])
      }
    }
  }
  return dynamicArray[length][weight];
}

const valuesDyn0 = [10, 20, 5, 15];
const weightsDyn0 = [6, 10, 3, 5];
console.log('res0 dynamic', knapSackDynamic(9, weightsDyn0, valuesDyn0, 4));

const valuesDyn1 = [10, 20, 5, 15];
const weightsDyn1 = [1, 1, 1, 1];
console.log('res1 dynamic', knapSackRecursive(3, weightsDyn1, valuesDyn1, 4));
