// leetcode题号：905
// 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。
// 返回满足此条件的 任一数组 作为答案。

// 示例 1：
// 输入：nums = [3,1,2,4]
// 输出：[2,4,3,1]
// 解释：[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。

// 示例 2：
// 输入：nums = [0]
// 输出：[0]

function sortArrayByParity(nums) {
    let slow = 0
    for(let fast = 0; fast<nums.length;fast++) {
        if(nums[fast]%2 === 0) {
            let temp =  nums[slow]
            nums[slow] = nums[fast]
            nums[fast] = temp
            slow++
        }
    }
    return nums
}

console.log(sortArrayByParity([3,1,2,4])) // [2, 4, 3, 1]
console.log(sortArrayByParity([0])) // [0]