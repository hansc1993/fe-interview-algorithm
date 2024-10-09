// leetcode题号：3258
// 给你一个 二进制 字符串 s 和一个整数 k。
// 如果一个 二进制字符串 满足以下任一条件，则认为该字符串满足 k 约束：
// 字符串中 0 的数量最多为 k。
// 字符串中 1 的数量最多为 k。
// 返回一个整数，表示 s 的所有满足 k 约束 的 子字符串 的数量。

// 示例 1：
// 输入：s = "10101", k = 1
// 输出：12
// 解释：s 的所有子字符串中，除了 "1010"、"10101" 和 "0101" 外，其余子字符串都满足 k 约束。

// 示例 2：
// 输入：s = "1010101", k = 2
// 输出：25
// 解释：s 的所有子字符串中，除了长度大于 5 的子字符串外，其余子字符串都满足 k 约束。

// 示例 3：
// 输入：s = "11111", k = 1
// 输出：15
// 解释：s 的所有子字符串都满足 k 约束。

function countKConstraintSubstrings(s, k) {
    let ans = 0;
    let left = 0
    let zeroNums = 0;
    let oneNums = 0

    for(let right=0;right<s.length;right++) {
        if(s[right] === "0") {
            zeroNums++
        }else {
            oneNums++
        }

        while(zeroNums > k && oneNums > k) {
            if(s[left] === "0") {
                zeroNums--
            }else {
                oneNums--
            }
            left++
        }
        ans += right - left + 1
    }

    return ans
}

console.log(countKConstraintSubstrings("10101", 1)) // 12
console.log(countKConstraintSubstrings("1010101", 2)) // 25
console.log(countKConstraintSubstrings("11111", 1)) // 15