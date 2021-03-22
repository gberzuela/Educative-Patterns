/*
  Given an array of sorted numbers, remove all duplicates from it. You should NOT USE ANY EXTRA SPACE; after removing the duplicates in place, return the length of the subarry that has no duplicates in it.
 */

/**
 * Inputs
 *
 * @param arr - sorted array of integers
 * @returns length of subarray with no duplicates
 */

/**
 * Complexity
 *
 * Time:  O(n)
 * Space: O(1)
 */

const removeDuplicates = (arr) => {
	let next = 1;

	let index = 1;
	while (index < arr.length) {
		if (arr[index - 1] !== arr[index]) {
			arr[next] = arr[index];
			next++;
		}
		index++;
	}

	return next;
};

// Example 1
let arr = [2, 3, 3, 3, 6, 9, 9];
let result = removeDuplicates(arr);
console.log(`Input: arr = [${arr}]\nResult: ${result}\nExpected: 4`);

console.log('------------');

// Example 2
arr = [2, 2, 2, 11];
result = removeDuplicates(arr);
console.log(`Input: arr = [${arr}]\nResult: ${result}\nExpected: 2`);
