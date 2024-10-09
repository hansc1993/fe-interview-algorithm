// leetcode题号：3
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

function lengthOfLongestSubstring(s) {
    let ans = 0
    let left = 0
    let windowStr = new Set()
    for(let right = 0; right < s.length;right++) {
        let current = s[right]

        while(windowStr.has(current)) {
            windowStr.delete(s[left])
            left++
        }
        windowStr.add(current)
        ans = Math.max(ans, right - left + 1)
    }
    return ans
}

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring("bbbbb")) // 1
console.log(lengthOfLongestSubstring("pwwkew")) // 3

