// leetcode题号: 1170
// 定义一个函数 f(s)，统计 s  中（按字典序比较）最小字母的出现频次 ，其中 s 是一个非空字符串。
// 例如，若 s = "dcce"，那么 f(s) = 2，因为字典序最小字母是 "c"，它出现了 2 次。
// 现在，给你两个字符串数组待查表 queries 和词汇表 words 。对于每次查询 queries[i] ，需统计 words 中满足 f(queries[i]) < f(W) 的 词的数目 ，W 表示词汇表 words 中的每个词。
// 请你返回一个整数数组 answer 作为答案，其中每个 answer[i] 是第 i 次查询的结果。

// 示例 1：
// 输入：queries = ["cbd"], words = ["zaaaz"]
// 输出：[1]
// 解释：查询 f("cbd") = 1，而 f("zaaaz") = 3 所以 f("cbd") < f("zaaaz")。

// 示例 2：
// 输入：queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
// 输出：[1,2]
// 解释：第一个查询 f("bbb") < f("aaaa")，第二个查询 f("aaa") 和 f("aaaa") 都 > f("cc")。

function numSmallerByFrequency(queries, words) {
  let result = [];
  // 先统计字母频次后排序
  for (let i = 0; i < words.length; i++) {
    words[i] = minimumWordCount(words[i]);
  }
  words.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    // 找到比queries[i]频次大的最接近的一项,往后的元素都是符合条件的
    let idx = binarySearch(words, minimumWordCount(queries[i]));
    result.push(words.length - idx);
  }
  return result;
}

function minimumWordCount(str) {
  let count = 0;
  str = str.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt());
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      count = i + 1;
      break;
    }
  }
  return count;
}

// 二分法查找数组中最接近目标值的一项
const binarySearch = (arr, target) => {
  let left = -1;
  let right = arr.length;

  while (left + 1 < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid;
    }
  }

  return right;
};

console.log(numSmallerByFrequency(["cbd"], ["zaaaz"])); // [1]
console.log(numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"])); // [1, 2]
