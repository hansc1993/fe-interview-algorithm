// leetcode题号: 34
// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
// 如果数组中不存在目标值 target，返回 [-1, -1]。
// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

// 示例 1：
// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3, 4]

// 示例 2：
// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]

// 示例 3：
// 输入：nums = [], target = 0
// 输出：[-1,-1]

// lowerBound返回最小的满足 nums[i] >= target 的i
function lowerBound(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

function searchRange(nums, target) {
  // 先通过二分查找第一个target的开始位置
  let start = lowerBound(nums, target);

  // 如果开始位置在数组结尾了,或者数组里没有target值,返回-1,-1
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1];
  }
  // 寻找比target大1的第一个位置, 再减去1,就是target 终点的位置
  let end = lowerBound(nums, target + 1) - 1;

  return [start, end];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([], 0)); // [-1, -1]
