export const printDistance = (tree: BstNode, k: number): void => {
  if (tree !== null) {
    const arr: [BstNode, number][] = [[tree, 0]];
    while (arr.length > 0) {
      const top = arr.shift() as [BstNode, number];
      const node = top[0];
      const distance = top[1];
      if (distance === k) {
        console.log(node.value);
      } else {
        if (node.left) {
          arr.push([node.left, distance + 1])
        }
        if (node.right) {
          arr.push([node.right, distance + 1])
        }
      }
    }
  }
}

const tree: BstNode = {
  value: 20,
  left: {
    value: 5,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  },
  right: {
    value: 6,
    left: {
      value: 10,
      left: null,
      right: null
    },
    right: {
      value: 11,
      left: null,
      right: {value: 15, left: null, right: null}
    }
  },
}

console.log('distance = 1');
printDistance(tree, 1);
console.log('distance = 0');
printDistance(tree, 0);
console.log('distance = 2');
printDistance(tree, 2);
console.log('distance = 3');
printDistance(tree, 3);
console.log('distance = 4');
printDistance(tree, 4);



