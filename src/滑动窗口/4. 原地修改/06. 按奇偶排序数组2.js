// leetcode题号：922
// 给定一个非负整数数组 nums，  nums 中一半整数是 奇数 ，一半整数是 偶数 。
// 对数组进行排序，以便当 nums[i] 为奇数时，i 也是 奇数 ；当 nums[i] 为偶数时， i 也是 偶数 。
// 你可以返回 任何满足上述条件的数组作为答案 。

// 示例 1：
// 输入：nums = [4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。

// 示例 2：
// 输入：nums = [2,3]
// 输出：[2,3]

function sortArrayByParityII(nums) {
    // 扫描偶数索引
    let slow = 0
    // 扫描奇数索引
    for(let fast=1;fast<nums.length;fast+=2) {
        // 如果奇数位是偶数，开始偶数位扫描，找到偶数位上的奇数，进行互换
        if(nums[fast] % 2 === 0) {
            while(slow < nums.length) {
                if(nums[slow] % 2 === 1) {
                    let temp = nums[slow]
                    nums[slow] = nums[fast]
                    nums[fast] = temp
                    break
                }
                slow += 2
            }
        }
    }
    return nums
}

console.log(sortArrayByParityII([4,2,5,7]))
console.log(sortArrayByParityII([2,3]))