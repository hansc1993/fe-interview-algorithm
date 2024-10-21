// leetcode题号: 524
// 给你一个字符串 s 和一个字符串数组 dictionary ，找出并返回 dictionary 中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。
// 如果答案不止一个，返回长度最长且字母序最小的字符串。如果答案不存在，则返回空字符串。

// 示例 1：
// 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// 输出："apple"

// 示例 2：
// 输入：s = "abpcplea", dictionary = ["a","b","c"]
// 输出："a"

// 和上一题一样,只是多一层dictionary的遍历,和长度,字母序的判断
function findLongestWord(s, dictionary) {
  let result = "";
  for (let i = 0; i < dictionary.length; i++) {
    let target = dictionary[i];

    let j = 0;

    for (let k = 0; k < s.length; k++) {
      if (s[k] === target[j]) {
        j++;
      }

      if (j === target.length) {
        if (target.length > result.length) {
          result = target;
        } else if (target.length === result.length) {
          result = target < result ? target : result;
        }
      }
    }
  }
  return result;
}

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"])); // "apple"
console.log(findLongestWord("abpcplea", ["a", "b", "c"])); // "a"
