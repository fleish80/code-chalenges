const matrixWSM = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

const runWSW = (matrix: string[][], world: string): boolean => {
  for(let row = 0; row <= matrix.length; row++) {
    for (let column = 0; column <= matrix[0].length; column++) {
      if (exploreWSW(matrix, row, column, world, 0, new Set())) {
        return true;
      }
    }
  }
  return false;
}

const exploreWSW =
  (matrix: string[][], row: number, column: number, world: string, worldIndex: number, visited: Set<string>): boolean => {

    if (worldIndex === world.length) {
      return true;
    }
    if (row < 0 || row >= matrix.length ) {
      return false;
    }
    if (column < 0 || column >= matrix[0].length) {
      return false;
    }
    if (matrix[row][column] !== world[worldIndex]) {
      return false;
    }
    const entryVisited = `${row},${column}`;
    if (visited.has(entryVisited)) {
      return false;
    }
    visited.add(entryVisited);
    const right = exploreWSW(matrix, row, column+1, world, worldIndex + 1, new Set(visited));
    const left = exploreWSW(matrix, row, column-1, world, worldIndex + 1, new Set(visited));
    const top = exploreWSW(matrix, row - 1, column, world, worldIndex + 1, new Set(visited));
    const bottom = exploreWSW(matrix, row + 1, column, world, worldIndex + 1, new Set(visited));

    return right || left || top || bottom;

  }

console.log(runWSW(matrixWSM, 'BCCED'));
console.log(runWSW(matrixWSM, 'BCSED'));
console.log(runWSW(matrixWSM, 'CCEDFBASA'));
console.log(runWSW(matrixWSM, 'CCEDFBASAB'));
