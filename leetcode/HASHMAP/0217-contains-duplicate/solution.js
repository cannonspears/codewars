/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Brute Force Method: O(n^2)
var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
};

// Set Method: O(n)
var containsDuplicate = function (nums) {
  const setNums = new Set(nums);
  return setNums.size != nums.length;
};
