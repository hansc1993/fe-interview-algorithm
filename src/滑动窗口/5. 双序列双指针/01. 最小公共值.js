// leetcode题号：2540
// 给你两个整数数组 nums1 和 nums2 ，它们已经按非降序排序，请你返回两个数组的 最小公共整数 。如果两个数组 nums1 和 nums2 没有公共整数，请你返回 -1 。
// 如果一个整数在两个数组中都 至少出现一次 ，那么这个整数是数组 nums1 和 nums2 公共 的。

// 示例 1：
// 输入：nums1 = [1,2,3], nums2 = [2,4]
// 输出：2
// 解释：两个数组的最小公共元素是 2 ，所以我们返回 2 。

// 示例 2：
// 输入：nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// 输出：2
// 解释：两个数组中的公共元素是 2 和 3 ，2 是较小值，所以返回 2 。

function getCommon(nums1, nums2) {
    let i1 = 0
    let i2 = 0
    while(i1 < nums1.length && i2<nums2.length) {
        if(nums1[i1] === nums2[i2]) {
            return nums1[i1]
        }
        
        if(nums1[i1] < nums2[i2]) {
            i1++
        }

        if(nums1[i1] > nums2[i2]) {
            i2++
        }
    }
    return -1
}

console.log(getCommon([1,2,3], [2,4])) // 2
console.log(getCommon([1,2,3,6], [2,3,4,5])) // 2