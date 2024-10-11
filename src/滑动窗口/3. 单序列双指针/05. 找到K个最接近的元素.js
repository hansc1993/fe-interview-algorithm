// leetcode题号：658
// 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
// 整数 a 比整数 b 更接近 x 需要满足：
// |a - x| < |b - x| 或者
// |a - x| == |b - x| 且 a < b
 
// 示例 1：
// 输入：arr = [1,2,3,4,5], k = 4, x = 3
// 输出：[1,2,3,4]

// 示例 2：
// 输入：arr = [1,1,2,3,4,5], k = 4, x = -1
// 输出：[1,1,2,3]

// 二分法 + 双指针
// 首先找到比x大的最接近的数
// 左右指针开始移动，寻找到k个后，满足条件

function findClosestElements(arr, k, x) {
    let right = binarySearch(arr, x)
    let left = right - 1


    while(k >= 1) {
        if(left < 0) {
            right++
        }else if(right >= arr.length) {
            left--
        }else if(x - arr[left] <= arr[right] - x) {
            left--
        }else {
            right++
        }
        k--
    }

    return arr.slice(left+1, right)
    
}

function binarySearch(arr, x) {
    let low = 0
    let high = arr.length - 1
    while(low < high) {
        // 先找中间位置
        let mid = low + Math.floor((high - low) / 2)
        // 如果中间位置小于目标值，则将左指针定为中间位置 + 1
        // 右区间，继续找
        if(arr[mid] < x) {
            low = mid + 1
        }else {
            // 如果中间位置大于目标值，右指针定为中间位置
            // 左区间，继续找
            high = mid
        }
    }
    return low
}

console.log(findClosestElements([1,2,3,4,5], 4, 3)) // [1,2,3,4]
console.log(findClosestElements([1,1,2,3,4,5], 4, -1)) // [1,1,2,3]