// leetcode题号: 2389
// 给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。
// 返回一个长度为 m 的数组 answer ，其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度  。
// 子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。

// 示例 1：
// 输入：nums = [4,5,2,1], queries = [3,10,21]
// 输出：[2,3,4]
// 解释：queries 对应的 answer 如下：
// - 子序列 [2,1] 的和小于或等于 3 。可以证明满足题目要求的子序列的最大长度是 2 ，所以 answer[0] = 2 。
// - 子序列 [4,5,1] 的和小于或等于 10 。可以证明满足题目要求的子序列的最大长度是 3 ，所以 answer[1] = 3 。
// - 子序列 [4,5,2,1] 的和小于或等于 21 。可以证明满足题目要求的子序列的最大长度是 4 ，所以 answer[2] = 4 。

// 示例 2：
// 输入：nums = [2,3,4,5], queries = [1]
// 输出：[0]
// 解释：空子序列是唯一一个满足元素和小于或等于 1 的子序列，所以 answer[0] = 0 。

function answerQueries(nums, queries) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  for (let i = 0; i < queries.length; i++) {
    // 找到第一个大于target的位置
    let idx = binarySearch(nums, queries[i]);
    result.push(idx);
  }

  return result;
}

// 二分法查找数组中最接近目标值的一项
const binarySearch = (arr, target) => {
  let left = -1;
  let right = arr.length;

  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
};

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21])); // [2, 3, 4]
console.log(answerQueries([2, 3, 4, 5], [1])); // [0]
