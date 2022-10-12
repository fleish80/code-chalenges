export class Bst {

  root: BstNode | null;

  constructor() {
    this.root = null;
  }

  add(value: number) {
    this.root = this.addNode(this.root, {value, left: null, right: null});
    // if (this.root === null) {
    //   this.root = {value, left: null, right: null};
    // } else {
    //   this.addNode(this.root, {value, left: null, right: null});
    // }

  }

  private addNode(node: BstNode | null, newNode: BstNode): BstNode {
    if (node === null) {
      return newNode;
    }
    if (newNode.value < node.value) {
      node.left = this.addNode(node.left, newNode);
    }
    if (newNode.value > node.value) {
      node.right = this.addNode(node.right, newNode);
    }
    return node;

    // if (newNode.value < node.value) {
    //   if (node.left === null) {
    //     node.left = newNode;
    //   } else {
    //     this.addNode(node.left, newNode);
    //   }
    // }
    // if (newNode.value > node.value) {
    //   if (node.right === null) {
    //     node.right = newNode;
    //   } else {
    //     this.addNode(node.right, newNode);
    //   }
    // }
  }

  delete(value: number) {
    this.deleteNode(this.root, value);


    // let parentNode: BstNode | null = null;
    // let node: BstNode | null = this.root;
    // while (node !== null && node.value !== value) {
    //   parentNode = node;
    //   if (value < node.value) {
    //     node = node.left;
    //   } else if (value > node.value) {
    //     node = node.right
    //   }
    // }
    // if (node !== null) {
    //   // case 1 - the node is a root
    //   if (parentNode === null) {
    //     if (node.right !== null) {
    //       if (node.left !== null) {
    //         node.right = this.addNode(node.right, node.left);
    //       }
    //       this.root = node.right;
    //     } else {
    //       this.root = node.left;
    //     }
    //   } else {
    //     // case 2 - the node is not a leaf
    //
    //   }
    // }
  }

  private deleteNode(node: BstNode | null, value: number): BstNode | null {
    if (node === null) {
      return null;
    } else if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.right === null) {
        return node.left;
      } else if (node.left === null) {
        return node.right;
      } else {
        node.value = this.minValue(node.right) as number;
        node.right = this.deleteNode(node.right, node.value);
      }
    }
    return node;
  }

  private minValue(node: BstNode | null): number | null {
    if (node === null) {
      return null;
    }
    if (node.left === null) {
      return node.value;
    }
    return this.minValue(node.left);
  }

}
