// 三数之和-给定一个数组nums，判断 nums 中是否存在三个元素a，b，c，使得 a + b + c = target，找出所有满足条件且不重复的三元组合
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums, 0))

function threeSum(nums, target) {
    const result = []
    nums.sort((a,b)=> a-b)
    const map = {}
    for(let i = 0;i<nums.length;i++) {
        // 重复的不管
        if(i>0 && (nums[i] === nums[i-1])) continue
        // 两个指针，逐渐靠近
        let left = i+1
        let right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if(sum === target) {
                result.push([nums[i],nums[left],nums[right]])
                while(left < right && nums[left] === nums[left + 1]) left++
                while(left < right && nums[right] === nums[right + 1]) right++
                left ++
                right --
            }else if(sum < target) {
                left++
            }else {
                right--
            }
            
        }
        
    }
    return result
}