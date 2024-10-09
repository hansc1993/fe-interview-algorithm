// leetcode题号：2799
// 给你一个由 正 整数组成的数组 nums 。
// 如果数组中的某个子数组满足下述条件，则称之为 完全子数组 ：
// 子数组中 不同 元素的数目等于整个数组不同元素的数目。
// 返回数组中 完全子数组 的数目。
// 子数组 是数组中的一个连续非空序列。


// 示例 1：
// 输入：nums = [1,3,1,2,2]
// 输出：4
// 解释：完全子数组有：[1,3,1,2]、[1,3,1,2,2]、[3,1,2] 和 [3,1,2,2] 。

// 示例 2：
// 输入：nums = [5,5,5,5]
// 输出：10
// 解释：数组仅由整数 5 组成，所以任意子数组都满足完全子数组的条件。子数组的总数为 10 。

function countCompleteSubarrays(nums) {
    let ans = 0
    let left = 0
    let targetSize = new Set(nums).size
    let subNums = new Map()
    
    for(let right = 0; right<nums.length;right++) {
        subNums.set(nums[right], (subNums.get(nums[right]) || 0) + 1)
        while(subNums.size === targetSize) {
            subNums.set(nums[left], subNums.get(nums[left]) - 1)
            if(subNums.get(nums[left]) === 0) {
                subNums.delete(nums[left])
            }
            left++
        }
        ans += left
    }
    return ans
}

console.log(countCompleteSubarrays([1,3,1,2,2])) // 4
console.log(countCompleteSubarrays([5,5,5,5])) // 10