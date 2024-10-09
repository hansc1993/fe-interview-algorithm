// leetcode题号：930
// 给你一个二元数组 nums ，和一个整数 goal ，请你统计并返回有多少个和为 goal 的 非空 子数组。
// 子数组 是数组的一段连续部分。

// 示例 1：
// 输入：nums = [1,0,1,0,1], goal = 2
// 输出：4
// 解释：
// 有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]

// 示例 2：
// 输入：nums = [0,0,0,0,0], goal = 0
// 输出：15

// 1
// 1 0
// 1 0 1 √
// 1 0 1 0 √
// 1 0 1 0 1
//   0 1
//   0 1 0
//   0 1 0 1 √
//     1 0 1 √
//       0 1

// 双滑动窗口
function numSubarraysWithSum(nums, goal) {
    
}

// 双指针
function numSubarraysWithSum2(nums, goal) {
    let ans = 0
    for(let left=0;left < nums.length;left++) {
        let sum = 0
        let right = left
        while(right < nums.length) {
            sum += nums[right]
            if(sum === goal) {
                ans++
            }
            right++
        }
    }
    return ans
}

console.log(numSubarraysWithSum([1,0,1,0,1], 2)) // 4
console.log(numSubarraysWithSum([0,0,0,0,0], 0)) // 15