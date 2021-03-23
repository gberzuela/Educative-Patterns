/*
  Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
*/

/**
 * Complexity
 *
 * Time:  O((n * log(n)) + n^2) => O(n^2)
 * 				sorting is n * log(n)
 * 				for loop will run n^2
 * Space: O(n)
 */

/**
 * Inputs
 *
 * @param arr - unsorted array of integers
 * @returns an array of triplets that sum to zero
 */

const tripletSumZero = (arr) => {
	arr.sort((a, b) => a - b);
	let result = [];

	for (let i = 0; i < arr.length - 2; i++) {
		let left = i + 1;
		let right = arr.length - 1;
		const first = arr[i];
		while (left < right) {
			const leftVal = arr[left];
			const rightVal = arr[right];
			const sum = first + leftVal + rightVal;

			if (sum === 0) {
				result.push([first, leftVal, rightVal]);
				left++;
				right--;
				while (left < right && arr[left] === arr[left - 1]) {
					left++;
				}
				while (left < right && arr[right] === arr[right + 1]) {
					right--;
				}
			} else if (sum < 0) left++;
			else if (sum > 0) right--;
		}
	}

	return result;
};

// Example 1
let arr = [-3, 0, 1, 2, -1, 1, -2];
let result = tripletSumZero(arr);
console.log(`Input: arr = [${arr}]`);
console.log('Result: ', result);
console.log('Expected: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]');

console.log('------------');

// Example 2
arr = [-5, 2, -1, -2, 3];
result = tripletSumZero(arr);
console.log(`Input: arr = [${arr}]`);
console.log('Result: ', result);
console.log('Expected: [[-5, 2, 3], [-2, -1, 3]]');
