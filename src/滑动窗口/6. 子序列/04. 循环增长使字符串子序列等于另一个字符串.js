// leetcode题号: 2825
// 给你一个下标从 0 开始的字符串 str1 和 str2 。
// 一次操作中，你选择 str1 中的若干下标。对于选中的每一个下标 i ，你将 str1[i] 循环 递增，变成下一个字符。也就是说 'a' 变成 'b' ，'b' 变成 'c' ，以此类推，'z' 变成 'a' 。
// 如果执行以上操作 至多一次 ，可以让 str2 成为 str1 的子序列，请你返回 true ，否则返回 false 。
// 注意：一个字符串的子序列指的是从原字符串中删除一些（可以一个字符也不删）字符后，剩下字符按照原本先后顺序组成的新字符串。

// 示例 1：
// 输入：str1 = "abc", str2 = "ad"
// 输出：true
// 解释：选择 str1 中的下标 2 。
// 将 str1[2] 循环递增，得到 'd' 。
// 因此，str1 变成 "abd" 且 str2 现在是一个子序列。所以返回 true 。

// 示例 2：
// 输入：str1 = "zc", str2 = "ad"
// 输出：true
// 解释：选择 str1 中的下标 0 和 1 。
// 将 str1[0] 循环递增得到 'a' 。
// 将 str1[1] 循环递增得到 'd' 。
// 因此，str1 变成 "ad" 且 str2 现在是一个子序列。所以返回 true 。

// 示例 3：
// 输入：str1 = "ab", str2 = "d"
// 输出：false
// 解释：这个例子中，没法在执行一次操作的前提下，将 str2 变为 str1 的子序列。
// 所以返回 false 。

function canMakeSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (
      // 如果两个字母相同,或者字母是z,进一位为a,或者字符差一位,则符合条件
      str1[i] === str2[j] ||
      (str1[i] === "z" && str2[j] === "a") ||
      String.fromCharCode(str1[i].charCodeAt() + 1) === str2[j]
    ) {
      // 符合条件的,j才进一位
      j++;
    }
    i++;
  }
  return j === str2.length;
}

console.log(canMakeSubsequence("abc", "ad")); // true
console.log(canMakeSubsequence("zc", "ad")); // true
console.log(canMakeSubsequence("ab", "d")); // false
