// leetcode题号：283
// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

// 示例 1:
// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 示例 2:
// 输入: nums = [0]
// 输出: [0]

// 快慢指针，先将非0元素填到数组前边，之后的元素都补为0
function moveZeroes(nums) {
    let slow = 0

    for(let fast = 0; fast < nums.length; fast++) {
        if(nums[fast] !== 0) {
            nums[slow] = nums[fast]
            slow++
        }
    }
    return nums.fill(0, slow)
}

console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]
console.log(moveZeroes([0])) // [0]
console.log(moveZeroes([0,0,1])) // [0]