// leetcode题号：1358
// 给你一个字符串 s ，它只包含三种字符 a, b 和 c 。
// 请你返回 a，b 和 c 都 至少 出现过一次的子字符串数目。

// 示例 1：
// 输入：s = "abcabc"
// 输出：10
// 解释：包含 a，b 和 c 各至少一次的子字符串为 "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" 和 "abc" (相同字符串算多次)。

// 示例 2：
// 输入：s = "aaacb"
// 输出：3
// 解释：包含 a，b 和 c 各至少一次的子字符串为 "aaacb", "aacb" 和 "acb" 。

// 示例 3：
// 输入：s = "abc"
// 输出：1

function numberOfSubstrings(s) {
    let ans = 0
    let left = 0
    let windowStr = new Map([['a', 0], ['b', 0], ['c', 0]])

    for(let right = 0; right < s.length;right++) {
        windowStr.set(s[right],(windowStr.get(s[right]) || 0) + 1)
        while(Math.min(...windowStr.values()) > 0) {
            // 当滑动到符合条件的窗口时，右端点之后的字符串都是符合条件的
            ans+=s.length - right
            windowStr.set(s[left], windowStr.get(s[left]) - 1)
            left++
        }
    }
    return ans
}

console.log(numberOfSubstrings("abcabc")) // 10
console.log(numberOfSubstrings("aaacb")) // 3
console.log(numberOfSubstrings("abc")) // 1