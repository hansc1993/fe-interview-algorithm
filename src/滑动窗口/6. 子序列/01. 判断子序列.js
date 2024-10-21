// leetcode题号: 392
// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
// 进阶：
// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？

// 示例 1：
// 输入：s = "abc", t = "ahbgdc"
// 输出：true

// 示例 2：
// 输入：s = "axc", t = "ahbgdc"
// 输出：false

// 建立一个s的索引i
// 遍历t,如果t[j]和s[i]相等,那么说明可以继续查找,i进一位,如果循环到s的长度了,说明s就是t的子序列,如果t循环完了,s还没有到达结束位置,说明s不是t的子序列
function isSubsequence(s, t) {
  if (s === "") return true;
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) {
      i++;
    }
    if (i === s.length) {
      return true;
    }
  }

  return false;
}

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
