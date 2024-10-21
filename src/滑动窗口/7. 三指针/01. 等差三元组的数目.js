// leetcode题号: 2367
// 给你一个下标从 0 开始、严格递增 的整数数组 nums 和一个正整数 diff 。如果满足下述全部条件，则三元组 (i, j, k) 就是一个 等差三元组 ：
// i < j < k ，
// nums[j] - nums[i] == diff 且
// nums[k] - nums[j] == diff
// 返回不同 等差三元组 的数目。

// 示例 1：
// 输入：nums = [0,1,4,6,7,10], diff = 3
// 输出：2
// 解释：
// (1, 2, 4) 是等差三元组：7 - 4 == 3 且 4 - 1 == 3 。
// (2, 4, 5) 是等差三元组：10 - 7 == 3 且 7 - 4 == 3 。

// 示例 2：
// 输入：nums = [4,5,6,7,8,9], diff = 2
// 输出：2
// 解释：
// (0, 2, 4) 是等差三元组：8 - 6 == 2 且 6 - 4 == 2 。
// (1, 3, 5) 是等差三元组：9 - 7 == 2 且 7 - 5 == 2 。

function arithmeticTriplets(nums, diff) {
  let answer = 0;
  // i 是第三个元素的目标索引,
  let i = 0;
  // j 是第二个元素的目标索引
  let j = 1;

  for (let k = 0; k < nums.length; k++) {
    // 循环到不小于nums[k]的j索引之后,判断一下,如果是大于nums[k]的,则跳过,否则就是要寻找的第二个元素
    while (j < nums.length && nums[j] + diff < nums[k]) {
      j++;
    }
    if (j < nums.length && nums[j] + diff > nums[k]) {
      continue;
    }

    // 继续循环,找第三个元素,所以需要diff * 2, 如果找到i等于nums[k]了,那么就是目标等差三元组
    while (i < nums.length && nums[i] + diff * 2 < nums[k]) {
      i++;
    }

    if (i < nums.length && nums[i] + diff * 2 === nums[k]) {
      answer++;
    }
  }

  return answer;
}

console.log(arithmeticTriplets([0, 1, 4, 6, 7, 10], 3)); // 2
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9], 2)); // 2
