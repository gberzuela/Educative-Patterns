/*
    Given an array of characters where each characters represents a fruit tree, you are given TWO baskets, and your goal is to put maximum number of fruit in each basket. The only restriction is that each basket can have only one type of truit.

    You can start with any tree, but you can't skip a tree once you have started. You will pick one fruit from each tree until cannot, i.e., you will stop when you have to pick from a third fruit type.
*/

/**
 * Inputs
 *
 * @param fruit - String of characters representing fruit trees
 * @returns the maximum number of fruits in both baskets
 */

/*
    COMPLEXITY

    Time:  O(n)
    Space: O(1)
*/

const fruitsIntoBaskets = (fruits) => {
  let result = -Infinity;
  let hash = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const current = fruits[windowEnd];
    hash[current] = hash[current] ? hash[current] + 1 : 1;
    let fruitsInHash = Object.keys(hash).length;

    while (fruitsInHash > 2) {
      const startFruit = fruits[windowStart];
      hash[startFruit]--;
      windowStart++;
      if (!hash[startFruit]) {
        delete hash[startFruit];
        fruitsInHash--;
      }
    }
    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};

// Example 1
let fruits = ["A", "B", "C", "A", "C"];
let result = fruitsIntoBaskets(fruits);
console.log(`Input:\nfruits: [${fruits}]\nResult: ${result}\nExpected: 3`);

console.log("------------");

// Example 2
fruits = ["A", "B", "C", "B", "B", "C"];
result = fruitsIntoBaskets(fruits);
console.log(`Input:\nfruits: [${fruits}]\nResult: ${result}\nExpected: 5`);
