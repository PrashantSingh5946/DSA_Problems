/**
 * @param {number[]} arr
 * @return {number}
 */
function findLongestSubarray(arr) {
  const hashMap = new Map();

  hashMap.set(0, -1);

  let total = 0;
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      total--;
    } else {
      total++;
    }

    if (hashMap.has(total)) {
      let startIndex = hashMap.get(total);
      maxLength = Math.max(maxLength, i - startIndex);
    } else {
      hashMap.set(total, i);
    }
  }

  return maxLength;
}
