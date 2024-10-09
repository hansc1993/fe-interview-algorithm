// leetcode题号：2962
// 给你一个整数数组 nums 和一个 正整数 k 。
// 请你统计有多少满足 「 nums 中的 最大 元素」至少出现 k 次的子数组，并返回满足这一条件的子数组的数目。
// 子数组是数组中的一个连续元素序列。

// 示例 1：
// 输入：nums = [1,3,2,3,3], k = 2
// 输出：6
// 解释：包含元素 3 至少 2 次的子数组为：[1,3,2,3]、[1,3,2,3,3]、[3,2,3]、[3,2,3,3]、[2,3,3] 和 [3,3] 。

// 示例 2：
// 输入：nums = [1,4,2,1], k = 3
// 输出：0
// 解释：没有子数组包含元素 4 至少 3 次。

function countSubarrays(nums, k) {
    let ans = 0
    let left = 0
    let count = 0
    let target = Math.max(...nums)

    for(let right = 0; right < nums.length;right++) {
        if(nums[right] === target) {
            count++
        }

        while(count >= k) {
            ans += nums.length - right
            if(nums[left] === target) {
                count--
            }
            left++
        }
    }

    return ans
}

console.log(countSubarrays([1,3,2,3,3], 2)) // 6
console.log(countSubarrays([1,4,2,1], 3)) // 0