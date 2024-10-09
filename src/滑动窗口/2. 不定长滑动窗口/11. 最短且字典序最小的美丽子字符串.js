// leetcode题号：2904
// 给你一个二进制字符串 s 和一个正整数 k 。
// 如果 s 的某个子字符串中 1 的个数恰好等于 k ，则称这个子字符串是一个 美丽子字符串 。
// 令 len 等于 最短 美丽子字符串的长度。
// 返回长度等于 len 且字典序 最小 的美丽子字符串。如果 s 中不含美丽子字符串，则返回一个 空 字符串。
// 对于相同长度的两个字符串 a 和 b ，如果在 a 和 b 出现不同的第一个位置上，a 中该位置上的字符严格大于 b 中的对应字符，则认为字符串 a 字典序 大于 字符串 b 。
// 例如，"abcd" 的字典序大于 "abcc" ，因为两个字符串出现不同的第一个位置对应第四个字符，而 d 大于 c 。

// 示例 1：
// 输入：s = "100011001", k = 3
// 输出："11001"
// 解释：示例中共有 7 个美丽子字符串：
// 1. 子字符串 "100011   " 。
// 2. 子字符串 "1000110  " 。
// 3. 子字符串 "10001100 " 。
// 4. 子字符串 " 00011001" 。
// 5. 子字符串 "  0011001" 。
// 6. 子字符串 "   011001" 。
// 7. 子字符串 "    11001" 。
// 最短美丽子字符串的长度是 5 。
// 长度为 5 且字典序最小的美丽子字符串是子字符串 "11001" 。

// 示例 2：
// 输入：s = "1011", k = 2
// 输出："11"
// 解释：示例中共有 3 个美丽子字符串：
// 1. 子字符串 "101 " 。
// 2. 子字符串 " 011" 。
// 3. 子字符串 "  11" 。
// 最短美丽子字符串的长度是 2 。
// 长度为 2 且字典序最小的美丽子字符串是子字符串 "11" 。 

// 示例 3：
// 输入：s = "000", k = 1
// 输出：""
// 解释：示例中不存在美丽子字符串。

function shortestBeautifulSubstring(s, k) {
    let left = 0;
    let count = 0;
    let minStr = "";

    for (let right = 0; right < s.length; right++) {

        if (s[right] === "1") {
            count++;
        }

        while (count > k || s[left] === "0") {
            if (s[left] === "1") {
                count--;
            }
            left++;
        }
        

        // 检查窗口内的"1"数量是否等于k
        if (count === k) {
            let currentStr = s.slice(left, right + 1)
            // 更新最小子串条件
            if (
                minStr === "" ||
                currentStr.length < minStr.length ||
                (currentStr.length === minStr.length && currentStr < minStr)
            ) {
                minStr = currentStr; // 更新最小子串
            }
        }
    }

    return minStr;
}

console.log(shortestBeautifulSubstring("100011001", 3)) // "11001"
console.log(shortestBeautifulSubstring("1011", 2)) // "11"
console.log(shortestBeautifulSubstring("000", 1)) // ""
console.log(shortestBeautifulSubstring("001", 1)) // "1"