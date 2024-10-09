// leetcode题号：3090
// 给你一个字符串 s ，请找出满足每个字符最多出现两次的最长子字符串，并返回该
// 子字符串
// 的 最大 长度。

// 示例 1：
// 输入： s = "bcbbbcba"
// 输出： 4
// 解释：
// 以下子字符串长度为 4，并且每个字符最多出现两次："bcba"。

// 示例 2：
// 输入： s = "aaaa"
// 输出： 2
// 解释：
// 以下子字符串长度为 2，并且每个字符最多出现两次："aa"。

function maximumLengthSubstring(s) {
    let ans = 0
    let left = 0
    let windowStr = new Map()
    for(let i = 0;i<s.length;i++) {
        let current = s[i]
        windowStr.set(current, (windowStr.get(current) || 0) + 1)

        while(windowStr.get(current) > 2) {
            windowStr.set(s[left], windowStr.get(s[left]) - 1)
            if(windowStr.get(s[left]) === 0) {
                windowStr.delete(s[left])
            }
            left++
        }

        ans =  Math.max(ans, i - left + 1)
    }
    return ans
}

console.log(maximumLengthSubstring("bcbbbcba"))
console.log(maximumLengthSubstring("aaaa"))