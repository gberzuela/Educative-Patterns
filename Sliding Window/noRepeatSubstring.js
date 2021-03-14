/*
    Given a string, find the length of the longest substring, which has no repeating characters
*/

/**
 * Inputs
 *
 * @param string
 * @returns length of the longest substring with no repeating characters
 */

/*
    COMPLEXITY

    Time:  O(n) where n is the size of input "string"
    Space: O(k) where k is the number of distinct characters
*/

const noRepeatSubstring = (string) => {
  let result = 0;
  let hash = {};
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
    const current = string[windowEnd];
    const inHash = hash[current];
    hash[current] = inHash ? inHash + 1 : 1;

    while (hash[current] > 1) {
      const first = string[windowStart];
      hash[first]--;
      if (!hash[first]) delete hash[first];
      windowStart++;
    }

    result = Math.max(result, windowEnd - windowStart + 1);
  }

  return result;
};

// Example 1
let string = "aabccbb";
let result = noRepeatSubstring(string);
console.log(`Inputs:\nstring: ${string}\nResult: ${result}\nExpected: 3`);

console.log("------------");

// Example 2
string = "abbbb";
result = noRepeatSubstring(string);
console.log(`Inputs:\nstring: ${string}\nResult: ${result}\nExpected: 2`);

console.log("------------");

// Example 3
string = "abccde";
result = noRepeatSubstring(string);
console.log(`Inputs:\nstring: ${string}\nResult: ${result}\nExpected: 3`);
