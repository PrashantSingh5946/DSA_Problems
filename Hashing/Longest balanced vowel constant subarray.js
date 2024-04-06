/**
 * @param {string} chars
 * @return {number}
 */
function longestSubarrayWithEqualVowelsAndConsonants(chars) {
  const vowels = new Set("aeiouAEIOU");
  const prefixSumMap = new Map();
  prefixSumMap.set(0, -1);

  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < chars.length; i++) {
    sum += vowels.has(chars[i]) ? 1 : -1;

    if (prefixSumMap.has(sum)) {
      maxLength = Math.max(maxLength, i - prefixSumMap.get(sum));
    } else {
      prefixSumMap.set(sum, i);
    }
  }

  return maxLength;
}
