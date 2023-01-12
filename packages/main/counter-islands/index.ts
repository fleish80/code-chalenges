// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");


function run(matrix: string[][]): number {

  if (!matrix || matrix.length === 0) {
    return 0;
  }

  let counter = 0;
  let set = new Set<string>();

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[0].length; column++) {
      if (explore(matrix, row, column, set)) {
        counter++;
      }
    }
  }
  return counter;

}

function explore(matrix: string[][], row:number, column: number, visited: Set<string>): boolean {

  if (row < 0 || row === matrix.length) {
    return false;
  }

  if (column < 0 || column === matrix[0].length) {
    return false;
  }

  if (matrix[row][column] === 'E') {
    return false;
  }

  const setKey = `${row},${column}`;

  if (visited.has(setKey)) {
    return false;
  }

  visited.add(setKey);

  explore(matrix, row+1, column, visited)
  explore(matrix, row-1, column, visited)
  explore(matrix, row, column+1, visited)
  explore(matrix, row, column-1, visited)

  return true;
}


const matrix0: string[][] = [
  ['S', 'S', 'S'],
  ['E', 'E', 'E'],
  ['E', 'S', 'E']
]

const matrix1: string[][] = []

console.log(run(matrix0));
console.log(run(matrix1));
