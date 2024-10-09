// 两数之和-给定一个数组 nums 和一个目标值 target，在该数组中找出和为目标值的两个数
// 示例  
const nums = [2, 7, 11, 15]; 
const target = 9; 
 
try { 
    const result = twoSum(nums, target); 
    console.log(result); // 输出: [0, 1] 
} catch (error) { 
    console.error(error.message); 
}

function twoSum(nums, target) {
    const map = new Map()
    for(let i = 0;i < nums.length;i++) {
        let currNum = nums[i]
        let targetNum = target - currNum
        if(map.has(targetNum)) {
            return [i, map.get(targetNum)]
        }else {
            map.set(currNum, i)
        }
    }
    return []
}

