// leetcode题号: 1385
// 给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。
// 「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。

// 示例 1：
// 输入：arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
// 输出：2
// 解释：
// 对于 arr1[0]=4 我们有：
// |4-10|=6 > d=2
// |4-9|=5 > d=2
// |4-1|=3 > d=2
// |4-8|=4 > d=2
// 所以 arr1[0]=4 符合距离要求
// 对于 arr1[1]=5 我们有：
// |5-10|=5 > d=2
// |5-9|=4 > d=2
// |5-1|=4 > d=2
// |5-8|=3 > d=2
// 所以 arr1[1]=5 也符合距离要求
// 对于 arr1[2]=8 我们有：
// |8-10|=2 <= d=2
// |8-9|=1 <= d=2
// |8-1|=7 > d=2
// |8-8|=0 <= d=2
// 存在距离小于等于 2 的情况，不符合距离要求
// 故而只有 arr1[0]=4 和 arr1[1]=5 两个符合距离要求，距离值为 2

// 示例 2：
// 输入：arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3
// 输出：2

// 示例 3：
// 输入：arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6
// 输出：1

function findTheDistanceValue(arr1, arr2, d) {
  arr2 = arr2.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    let idx = binarySearch(arr2, arr1[i]); // 二分查找的索引
    let closest = Infinity;

    if (idx < arr2.length) {
      closest = arr2[idx];
    }
    // 看前一项和当前项哪个距离更近, 因为二分法找到的是大于目标值的一项
    if (
      idx > 0 &&
      Math.abs(arr2[idx - 1] - arr1[i]) < Math.abs(closest - arr1[i])
    ) {
      closest = arr2[idx - 1];
    }

    if (Math.abs(arr1[i] - closest) > d) {
      count++;
    }
  }
  return count;
}

// 二分法查找数组中最接近目标值的一项
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
};

console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)); // 2
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)); // 2
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)); // 1
