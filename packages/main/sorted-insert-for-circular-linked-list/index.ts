class NodeSIFCLL {

  value: number;
  next: NodeSIFCLL | null;

  constructor(value: number, next: NodeSIFCLL | null) {
    this.value = value;
    this.next = next;
  }
}



function runSIFCLL(head: NodeSIFCLL | null, value: number): NodeSIFCLL {

  let currentHead = head;

  if (head === null) {
    currentHead = new NodeSIFCLL(value, null);
    currentHead.next = currentHead;
  } else if (value < head.value) {
    const headValue = head.value;
    head.value = value;
    head.next = new NodeSIFCLL(headValue, head.next);
  } else {
    while (head!.value < value && (head!.next!.value < value || head!.next!.value !== currentHead!.value)) {
      head = head!.next;
    }
    const nextNode = head!.next;
    head!.next = new NodeSIFCLL(value, nextNode);
  }

  return currentHead!;

}

// const print(head: NodeSIFCLL) {
//
//   while (h)
// }

console.log(runSIFCLL(null, 6));

const node02 = new NodeSIFCLL(2, null);
const node04 = new NodeSIFCLL(4, null);
const node06 = new NodeSIFCLL(6, null);
const node08 = new NodeSIFCLL(8, null);

node02.next = node04;
node04.next = node06;
node06.next = node08;
node08.next = node02;

console.log(node02);

// console.log(runSIFCLL(node02, 7));
