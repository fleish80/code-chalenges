export const arrayTransformation = (arr: number[]) => {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

const arr = [1, 0, 3, 2, 0, 10, 7, 5, 0];
arrayTransformation(arr);
console.log({arr});


