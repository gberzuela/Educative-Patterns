/*
  Given a sorted array, create a new array containg squares of all the numbers of the input array in the sorted order.
*/

/**
 * Inputs
 *
 * @param arr - sorted array of integers
 * @returns sorted array all all values from input arr
 */

/**
 * Complexity
 *
 * Time:  O(n)
 * Space: O(n)
 */

const squaringSortedArray = (arr) => {
	// return arr.map((num) => num ** 2).sort((a, b) => a - b);

	const result = new Array(arr.length).fill(0);
	let next = result.length - 1;
	let left = 0;
	let right = result.length - 1;

	while (left <= right) {
		const leftVal = arr[left] ** 2;
		const rightVal = arr[right] ** 2;

		if (leftVal >= rightVal) {
			result[next] = leftVal;
			left++;
		} else {
			result[next] = rightVal;
			right--;
		}

		next--;
	}

	return result;
};

// Example 1
let arr = [-2, -1, 0, 2, 3];
let result = squaringSortedArray(arr);
console.log(
	`Input: arr = [${arr}]\nResult: [${result}]\nExpected: [0, 1, 4, 4, 9]`
);

console.log('------------');

// Example 2
arr = [-3, -1, 0, 1, 2];
result = squaringSortedArray(arr);
console.log(
	`Input: arr = [${arr}]\nResult: [${result}]\nExpected: [0, 1, 1, 4, 9]`
);

console.log('------------');

// Example 3
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = squaringSortedArray(arr);
console.log(
	`Input: arr = [${arr}]\nResult: [${result}]\nExpected: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`
);
