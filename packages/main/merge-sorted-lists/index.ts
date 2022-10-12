interface LinkedListNode {
  value: number;
  next: LinkedListNode | null
}


export const mergeSortedLists = (list0: LinkedListNode | null, list1: LinkedListNode | null): LinkedListNode | null => {
  const dummyList: LinkedListNode = {value: Infinity, next: null};
  let dummyTail: LinkedListNode = dummyList;
  while (list0 !== null && list1 !== null) {
    if (list0.value <= list1.value) {
      dummyTail.next = list0;
      list0 = list0.next;
    } else {
      dummyTail.next = list1;
      list1 = list1.next;
    }
    dummyTail = dummyTail.next;
  }
  if (list0 !== null) {
    dummyTail.next = list0;
  }
  if (list1 !== null) {
    dummyTail.next = list1;
  }
  return dummyList.next;
}


const list00: LinkedListNode = {
  value: 1,
  next: {
    value: 3,
    next: {
      value: 5,
      next: null
    }
  }
}

const list01: LinkedListNode = {
  value: 2,
  next: {
    value: 4,
    next: null
  }
}

const mergedList0 = mergeSortedLists(list00, list01);

console.debug({mergedList0});

