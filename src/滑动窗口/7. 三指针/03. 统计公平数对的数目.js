// leetcode题号: 2563
// 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，和两个整数 lower 和 upper ，返回 公平数对的数目 。
// 如果 (i, j) 数对满足以下情况，则认为它是一个 公平数对 ：
// 0 <= i < j < n，且
// lower <= nums[i] + nums[j] <= upper

// 示例 1：
// 输入：nums = [0,1,7,4,4,5], lower = 3, upper = 6
// 输出：6
// 解释：共计 6 个公平数对：(0,3)、(0,4)、(0,5)、(1,3)、(1,4) 和 (1,5) 。

// 示例 2：
// 输入：nums = [1,7,9,2,5], lower = 11, upper = 11
// 输出：1
// 解释：只有单个公平数对：(2,3) 。

// 三指针
function countFairPairs(nums, lower, upper) {
  let ans = 0;
  nums.sort((a, b) => a - b);
  let left = nums.length;
  let right = nums.length;

  for (let j = 0; j < nums.length; j++) {
    while (right && nums[right - 1] > upper - nums[j]) {
      right--;
    }

    while (left && nums[left - 1] >= lower - nums[j]) {
      left--;
    }

    ans += Math.min(right, j) - Math.min(left, j);
  }

  return ans;
}

console.log(countFairPairs([0, 1, 7, 4, 4, 5], 3, 6)); // 6
console.log(countFairPairs([1, 7, 9, 2, 5], 11, 11)); // 1
