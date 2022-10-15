enum Directions {
  FORWARD = 0,
  DOWN = 1,
  BACK = 2,
  UP = 3
}

export const printSpiral = (arr: number[][]): void => {

  let directionCounter = 0;


  while (arr.length > 0) {
    if (directionCounter % 4 === Directions.FORWARD) {
      while (arr[0].length > 0) {
        console.log(arr[0].shift());
      }
      arr.shift();
      directionCounter++;
      continue;
    }

    if (directionCounter % 4 === Directions.DOWN) {
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].pop())
        if (arr[i].length === 0) {
          arr.shift();
        }
      }
      directionCounter++;
      continue;
    }

    if (directionCounter % 4 === Directions.BACK) {
      while (arr[arr.length - 1].length > 0) {
        console.log(arr[arr.length - 1].pop());
      }
      arr.pop();
      directionCounter++;
      continue;
    }

    if (directionCounter % 4 === Directions.UP) {
      for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i].shift());
        if (arr[i].length === 0) {
          arr.pop();
        }
      }
      directionCounter++;
      continue;
    }
  }

}


console.log('arr0');
const arr0: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

printSpiral(arr0);

console.log('arr1');
const arr1: number[][] = [
  [1, 2, 3, 4]
];

printSpiral(arr1);

console.log('arr2');
const arr2: number[][] = [
  [1],
  [2],
  [3],
  [4]
];

printSpiral(arr2);

console.log('arr3');
const arr3: number[][] = [];

printSpiral(arr3);

console.log('arr4');
const arr4: number[][] = [
  [1, 5],
  [2, 6],
  [3, 7],
  [4, 8]
];

printSpiral(arr4);

export const printSpiralBetter = (arr: number[][]): void => {
  if (arr.length > 0) {
    let k = 0; // row start
    let m = arr[0].length - 1; // row end
    let l = 0; // column start
    let n = arr.length - 1 // column end
    while (k <= m && l <= n) {

      // Forward
      for (let i = k; i <= m; i++) {
        console.log(arr[l][i]);
      }
      l++;

      // Down
      for (let i = l; i <= n; i++) {
        console.log(arr[i][m]);
      }
      m--;

      // Back
      if (l <= n) {
        for (let i = m; i >= k; i--) {
          console.log(arr[n][i]);
        }
        n--;
      }

      if (k <= m) {
        // Up
        for (let i = n; i >= l; i--) {
          console.log(arr[i][k]);
        }
        k++;
      }


    }
  }
}

console.log('arr0B');
const arr0B: number[][] = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
printSpiralBetter(arr0B);

console.log('arr1B');
const arr1B: number[][] = [
  [1, 2, 3, 4]
];
printSpiralBetter(arr1B);

console.log('arr2B');
const arr2B: number[][] = [
  [1],
  [2],
  [3],
  [4]
];
printSpiralBetter(arr2B);

console.log('arr3B');
const arr3B: number[][] = [];
printSpiralBetter(arr3B);

console.log('arr4B');
const arr4B: number[][] = [
  [1, 5],
  [2, 6],
  [3, 7],
  [4, 8]
];
printSpiralBetter(arr4B);




