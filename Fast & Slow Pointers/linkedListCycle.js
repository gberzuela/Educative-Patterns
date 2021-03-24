/*
    Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not
*/

/**
 * Inputs
 *
 * @params head - head of Singly LinkedList
 * @returns boolean value confirming if there's a cycle
 */

const linkedListCycle = (head) => {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// Example 1

const LL1 = new Node(1);
const LL2 = new Node(2);
const LL3 = new Node(3);
const LL4 = new Node(4);
const LL5 = new Node(5);
const LL6 = new Node(6);

LL1.next = LL2;
LL2.next = LL3;
LL3.next = LL4;
LL4.next = LL5;
LL5.next = LL6;
LL6.next = LL3;

// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -
//           ^- - - - - - - - |

let result = linkedListCycle(LL1);
console.log(
  `Input: head = ${LL1.value}, ${LL1.next}\nResult: ${result}\nExpected: true`
);

console.log("------------");

// Example 2
const LL2_2 = new Node(2);
const LL4_2 = new Node(4);
const LL6_2 = new Node(6);
const LL8 = new Node(8);
const LL10 = new Node(10);

LL2_2.next = LL4_2;
LL4_2.next = LL6_2;
LL6_2.next = LL8;
LL8.next = LL10;

// 2 -> 4 -> 6 -> 8 -> 10 -> null

result = linkedListCycle(LL2_2);
console.log(
  `Input: head = ${LL2_2.value}, ${LL2_2.next}\nResult: ${result}\nExpected: false`
);
