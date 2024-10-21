// leetcode题号: 3132
// 给你两个整数数组 nums1 和 nums2。
// 从 nums1 中移除两个元素，并且所有其他元素都与变量 x 所表示的整数相加。如果 x 为负数，则表现为元素值的减少。
// 执行上述操作后，nums1 和 nums2 相等 。当两个数组中包含相同的整数，并且这些整数出现的频次相同时，两个数组 相等 。
// 返回能够实现数组相等的 最小 整数 x 。

// 示例 1:
// 输入：nums1 = [4,20,16,12,8], nums2 = [14,18,10]
// 输出：-2
// 解释：
// 移除 nums1 中下标为 [0,4] 的两个元素，并且每个元素与 -2 相加后，nums1 变为 [18,14,10] ，与 nums2 相等。

// 示例 2:
// 输入：nums1 = [3,5,5,3], nums2 = [7,7]
// 输出：2
// 解释：
// 移除 nums1 中下标为 [0,3] 的两个元素，并且每个元素与 2 相加后，nums1 变为 [7,7] ，与 nums2 相等。

function minimumAddedInteger(nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);
  // 因为只能删除2个元素,所以0,1,2三个索引上的三个数,一定是有一个能力留下的
  // 从后往前循环,遇到第一个满足的索引,即是答案,因为要选差最小的元素,所以是找最大元素
  for (let i = 2; i > 0; i--) {
    // 如果当前i是保留的元素,那么后续每个元素差值都为diff
    let diff = nums2[0] - nums1[i];

    let j = 0;
    // 只需要判断nums1是否为nums2的子序列即可
    for (let k = i; k < nums1.length; k++) {
      if (nums2[j] === nums1[k] + diff && ++j === nums2.length) {
        return diff;
      }
    }
  }
  return nums2[0] - nums1[0];
}

console.log(minimumAddedInteger([4, 20, 16, 12, 8], [14, 18, 10])); // -2
console.log(minimumAddedInteger([3, 5, 5, 3], [7, 7])); // 2
