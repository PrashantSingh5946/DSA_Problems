/**
 * @param {number[]} arr
 * @return {number}
 */
function findLongestConsecutiveSubsequence(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const set = new Set(arr);
  let maxLength = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      maxLength = Math.max(maxLength, currentLength);
    }
  }

  return maxLength;
}
