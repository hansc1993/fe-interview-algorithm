// leetcode题号：977
// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

// 示例 1：
// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]

// 示例 2：
// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]

function sortedSquares(nums) {
    let ans = new Array(nums.length).fill(0)
    let position = nums.length -1
    let left = 0
    let right = nums.length - 1
    while(position>=0) {
        let leftVal = Math.pow(nums[left], 2)
        let rightVal = Math.pow(nums[right], 2)

        if(leftVal <= rightVal) {
            ans[position] = rightVal
            right--
        }else {
            ans[position] = leftVal
            left++
        }
        position--
    }
    return ans
}

console.log(sortedSquares([-4,-1,0,3,10])) // [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11])) // [4,9,9,49,121]