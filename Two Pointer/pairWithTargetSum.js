/*
  Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target

  Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target
*/

/**
 * Inputs
 *
 * @param arr - sorted array of integers
 * @param target_sum - target to find
 * @returns pair of indices in the array whose sum is equal to the given target or [-1, -1]
 */

/**
 * COMPLEXITY
 *
 * Time:  O(n)
 * Space: O(1)
 */

const pairWithTargetSum = (arr, target_sum) => {
	let left = 0;
	let right = arr.length - 1;

	while (left < right) {
		const current = arr[left] + arr[right];

		if (current === target_sum) return [left, right];

		if (current < target_sum) left++;
		else right--;
	}

	return [-1, -1];
};

// Example 1
let arr = [1, 2, 3, 4, 6];
let target = 6;
let result = pairWithTargetSum(arr, target);
console.log(
	`Inputs:\narr: [${arr}], target: ${target}\nResult: [${result}]\nExpected: [1, 3]`
);

// Example 2
arr = [2, 5, 9, 11];
target = 11;
result = pairWithTargetSum(arr, target);
console.log(
	`Inputs:\narr: [${arr}], target: ${target}\nResult: [${result}]\nExpected: [0, 2]`
);

// Example 3
arr = [2, 5, 9, 11];
target = 100;
result = pairWithTargetSum(arr, target);
console.log(
	`Inputs:\narr: [${arr}], target: ${target}\nResult: [${result}]\nExpected: [-1, -1]`
);
