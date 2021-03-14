/*
    Given a string, find the length of the longest substring in it with no more than K distinct characters
*/

/**
 * Inputs
 *
 * @param k - Integer representing number of distinct characters a substring can have
 * @param string
 * @returns the lengths of the longest substring within "string" with no more than "k" distinct chars
 */

/*
    COMPLEXITY

    Time:  O(n)
    Space: O(k)
*/

const longestSubstringWithKDistinctCharacter = (k, string) => {
  let result = 0;
  let windowStart = 0;
  let hash = {};

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    const currentChar = string[windowEnd];
    const inHash = hash[currentChar];
    hash[currentChar] = inHash ? hash[currentChar] + 1 : 1;
    let charInHash = Object.keys(hash).length;

    while (charInHash > k) {
      result = Math.max(result, windowEnd - windowStart);
      const firstChar = string[windowStart];
      hash[firstChar]--;
      windowStart++;
      if (!hash[firstChar]) {
        delete hash[firstChar];
        charInHash--;
      }
    }
  }

  return result;
};

// Example 1
let k = 2;
let string = "araaci";
let result = longestSubstringWithKDistinctCharacter(k, string);
console.log(
  `Inputs:\nk: ${2}, string: ${string}\nResult: ${result}\nExpected: 4`
);

console.log("------------");

// Example 2
k = 1;
string = "araaci";
result = longestSubstringWithKDistinctCharacter(k, string);
console.log(
  `Inputs:\nk: ${2}, string: ${string}\nResult: ${result}\nExpected: 2`
);

console.log("------------");

// Example 1
k = 3;
string = "cbbebi";
result = longestSubstringWithKDistinctCharacter(k, string);
console.log(
  `Inputs:\nk: ${2}, string: ${string}\nResult: ${result}\nExpected: 5`
);
