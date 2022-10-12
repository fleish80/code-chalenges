import {Bst} from '../bst';

const bst0 = new Bst();
bst0.add(10);
bst0.add(6);
bst0.add(11);
bst0.add(3);
bst0.add(7);
bst0.add(20);
bst0.add(3);
bst0.delete(10);

console.log(bst0.root);


const bst1 = new Bst();
bst1.add(10);
bst1.add(6);
bst1.add(15);
bst1.add(13);
bst1.add(14);
bst1.add(12);
bst1.add(3);
bst1.add(7);
bst1.add(20);
bst1.add(3);
bst1.delete(10);
// bst1.delete(3);

console.log(bst1.root);

// Wrong solution
// export const isBst = (bst: BstNode | null): boolean => {
//   if (bst === null) {
//     return true;
//   } else {
//     return (bst.left === null || bst.left.value < bst.value) && (bst.right === null || bst.right.value > bst.value) &&
//       isBst(bst.left) && isBst(bst.right);
//   }
// }

export const isBst = (bst: BstNode | null): boolean => {
  return isBstUtil(bst, -Infinity, Infinity);
}

const isBstUtil = (node: BstNode | null, min: number, max: number): boolean => {

  if (node === null) {
    return true;
  }

  if (node.value < min || node.value > max) {
    return false;
  }

  return isBstUtil(node.left, min, node.value) && isBstUtil(node.right, node.value, max)
}

console.log('isBst(bst0.root)', isBst(bst0.root));
console.log('isBst(bst1.root)', isBst(bst1.root));


const bst3: BstNode = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: {
      value: 9,
      left: null,
      right: null
    }
  },
  right: null
}

console.log('isBst(bst3.root)', isBst(bst3));




