// leetcode题号：1234

// 有一个只含有 'Q', 'W', 'E', 'R' 四种字符，且长度为 n 的字符串。
// 假如在该字符串中，这四个字符都恰好出现 n/4 次，那么它就是一个「平衡字符串」。
// 给你一个这样的字符串 s，请通过「替换一个子串」的方式，使原字符串 s 变成一个「平衡字符串」。
// 你可以用和「待替换子串」长度相同的 任何 其他字符串来完成替换。
// 请返回待替换子串的最小可能长度。
// 如果原字符串自身就是一个平衡字符串，则返回 0。

// 示例 1：
// 输入：s = "QWER"
// 输出：0
// 解释：s 已经是平衡的了。

// 示例 2：
// 输入：s = "QQWE"
// 输出：1
// 解释：我们需要把一个 'Q' 替换成 'R'，这样得到的 "RQWE" (或 "QRWE") 是平衡的。

// 示例 3：
// 输入：s = "QQQW"
// 输出：2
// 解释：我们可以把前面的 "QQ" 替换成 "ER"。 

// 示例 4：
// 输入：s = "QQQQ"
// 输出：3
// 解释：我们可以替换后 3 个 'Q'，使 s = "QWER"。

function balancedString(s) {
    let current = new Map()
    let avg = s.length / 4

    for(let i = 0 ; i < s.length; i++) {
        current.set(s[i], (current.get(s[i]) || 0)+ 1)
    }
    // 如果字符出现的次数都不超过平均值，且每个字符都出现了，则不需要替换
    if(current.size === 4 && Math.min(...current.values()) === avg) {
        return 0
    }

    let ans = Infinity
    let left = 0

    for(let right = 0;right < s.length;right++) {
        // 窗口外的字符数量减少
        current.set(s[right], current.get(s[right]) - 1)

        // 如果子串外的字符数量都不超过avg，说明窗口内是可替换子串
        while(Math.max(...current.values()) <= avg) {
            ans = Math.min(ans, right - left + 1)
            current.set(s[left], current.get(s[left]) + 1)
            left++
        }
    }
    return ans
}

console.log(balancedString("QWER")) // 0
console.log(balancedString("QQWE")) // 1
console.log(balancedString("QQQW")) // 2
console.log(balancedString("QQQQ")) // 3