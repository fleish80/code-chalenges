interface ListNode {
  value: number;
  right: ListNode | null;
  down: ListNode | null;
}

export const flatteringLinkedList = (head: ListNode | null): ListNode | null => {

  if (head === null) {
    return null;
  }

  let res: ListNode = {value: -Infinity, right: null, down: null};

  let currentHead: ListNode | null = head;

  const ques: ListNode[] = [];

  if (head.down !== null) {
    ques.push(head.down);
  }

  while (currentHead !== null) {
    const temp = currentHead;
    let currentValue: [ListNode, number] = [{value: Infinity, right: null, down: null}, -1]; // ListNode with the smallest value, index number in ques array
    for (let i = 0; i < ques.length; i++) {
      if (ques[i].value < currentValue[0].value) {
        currentValue = [ques[i], i];
      }
    }

    if (currentHead.right !== null && currentHead.right.value < currentValue[0].value) {
      currentHead = currentHead.right;
      if (currentHead.down !== null) {
        ques.push(currentHead.down);
      }
    } else if (ques.length > 0) {
      currentHead = currentValue[0];
      currentHead.right = temp.right;
      if (ques[currentValue[1]].down === null) {
        ques.splice(currentValue[1], 1);
      } else {
        ques[currentValue[1]] = ques[currentValue[1]].down as ListNode;
      }
    } else {
      currentHead = null;
    }

    temp.down = null;
    res.right = temp;
    res = temp;
  }

  return head;
}

const list01Down: ListNode = {
  value: 7,
  right: null,
  down: {
    value: 8,
    right: null,
    down: {
      value: 30,
      right: null,
      down: null
    }
  }
}

const list02Down: ListNode = {
  value: 20,
  right: null,
  down: null
}

const list03Down: ListNode = {
  value: 22,
  right: null,
  down: {
    value: 50,
    right: null,
    down: null
  }
}

const list04Down: ListNode = {
  value: 35,
  right: null,
  down: {
    value: 40,
    right: null,
    down: {
      value: 45,
      right: null,
      down: null
    }
  }
}

const list0: ListNode = {
  value: 5,
  right: {
    value: 10,
    right: {
      value: 19,
      right: {
        value: 28,
        right: null,
        down: list04Down
      },
      down: list03Down
    },
    down: list02Down
  },
  down: list01Down
}

const res0 = flatteringLinkedList(list0);
console.log({res0});

export const flatteringLinkedListCorrect = (head: ListNode | null): ListNode | null => {

  if (head === null || head.right === null) {
    return head;
  }

  head.right = flatteringLinkedListCorrect(head.right);
  head = merge(head, head.right);
  return head;

}

const merge = (listA: ListNode | null, listB: ListNode | null): ListNode | null => {
  if (listA === null) {
    return listB;
  }
  if (listB === null) {
    return listA;
  }

  if (listA.value <= listB.value) {
    listA.down = merge(listA.down, listB);
    listA.right = null;
    return listA;
  } else {
    listB.down = merge(listA, listB.down);
    listB.right = null;
    return listB;
  }


}

const list11Down: ListNode = {
  value: 7,
  right: null,
  down: {
    value: 8,
    right: null,
    down: {
      value: 30,
      right: null,
      down: null
    }
  }
}
const list13Down: ListNode = {
  value: 22,
  right: null,
  down: {
    value: 50,
    right: null,
    down: null
  }
}

const merge1 = merge(list11Down, list13Down);

console.log({merge1});
