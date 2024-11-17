// leetcode题号: 2529
// 给你一个按 非递减顺序 排列的数组 nums ，返回正整数数目和负整数数目中的最大值。
// 换句话讲，如果 nums 中正整数的数目是 pos ，而负整数的数目是 neg ，返回 pos 和 neg二者中的最大值。
// 注意：0 既不是正整数也不是负整数。

// 示例 1：
// 输入：nums = [-2,-1,-1,1,2,3]
// 输出：3
// 解释：共有 3 个正整数和 3 个负整数。计数得到的最大值是 3 。

// 示例 2：
// 输入：nums = [-3,-2,-1,0,0,1,2]
// 输出：3
// 解释：共有 2 个正整数和 3 个负整数。计数得到的最大值是 3 。

// 示例 3：
// 输入：nums = [5,20,66,1314]
// 输出：4
// 解释：共有 4 个正整数和 0 个负整数。计数得到的最大值是 4 。

function binarySearch(nums, target) {
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

function maximumCount(nums) {
  let neg = binarySearch(nums, 0);
  // 转换一下,找第一个大于等于1的位置,数组长度减去这个位置,就是正整数的数量
  let pos = nums.length - binarySearch(nums, 1);
  return Math.max(pos, neg);
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3])); //3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])); //3
console.log(maximumCount([5, 20, 66, 1314])); //4
