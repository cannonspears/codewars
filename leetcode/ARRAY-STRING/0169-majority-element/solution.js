/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const lookup = {};
  for (const num of nums) {
    lookup[num] = lookup[num] + 1 || 1;
  }

  for (const key in lookup) {
    if (lookup[key] > Math.floor(nums.length / 2)) {
      return key;
    }
  }
};
