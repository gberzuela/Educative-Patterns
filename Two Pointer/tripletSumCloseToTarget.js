/*
    Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum. 
*/

/**
 * Inputs
 *
 * @params arr - array of unsorted integers
 * @params target - integer
 * @returns sum of three integers from input arr that is closest to target
 */

const tripletSumCloseToTarget = (arr, target) => {
  arr.sort((a, b) => a - b);
  let currentResult = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (Math.abs(target - sum) < Math.abs(target - currentResult)) {
        currentResult = sum;
        left++;
      } else if (sum > target) right--;
      else left++;
    }
  }

  return currentResult;
};

// Example 1
let arr = [-2, 0, 1, 2];
let target = 2;
let result = tripletSumCloseToTarget(arr, target);
console.log(
  `Inputs: arr = [${arr}], target = ${target}\nResult: ${result}\nExpected: 1`
);

console.log("------------");

// Example 2
arr = [-3, -1, 1, 2];
target = 1;
result = tripletSumCloseToTarget(arr, target);
console.log(
  `Inputs: arr = [${arr}], target = ${target}\nResult: ${result}\nExpected: 0`
);

console.log("------------");

// Example 3
arr = [1, 0, 1, 1];
target = 100;
result = tripletSumCloseToTarget(arr, target);
console.log(
  `Inputs: arr = [${arr}], target = ${target}\nResult: ${result}\nExpected: 3`
);
