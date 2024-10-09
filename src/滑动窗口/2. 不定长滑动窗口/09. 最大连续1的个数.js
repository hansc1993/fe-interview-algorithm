// leetcode题号：1004
// 给定一个二进制数组 nums 和一个整数 k，如果可以翻转最多 k 个 0 ，则返回 数组中连续 1 的最大个数 。
// 示例 1：
// 输入：nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2
// 输出：6
// 解释：[1,1,1,0,0,1,1,1,1,1,1]
// 粗体数字从 0 翻转到 1，最长的子数组长度为 6。

// 示例 2：
// 输入：nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
// 输出：10
// 解释：[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// 粗体数字从 0 翻转到 1，最长的子数组长度为 10。

function longestOnes(nums, k) {
    let ans = 0
    let left = 0
    let reversed = 0

    for(let right = 0;right<nums.length;right++) {
        if(nums[right] === 0) {
            reversed++
        }

        while(reversed > k) {
            if(nums[left] === 0) {
                reversed--
            }
            left++
        }
        ans = Math.max(ans, right - left + 1)
    }
    return ans
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2))
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))