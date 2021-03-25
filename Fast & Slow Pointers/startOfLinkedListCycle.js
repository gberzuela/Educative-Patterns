/*
    Given the head of the Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
*/

/*
    Complexity

    Time:  O(n + n) where n is the size of the LinkedList => O(2n) => O(n)
    Space: O(1)
*/

/**
 * Inputs
 *
 * @params head - head of Singly LinkedList
 * @returns the starting node a cycle within the input
 */

const startOfLinkedListCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
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

/*
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -
              ^- - - - - - - - |
*/

let result = startOfLinkedListCycle(LL1);
console.log(`Input:`);
let current = LL1;
for (let i = 0; i < 6; i++) {
  console.log(current);
  current = current.next;
}
console.log(`Result: `, result);
console.log(
  "Expected: Node { value: 3, next: Node { value: 4, next: Node { value: 5, next: [Node] } } }"
);

console.log("------------");

// Example 2
LL6.next = LL4;

/*
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -
                   ^ - - - - - |
*/

result = startOfLinkedListCycle(LL1);
console.log(`Input:`);
current = LL1;
for (let i = 0; i < 6; i++) {
  console.log(current);
  current = current.next;
}
console.log(`Result: `, result);
console.log(
  "Expected: Node { value: 4, next: Node { value: 5, next: Node { value: 6, next: [Node] } } }"
);

// Example 3
LL6.next = LL1;

/*
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -
    ^- - - - - - - - - - - - - |
*/

result = startOfLinkedListCycle(LL1);
console.log(`Input:`);
current = LL1;
for (let i = 0; i < 6; i++) {
  console.log(current);
  current = current.next;
}
console.log(`Result: `, result);
console.log(
  "Expected: Node { value: 1, next: Node { value: 2, next: Node { value: 3, next: [Node] } } }"
);
