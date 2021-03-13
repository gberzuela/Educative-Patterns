/* 
    Given an array of positive numbers and a positive number 'S,' find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. Return 0 if no such subarray exists
*/

/**
 * Inputs
 *
 * @param s - Integer value representing target sum to compare
 * @param arr - Array of integers
 * @returns Length of smallest subarray with a sum >= s
 */

/*
    COMPLEXITY

    Time:  O(n)
    Space: O(1)
*/

const smallestSubarrayWithAGivenSum = (s, arr) => {
  let result = Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      result = Math.min(result, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result === Infinity ? 0 : result;
};

// Example 1
let s = 7;
let arr = [2, 1, 5, 2, 3, 2];
let result = smallestSubarrayWithAGivenSum(s, arr);
console.log(`Inputs:\ns: ${s}, arr: [${arr}]\nResult: ${result}\nExpected: 2`);

console.log("------------");

// Example 2
s = 7;
arr = [2, 1, 5, 2, 8];
result = smallestSubarrayWithAGivenSum(s, arr);
console.log(`Inputs:\ns: ${s}, arr: [${arr}]\nResult: ${result}\nExpected: 1`);

console.log("------------");

// Example 3
s = 8;
arr = [3, 4, 1, 1, 6];
result = smallestSubarrayWithAGivenSum(s, arr);
console.log(`Inputs:\ns: ${s}, arr: [${arr}]\nResult: ${result}\nExpected: 3`);
