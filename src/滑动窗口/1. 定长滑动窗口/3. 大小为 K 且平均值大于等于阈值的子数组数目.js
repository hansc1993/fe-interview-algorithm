// leetcode题号：1343
// 给你一个整数数组 arr 和两个整数 k 和 threshold 。
// 请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。

// 示例 1：
// 输入：arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// 输出：3
// 解释：子数组 [2,5,5],[5,5,5] 和 [5,5,8] 的平均值分别为 4，5 和 6 。其他长度为 3 的子数组的平均值都小于 4 （threshold 的值)。

// 示例 2：
// 输入：arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// 输出：6
// 解释：前 6 个长度为 3 的子数组平均值都大于 5 。注意平均值不是整数。

function numOfSubarrays(arr, k, threshold) {
    let total = 0
    for(let i = 0; i < k;i++) {
       total += arr[i]
    }
    let count = 0
    total / k >= threshold ? count ++ : 0
    for(let i=k;i<arr.length;i++) {
        // 滑动一位
        total = total - arr[i-k] + arr[i]
        if(total / k >= threshold) {
            count++
        }
    }
    return count
}

console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4))
console.log(numOfSubarrays([11,13,17,23,29,31,7,5,2,3], 3, 5))
