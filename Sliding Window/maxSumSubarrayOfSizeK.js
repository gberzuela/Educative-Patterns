/* 
    Given an array of positive numbers and a positive number 'k', find the maximum sum of any contiguous subarray of size 'k'
*/

/**
 * Inputs
 *
 * @param k - Integer representing size of subarrays
 * @param arr - Array of integers
 * @returns Integer representing max sum of all subarrays of size k
 */

/*
    COMPLEXITY

    Time:  O(n)
    Space: O(1)
*/

const maxSumSubarrayOfSizeK = (k, arr) => {
  let result = -Infinity;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k) {
      windowSum -= arr[windowStart];
      windowStart++;
      result = Math.max(result, windowSum);
    }
  }

  return result;
};

// Example 1
let k = 3;
let arr = [2, 1, 5, 1, 3, 2];
let result = maxSumSubarrayOfSizeK(k, arr);
console.log(`Input:\narr: ${arr}, k: ${k}\nResult: ${result}\nExpected: 9`);

console.log("------------");

// Example 2
k = 2;
arr = [2, 3, 4, 1, 5];
result = maxSumSubarrayOfSizeK(k, arr);
console.log(`Input:\narr: ${arr}, k: ${k}\nResult: ${result}\nExpected: 7`);
